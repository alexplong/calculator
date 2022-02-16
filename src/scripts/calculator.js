/** @format */
import calcUI from "./calcui";
const Parser = require("expr-eval").Parser;
const parser = new Parser();

export const Calc = () => {
  const controlCheck = ["escape", "delete", "backspace", "enter", "return"];
  const operatorCheck = ["+", "-", "*", "/"];
  const periodCheck = ".";
  const integerCheck = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let calcInput = "";

  const fixLength = (input) => {
    // let endChange = calcInput.slice(0, calcInput.length - 1);
    // calcInput = endChange;
    // calcUI.render(calcInput);
  };

  // const posOrNeg = () => {
  //   try {
  //     if (Parser.parse(calcInput)) {
  //     }
  //     if (false) {
  //     }
  //   } catch (e) {
  //     console.log(e)
  //   }
  // };

  const ifControl = (input) => {
    console.log(input);
    if (input === "enter" || input === "return") {
      try {
        let calculate = Parser.evaluate(calcInput);
        calcInput = calculate;
        calcUI.render(calcInput);
      } catch (e) {
        console.log(e);
      }
    }
    if (input === "backspace" || input === "delete") {
      if (calcInput.length > 0) {
        let inputChange = calcInput.slice(0, calcInput.length - 1);
        calcInput = inputChange;
        calcUI.render(calcInput);
      }
    }
    if (input === "escape") {
      calcInput = "";
      calcUI.render(calcInput);
    }
  };

  const addInteger = (input) => {
    calcInput += input;
    calcUI.render(calcInput);
  };

  const ifOperation = (input) => {
    if (calcInput.length < 1) {
      calcInput += 0 + input;
      calcUI.render(calcInput);
    }

    if (!operatorCheck.includes(calcInput[calcInput.length - 1])) {
      calcInput += input;
      calcUI.render(calcInput);
    }

    if (operatorCheck.includes(calcInput[calcInput.length - 1])) {
      let operatorChange = calcInput.slice(0, calcInput.length - 1);
      calcInput = operatorChange;
      calcInput += input;
      calcUI.render(calcInput);
    }
  };

  const ifPeriod = (input) => {
    console.log(calcInput);
    try {
      if (calcInput[calcInput.length - 1] === ".") {
      }

      if (
        calcInput[calcInput.length - 1] === "+" ||
        calcInput[calcInput.length - 1] === "-" ||
        calcInput[calcInput.length - 1] === "/" ||
        calcInput[calcInput.length - 1] === "*" ||
        calcInput.length === 0
      ) {
        calcInput += "0.";
        calcUI.render(calcInput);
      }
      if (
        Parser.parse(calcInput).tokens.length === 1 &&
        Parser.parse(calcInput).tokens[0].value.toString().indexOf(".") === -1
      ) {
        console.log(
          Parser.parse(calcInput).tokens[0].value.toString().indexOf(".")
        );
        calcInput += ".";
        calcUI.render(calcInput);
        console.log(Parser.parse(calcInput).tokens[0].value.toString());
      }
      if (
        Parser.parse(calcInput).tokens.length > 1 &&
        Parser.parse(calcInput)
          .tokens[Parser.parse(calcInput).tokens.length - 2].value.toString()
          .indexOf(".") === -1
      ) {
        console.log(
          Parser.parse(calcInput).tokens[
            Parser.parse(calcInput).tokens.length - 2
          ]
        );
        calcInput += ".";
        calcUI.render(calcInput);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const registerInput = (input) => {
    document.addEventListener("keydown", (event) => {
      let trigger = String(event.key).toLowerCase();
      let isInteger = integerCheck.includes(trigger);
      let isOperation = operatorCheck.includes(trigger);
      let isPeriod = periodCheck.includes(trigger);
      let isControl = controlCheck.includes(trigger);

      if (calcInput.length > 5) {
        fixLength(trigger);
      }
      if (isInteger) {
        addInteger(trigger);
      }
      if (isOperation) {
        ifOperation(trigger);
      }
      if (isPeriod) {
        ifPeriod(trigger);
      }
      if (isControl) {
        ifControl(trigger);
      }
    });
    document.addEventListener("click", (event) => {
      let trigger = String(event.target.id).toLowerCase();
      let isInteger = integerCheck.includes(trigger);
      let isOperation = operatorCheck.includes(trigger);
      let isPeriod = periodCheck.includes(trigger);
      let isControl = controlCheck.includes(trigger);
      if (trigger === "posneg") {
        posOrNeg();
      }
      if (calcInput.length > 15) {
        fixLength(trigger);
      }

      if (isInteger) {
        addInteger(trigger);
      }
      if (isOperation) {
        ifOperation(trigger);
      }
      if (isPeriod) {
        ifPeriod(trigger);
      }
      if (isControl) {
        ifControl(trigger);
      }
    });
  };
  return {
    registerInput,
  };
};

export default Calc;
