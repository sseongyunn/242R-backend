// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => res.send('Hello World!'));

// app.listen(port, () => console.log(`Server listening on port ${port}!`));

const express = require('express');

const port = 3000;
const app = express();

app.set('Views', `${__dirname}/views`);
app.set('View engine', 'pug');

app.get('/',(req,res) => {});

app.get('/page', (req,res) =>{});

app.get('/posts', (req, res) => {});

app.listen(port, () => console.log(`Server listening on port ${port}!`));