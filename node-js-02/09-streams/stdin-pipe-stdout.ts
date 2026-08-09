import { Transform } from 'stream';
// import fs from 'fs';
import { stdin, stdout } from 'process';

const upperCaseStream = new Transform({
  transform: function (chunk, encoding, cb) {
    const upperCased = chunk.toString().toUpperCase();
    cb(null, upperCased);
  },
});

const reverseStream = new Transform({
  transform(chunk, encoding, cb) {
    const arrayOfChars = chunk.toString().split('');
    const lastChar = arrayOfChars.pop();
    const reversed = arrayOfChars.reverse().concat(lastChar).join('');
    cb(null, reversed);
  },
});

stdin.pipe(upperCaseStream).pipe(reverseStream).pipe(stdout);

// //pipe to file
// const filePath = './files/stdin-dump.txt';
// const writeStream = fs.createWriteStream(filePath);
// stdin.pipe(writeStream);
// //pipe to stdout
// stdin.pipe(stdout);
