import fs from 'fs';
import EventEmitter from 'events';
const fileEmitter = new EventEmitter();
const filePath = './first.txt';

fs.writeFile(filePath, 'First file text', () => {
  fileEmitter.emit('writeComplete');
});

fileEmitter.on('writeComplete', () => {
  console.log(`File ${filePath} was written`);
  fs.appendFile(filePath, '\nFirst file appended text', () => {
    fileEmitter.emit('appendComplete');
  });
});

fileEmitter.on('appendComplete', () => {
  console.log(`Text to the ${filePath} was appended`);
  fs.rename(filePath, './renamed-first.txt', () => {
    fileEmitter.emit('renameComplete');
  });
});

fileEmitter.on('renameComplete', () => {
  console.log(`File ${filePath} was renamed`);
});
