console.log(global);

global.setTimeout(() => {
  console.log('Hello!');
}, 1000);

console.log(__dirname);
console.log(__filename);

console.log(process.env);
console.log(process.argv);
console.log(`Hello, ${process.argv[2]}!`);

const url = new URL('https://google.com/path/name#test');
console.log(url);
console.log(url.hostname);
console.log(url.href);
console.log(url.pathname);
console.log(url.hash);
