// lesson #3
// const CC = require('currency-converter-lt');
// let currencyConverter = new CC({ from: 'USD', to: 'EUR', amount: 100 });
// currencyConverter.convert().then((response) => {
//   console.log(`Result ${response.toFixed(2)}`);
// });

// lesson #4
// const os = require('os');
// let res0 = os.platform();
// console.log(res0);
// const my_math = require('./my_math');
// let res1 = my_math.add(2, 2);
// let res2 = my_math.minus(2, 2);
// console.log(res1);
// console.log(res2);

// lesson #5
const fs = require('fs');
fs.readFile('some.txt', 'utf-8', (err, data) => {
  fs.writeFile('some.txt', data + '\nSome new text', (err, data) => {
    console.log('Complete!');
  });
});
