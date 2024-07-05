const { myName, myHobbies } = require('./multiple-exports');
// console.log(myHobbies);
const myFriendName = 'Gonza';

module.exports.myName = myName;
module.exports.myFriendName = myFriendName;
module.exports.myGreatHobbies = myHobbies;
