// exercise 3.3 : number 값을 받아 그 값의 팩토리얼 값을 텍스트로 응답하는 GET /factorial 라우트와 GET /factorial/:number 라우트를 구현

const express = require('express');

const app = express();
const port = 3000;


const factorial = number => {
    let result = 1;
    for (let i = 0; i < number; i++) result *= (i + 1);
    return result;
};


app.get('/factorial', (req, res) => {
    const { number } = req.query;
    return res.redirect(`/factorial/${number}`);
});


app.get('/factorial/:number',(req,res)=>res.send(`${factorial(req.params.number)}`));

app.listen(port, () => console.log(`Server listening on port ${port}!`));