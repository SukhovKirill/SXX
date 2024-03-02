const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
  const name = req.body.name;
  res.send(`<h1>Привет, ${name}!</h1>`);
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});