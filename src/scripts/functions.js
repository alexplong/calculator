/** @format */

export const Func = () => {
  const _add = (a, b) => a + b;
  const _subtract = (a, b) => a - b;
  const _product = (a, b) => a * b;
  const _divide = (a, b) => a / b;

  const operate = (operation, x, y) => {
    let total = 0;
    switch (operation) {
      case "+":
        total = _add(Number(x), Number(y));
        return total;
        break;
      case "-":
        total = _subtract(Number(x), Number(y));
        return total;
        break;
      case "*":
        total = _product(Number(x), Number(y));
        return total;
        break;
      case "/":
        total = _divide(y, Number(x), Number(y));
        return total;
        break;
    }
  };

  return {
    operate,
  };
};

export default Func;
