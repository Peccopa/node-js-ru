let isRunnung = true;

setTimeout(() => {
  isRunnung = false;
}, 10);
process.nextTick(() => console.log('Next tick'));

while (isRunnung) {
  console.log('While loop id running...');
}
