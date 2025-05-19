const { stdin, stdout } = process;

// console.log(process.argv.slice(2));
// function getValue(flag) {
//   const flagIndex = process.argv.indexOf(flag);
//   return flagIndex !== -1 ? process.argv[flagIndex + 1] : null;
// }
// const message = getValue("-m");
// console.log(message);

stdout.write('Enter 2 numbers\n');
stdin.on('data', (data) => {
  const arr = data
    .toString()
    .split('')
    .filter((e) => Number(e));
  if (process.argv.includes('-s')) {
    stdout.write(`${arr.reduce((a, c) => Number(a) + Number(c))}`);
    process.exit();
  }
  if (process.argv.includes('-m')) {
    stdout.write(`${arr.reduce((a, c) => Number(a) * Number(c))}`);
    process.exit();
  }
});

// console.log(action);
