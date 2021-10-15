const calculator = document.querySelector('div.calculatorBody');
const entry = document.querySelector('div.entry');
const output = document.querySelector('div.output');
const controls = document.querySelector('div.controls');
const operators = document.querySelector('div.operators');
const numbers = document.querySelector('div.numbers');

const buttons = document.querySelectorAll('.button');

const checker = [
  "Escape", "Delete", "Backspace", "Enter",
  "+", "-", "*", "/", ".",
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
];

let outputScreen = "";
let entryScreen = "";





// when keypress down matches button on calculator
document.addEventListener('keydown', e => {
  // console.log(e.key);
  if(checker.includes(e.key)){
    calcInput(e.key, e.target.className);
  }
  // entry.textContent = `${entryScreen}`;
});





// when clicking calculator button
document.addEventListener('click', e => {
  // console.log(e.target.id)
  if(checker.includes(e.target.id)){
    calcInput(e.target.id, e.target.className);
  }
  // entry.textContent = `${entryScreen}`;
});





// clear function - also not working yet
const clear = () => {
  let y = '';
  let entryScreen = y;
  entry.textContent = `${entryScreen}`
}

// backspace function - not working yet
const backSpace = () => {
  // console.log("backspace function", entryScreen.length);
  let z = entryScreen.length - 1;
  let y = entryScreen.substr(0, z);
  console.log(y);


}


// calculator things
const calcInput = (input, category) => {
  // console.log(in, category);
  if (input == "Enter"){
    console.log("Enter");
    operate(operation, x, y);

  } else if (input == "Backspace"){
    console.log("Backspace");
    backSpace();

  } else if (input == "Escape" || input == "Delete"){
    console.log("Clear");
    clear();

  } else if (input == "+"){
    console.log("+");
    operation = "add";

  } else if (input == "-"){
    console.log("-");
    operation = "subtract";

  } else if (input == "*"){
    console.log("*");
    operation = "product";

  } else if (input == "/"){
    console.log("/");
    operation = "divide";


  } else if (input == "."){
    console.log(".");
  } else {
    // console.log(input, "numbers pushed");
    entryScreen += input;
    entry.textContent = `${entryScreen}`



  }

}
  


// input display


