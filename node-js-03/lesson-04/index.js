const fs = require('fs');

// fs.readFile('./text.txt', (error, data) => {
//   console.log(data.toString());
// });

// fs.readFile('./text-1.txt', 'utf-8', (error, data) => {
//   fs.mkdirSync('./files', () => {});
//   fs.writeFileSync('./files/text-3.txt', `${data} - 3`, (error) => {
//     error ? console.log(error) : null;
//   });
// });

fs.readFile('./text-1.txt', 'utf-8', (error, data) => {
  fs.mkdir('./files', () => {
    fs.writeFile('./files/text-3.txt', `${data} - 3`, (error) => {
      error ? console.log(error) : null;
    });
  });
});

setTimeout(() => {
  if (fs.existsSync('./files/text-3.txt')) {
    fs.unlink('./files/text-3.txt', () => {});
  }
}, 3000);

setTimeout(() => {
  if (fs.existsSync('./files')) {
    fs.rmdir('./files', () => {});
  }
}, 4000);
