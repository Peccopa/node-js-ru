// lesson #3
// const CC = require('currency-converter-lt');
// let currencyConverter = new CC({ from: 'USD', to: 'EUR', amount: 100 });
// currencyConverter.convert().then((response) => {
//   console.log(`Result ${response.toFixed(2)}`);
// });

// lesson #4
// const os = require('os');
// let res0 = os.platform();
// console.log(res0);
// const my_math = require('./my_math');
// let res1 = my_math.add(2, 2);
// let res2 = my_math.minus(2, 2);
// console.log(res1);
// console.log(res2);

// lesson #5
// const fs = require('fs');
// fs.readFile('some.txt', 'utf-8', (err, data) => {
//   fs.writeFile('some.txt', data + '\nSome new text', (err, data) => {
//     console.log('Complete!');
//   });
// });

// lesson #6
// const fs = require('fs');
// fs.mkdirSync('text-files');
// fs.mkdir('text-files', () => {
//   fs.writeFile('./text-files/some.txt', '\nHello Worm!', (err, data) => {
//     console.log(err);
//     console.log(data);
//   });
// });
// fs.unlink('./text-files/some.txt', () => {
//   fs.rmdir('./text-files', () => {});
// });

// lesson #7
// const http = require('http');
// let server = http.createServer((req, res) => {
//   // res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
//   res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
//   res.end(`
//     <!DOCTYPE html>
//       <html lang="en">
//         <head>
//           <meta charset="UTF-8">
//           <meta name="viewport" content="width=device-width, initial-scale=1.0">
//           <title>Node JS</title>
//         </head>
//         <body>
//           <h1>Hello Worm!</h1>
//         </body>
//       </html>
// `);
// });
// const PORT = 3000;
// const HOST = 'localhost';
// server.listen(PORT, HOST, () => {
//   console.log(`Server http://${HOST}:${PORT} is runnig`);
// });
