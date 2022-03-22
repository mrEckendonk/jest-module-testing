const capitalize = require('../files/capitalize.js')

test("Expect a given string to be capitalized", () => {
  expect(capitalize('brazil')).toBe('Brazil');
})