const fs = require('fs/promises');

fs.writeFile('./first.txt', 'First file text')
  .then(() => console.log('File first.txt was written'))
  .then(() => fs.appendFile('./first.txt', '\nFirst file appended text'))
  .then(() => console.log('Text to the first.txt was appended'))
  .then(() => fs.rename('./first.txt', './renamed-first.txt'))
  .then(() => console.log('File first.txt was renamed'))
  .catch((err) => console.error(err));
