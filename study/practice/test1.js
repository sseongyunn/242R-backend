// 교재 ch2 코드를 실습해보는 파일

// code 2.1 string formatting without template literal
// 문제 1. 변수와 변하지 않는 부분이 분리되어 있어 실제 문자열의 형태가 직관적으로 표현되지 않음
// 문제 2. 문자열을 표현하기 위한 ' 문자나 덧셈 기호 등으로 인해 코드가 불필요하게 길어져 가독성을 저해시킨다.

const printPower1 = (x1,y1) => {
    const msg1 = 'Value of ' + x1 + ' to the power '+ y1 + ' is ' +x1**y1 + '.';
    console.log(msg1);
};

printPower1(3,4)

// code 2.2 string formatting with template Literal

const printPower2 = (x,y) => {
    const msg2 = `Value of ${x} to the power ${y} is ${x**y}.`;
    console.log(msg2);
};

printPower2(3,4)

//code 2.3 Array Destructing

const printArray = () => {
    const arr = [1, 2, 3, 4];
    const [ , , , a4,a5,a6=10] = arr;
    console.log(a4, a5, a6);
}

printArray();
// console.log(a1);
// const [b1, ,b3] = arr;

// const[, , , c4, c5, c6 = 10] = arr

const printArray3 = () => {
    const obj = { x: 1, y: 2, z: 3 };
    const { x, z, u, v = 10 } = obj;
    const { y: y1 } = obj;
    console.log(x, z, u, v);
    console.log(y1);
    //console.log(y);
}

printArray3();


//const getStatusCode = res => res.status.code;
//const code1 = getStatusCode({ status: { code: 400 } });
//const code2 = getStatusCode({});      //에러 발생



const getStatusCode = res => {
    try {
        console.log('try');
        return res.status.code;
    } catch (err) {
        console.log('catch');
        return 0;
    } finally {
        console.log('finally');
    }
};
const code1 = getStatusCode({ status: { code: 400 } });
console.log(code1);
const code2 = getStatusCode({});
console.log(code2);

const validateData = data => {
    if (!data) throw new Error(500);
    if (!data.length) throw new Error(404);
    return data;
};
const createMessage = data => {
    try {
        const checkedData = validateData(data);
        return `Success: ${data}`;
    } catch (e) {
        return `Failed: ${e.message}`;
    }
};
console.log(createMessage());           //Failed: 500
console.log(createMessage([]));         //Failed: 404
console.log(createMessage([1, 2, 3]));  //Success: 1, 2, 3

// const path = require('path');
// const myFile = '/home/ubuntu/kuniv/kweb/example.js';
// const dirname = path.dirname(myFile);
// const basename = path.basename(myFile);
// const extname = path.extname(myFile);
// console.log(`path.dirname = ${dirname}`);
// console.log(`path.basename = ${basename}`);
// console.log(`path.extname = ${extname}`);


// const PI = 3.14159265358;
// const round = number => Math.round(number * 100) / 100;
// const getCircumference = radius => round(2 * PI * radius);
// const getCircleArea = radius => round(PI * radius ** 2);
// const getCylinderSurfaceArea = (radius, height) => {
//     const circleArea = getCircleArea(radius);
//     const sideArea = getCircumference(radius) * height;
//     return round(2 * circleArea + sideArea);
// };
// module.exports = {
//     getCircumference: getCircumference,
//     getCircleArea: getCircleArea,
//     getCylinderSurfaceArea: getCylinderSurfaceArea,
//     getSphereVolume: radius => round(4 * PI * radius ** 3 / 3),
// };

// const circularShapes = require('./circular-shapes');
// const r = 10;
// const h = 20;
// console.log(`Circumference = ${circularShapes.getCircumference(r)}`);
// console.log(`Circle Area = ${circularShapes.getCircleArea(r)}`);
// console.log(`Sphere Volume = ${circularShapes.getSphereVolume(r)}`);
// console.log(`Cylinder Surface Area = ${circularShapes.getCylinderSurfaceArea(r, h)}`);

// const fs = require('fs');
// console.log('String 1');
// const data = fs.readFileSync('./file.bin');
// console.log(`Data length: ${data.length} bytes`);
// console.log('String 2');