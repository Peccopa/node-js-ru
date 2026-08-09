const multiply = require('./multiply');

test('should multiply 5 and 10 and return 50', () => {
  expect(multiply(5, 10)).toBe(50);
});
