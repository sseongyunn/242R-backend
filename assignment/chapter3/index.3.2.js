// exercise 3.2 : GET /board/page/:page 라우트로 요청을 받았을 때 페이지 번호를 표시하는 문자열을 생성하여 응답하는 Express.js 서버 app

const express = require('express');

const app = express();
const port = 3000;

app.get('/board/page/:page', (req, res) => {
    page = req.params.page;
    res.send(`This is page #${page}`);
})

app.listen(port, () => console.log(`Server listening on port ${port}!`));