const fs = require('fs');

try {
  fs.writeFileSync('./first.txt', 'First file text');
  console.log('File first.txt was written');
  fs.appendFileSync('./first.txt', '\nFirst file appended text');
  console.log('Text to the first.txt was appended');
  fs.renameSync('./first.txt', './renamed-first.txt');
  console.log('File first.txt was renamed');
} catch (error) {
  console.error('Done!');
}





