const { stdin, stdout } = process;

stdout.write('Start program\n');
const flag = process.argv[2];

if (flag === '-d') stdout.write(__dirname);
if (flag === '-f') stdout.write(__filename);
if (!flag) stdout.write('Enter flag -d or -f');
