const { stdin, stdout } = process;
// process.stdout.write('Node.js')
// stdout.write('Hello\nNode.js');
// stdin.on('data', (data) => stdout.write(data));
// process.on('exit', (code) => {
// if (code === 0) stdout.write('Exit!');
// });

stdout.write('Hello, what is your name?\n');
stdin.on('data', (data) => {
  stdout.write(`Well, hello\n`);
  stdout.write(`${data.toString().split('').reverse().join('')}\n`);
  process.exit();
});
process.on('exit', (code = 0) => {
  stdout.write('Goodbye!');
});
