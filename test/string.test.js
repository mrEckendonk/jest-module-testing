const stringLength = require('../files/string.js')


test('Expect that this test shows an error',() => {
  expect(stringLength('mike')).toBe(4);
  expect(() => stringLength('Mike is happy')).toThrow('String must have at least 1 character and not more than 10');
  
});
test('Expect that this test shows an error',() => {
  expect(stringLength('eckybrazzz')).toBe(10);
});

test('string length is 10', () => {
  expect(stringLength('abcdefghij')).toBe(10);
});

test('string length is 3', () => {
  expect(stringLength('abc')).toBe(3);
});