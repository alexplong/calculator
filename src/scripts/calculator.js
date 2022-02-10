/** @format */
import calcUI from "./calcui";
const Parser = require("expr-eval").Parser;
const parser = new Parser();

export const Calc = () => {
  const controlCheck = ["Escape", "Delete", "Backspace", "Enter"];
  const operatorCheck = ["+", "-", "*", "/"];
  const periodCheck = [".", "Period"];
  const integerCheck = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let calcInput = "";

  const addInteger = (input) => {
    calcInput += input;
    calcUI.render(calcInput);
  };

  const ifOperation = (input) => {
    if (
      // if string already includes an operator, we solve it, add answer to screen and add new trigger to end of string
      calcInput.includes("*") ||
      calcInput.includes("/") ||
      calcInput.includes("+") ||
      calcInput.includes("-")
    ) {
      let calculate = Parser.evaluate(calcInput);
      calcInput = calculate + input;

      calcUI.render(calcInput);
    } else if (!operatorCheck.includes(calcInput[calcInput.length - 1])) {
      // no operator at the end of string, add it
      calcInput += input;
      calcUI.render(calcInput);
    } else {
      // operator already at the end, so slice the end one out and add current one on
      let operatorChange = calcInput.slice(0, calcInput.length - 1);
      calcInput = operatorChange;
      calcInput += input;
      calcUI.render(calcInput);
    }
  };

  const ifPeriod = (input) => {
    // let parseCheck = parser.functions.

    if (
      // if no operator present
      !calcInput.includes("*") ||
      !calcInput.includes("/") ||
      !calcInput.includes("+") ||
      !calcInput.includes("-") // also add that if negative present, in index of 0 okay
    ) {
      if (!calcInput.includes(".")) {
        if (!calcInput.length || calcInput.includes("-")) {
          calcInput += 0 + ".";
          calcUI.render(calcInput);
        } else {
          calcInput += ".";
          calcUI.render(calcInput);
        }
      }
    }
    if (
      calcInput.includes("*") ||
      calcInput.includes("/") ||
      calcInput.includes("+") ||
      calcInput.includes("-")
    ) {
      if (operatorCheck.includes(calcInput[calcInput.length - 1])) {
        calcInput += "0" + input;
        calcUI.render(calcInput);
      } else {
        // console.log(Parser.parse(calcInput).tokens[1].value);
        // if current input being added doesnt have period, add it
        if (!Parser.parse(calcInput).tokens[1].value.toString().includes(".")) {
          // need to extract second variable because here a period in first variable wont let me add to second
          calcInput += input;
          calcUI.render(calcInput);
        }
      }
    }
  };

  const registerInput = (input) => {
    // let calcInput = "";
    document.addEventListener("keydown", (event) => {
      let trigger = String(event.key).toLowerCase();
      let isInteger = integerCheck.includes(trigger);
      let isOperation = operatorCheck.includes(trigger);
      let isPeriod = periodCheck.includes(trigger);

      if (isInteger) {
        addInteger(trigger);
      }
      if (isOperation) {
        ifOperation(trigger);
      }
      if (isPeriod) {
        ifPeriod(trigger);
      }
    });
  };
  return {
    registerInput,
  };
};

export default Calc;
