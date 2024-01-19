// console.log(arguments.callee.toString());
// console.log('Hello');
// console.log(exports);
// console.log(require);
// console.log(module);
// console.log(__filename);
// console.log(__dirname);
const { myName, myFriendName, myGreatHobbies } = require('./export-and-import');
const {
  myName: myOtherName,
  myHobbies,
  myFavoriteNumber,
} = require('./multiple-exports');
const greatingFn = require('./my-modules/single-exports');
// const greatingFn = require('d:/УЧЁБА/node_js/node_js_webdev/03-commonjs-modules/single-exports.js');

console.log(myName, myHobbies, myFavoriteNumber);
console.log(myName, myHobbies, myFavoriteNumber);

myHobbies.push('cracking');

greatingFn(myName);
console.log(myName, myFriendName, myOtherName);
console.log(myGreatHobbies);
