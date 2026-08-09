import express = require('express');

const app = express();

app.get('/', function (_req, res) {
  res.send('Hello Worm!!!');
});

app.listen(3000);
