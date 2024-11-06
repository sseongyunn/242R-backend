//fs : readdir, stat, stats.isDirectory
//path: extname, join
//util.promisify

//fs.readdir : dir 파일들 읽어오기
//fs.stat : 파일 정보 객체 만들기

//path.extname 확장자
//path.join 경로 합치기

const path = require('path');
const fs = require('fs');
const util = require('util');

const getDirectories = util.promisify(fs.readdir);
const getFileStat = util.promisify(fs.stat);

var testfolder = './test';   // 파일 목록 읽어올 폴더

const getdirectoryPath = async folder => {
	const files = await getDirectories(folder);
	files.forEach(async file => {
		var filePath = path.join(folder, file);
		const stat = await getFileStat(filePath);
		if(stat.isDirectory()){
			await getdirectoryPath(filePath);
		}
		else if (path.extname(filePath)===`.js`){
			filePath = filePath.replaceAll("/", "\\");
			console.log(filePath);
		}
	});
};

(async () => {
	try {
		await getdirectoryPath(testfolder);
	} catch(err){
		console.error(err);
	}
})();