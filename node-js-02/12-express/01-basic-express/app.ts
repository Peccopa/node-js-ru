// const http = require('http');
// const server = http.createServer((req, res) => {
//   res.end('Response from the server');
// });
// server.listen(5000, () => console.log('Server was started on port 5000'));

import express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Response from Express');
});
app.listen(5000, () => console.log('Server was started on port 5000'));
