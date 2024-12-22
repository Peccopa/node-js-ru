const path = require('path');

const filePath = 'd:/УЧЁБА/node_js/node_js_webdev/07-path/index.js';
const textFilePath = 'd:/УЧЁБА/node_js/node_js_webdev/renamed-first.txt';
const relativePath = './05-fs/sync-fs.js';
const directoryPath = './05-fs/subfolder';

console.log(path.isAbsolute(textFilePath)); // true
console.log(path.isAbsolute(relativePath)); // false

console.log(path.basename(filePath)); // index.js
console.log(path.basename(directoryPath)); // subfolder

console.log(path.dirname(filePath)); // d:/УЧЁБА/node_js/node_js_webdev/07-path
console.log(path.dirname(directoryPath)); // ./05-fs

console.log(path.resolve(relativePath)); // d:\УЧЁБА\node_js\node_js_webdev\05-fs\sync-fs.js

console.log(path.extname(directoryPath)); // ''
console.log(path.extname(path.resolve(relativePath))); // .js

console.log(path.parse(filePath)); // .js

const parsedPath = path.parse(filePath);
const newPath = path.join(parsedPath.dir, `renamed-${parsedPath.name}.mjs`);
console.log(filePath);
console.log(path.isAbsolute(filePath));
console.log(newPath);
console.log(path.isAbsolute(newPath));
