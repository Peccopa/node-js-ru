const os = require('os');
const { userName, sayHi } = require('./module.js');
console.log(userName);
console.log(sayHi(userName));
console.log(os.platform(), os.release());
