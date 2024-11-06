// exercise 3.1 : GET/ 요청을 받으면 query 데이터를, POST/, PUT/, DELETE/ 요청을 받으면 body 데이터를 문자열 형태로 변환하여 응답으로 반환하는 웹 서버

const express = require('express');

const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}));

const objectToString = obj =>
    Object.keys(obj).map(k=>`${k} : ${obj[k]}`).join('\n');

app.get('/',(req,res)=>res.send(objectToString(req.query)));
app.post('/',(req,res)=>res.send(objectToString(req.body)));
app.put('/', (req,res)=>res.send(objectToString(req.body)));
app.delete('/',(req,res)=>res.send(objectToString(req.body)));
app.listen(port,()=>console.log(`Server listening on port ${port}!`));