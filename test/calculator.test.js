const Calculator = require ('../files/calculator.js')
 
describe( Calculator, () => {

test("Expect two numbers to be added", () => {
  const addMe = new Calculator(13,3);
  expect(addMe.add()).toBe(16);
})
test("Expect two numbers to be subtracted", () => {
  const addMe = new Calculator(13,3);
  expect(addMe.subtract()).toBe(10);
})
test("Expect two numbers to be divided", () => {
  const addMe = new Calculator(9,3);
  expect(addMe.divide()).toBe(3);
})
test("Expect two numbers to be multiplied", () => {
  const addMe = new Calculator(13,3);
  expect(addMe.multiply()).toBe(39);
})
});

