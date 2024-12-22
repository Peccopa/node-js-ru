const fs = require('fs');
const dns = require('dns');

function info(text) {
  console.log(text, performance.now().toFixed(2));
}

console.log('Program: start');
// Timeouts
setTimeout(() => info('Timeout: 1'), 0);
setTimeout(() => {
  process.nextTick(() => info('Next tick 2'));
  info('Timeout: 2');
}, 100);
// Close events
fs.writeFile('./test.txt', 'Hello!', () => info('File written'));
// Promises
Promise.resolve().then(() => info('Promise 1'));
// Next tick
process.nextTick(() => info('Next tick 1'));
// Setimmediate (Check)
setImmediate(() => info('Immediate 1'));
// Intervals
let intervalCount = 0;
const intervalId = setInterval(() => {
  info(`Interval ${(intervalCount += 1)}`);
  if (intervalCount >= 2) clearInterval(intervalId);
}, 50);
// I/O Events
dns.lookup('google.com', (error, address, family) => {
  info('DNS 1 google.com', address);
  Promise.resolve().then(() => info('Promise 2'));
  process.nextTick(() => info('Next tick 3'));
});

console.log('Program: end');
