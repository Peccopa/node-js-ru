const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');
let isRunnung = true;

setTimeout(() => {
  isRunnung = false;
}, 2);
process.nextTick(() => console.log('Next tick'));

function setImmediatePromise() {
  return new Promise((resolve, reject) => {
    setImmediate(() => resolve());
    // resolve();
  });
}

async function whileLoop() {
  while (isRunnung) {
    console.log('While loop id running...');
    await setImmediatePromise();
  }
}

whileLoop().then(() => console.log('While loop ended'));
