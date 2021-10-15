const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const product = (a, b) => a * b;
const divide = (a, b) => a / b;

const operate = (operator, x, y) => {
  if (operator === add) {
    return add(x, y);
  } else if (operator === subtract) {
    return subtract(x, y);
  } else if (operator === product) {
    return product(x, y);
  } else if (operator === divide) {
    return divide(x, y);
  }
}

// console.log(operate(divide, 4, 3))

