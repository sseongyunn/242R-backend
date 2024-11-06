// 47쪽의 Code 3.13을 참고하여 로그인할 수 있는 웹 페이지를 응답하는 GET / 라우트와 
// 로그인 페이지에서 받은 username과 password 값을 텍스트로 응답하는 POST /login 라우트의 controller를 구현하여라. 
// 이때 사용자로 부터 body 데이터를 제대로 받기 위해서 Code 3.14와 같이 미들웨어를 설정하여라.

const express = require('express');

const app = express();
const port = 3000;

app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug');

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.render('login.pug'));

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    return res.send(`Username: ${username} / Password: ${password}`);
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));