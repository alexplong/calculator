// import {add} from './app';
// import {subtract} from './app';
// import {product} from './app';
// import {divide} from './app';
// import {operate} from './app';

// Math Functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const product = (a, b) => a * b;
const divide = (a, b) => a / b;

const operate = (operation, x, y) => {
  console.log(x, operation, y);

  switch (true){

    case operation == "add":
      outputScreen = add(x, y);
      
      output.textContent = `${outputScreen}`;
      break;
    case operation == "subtract":
      outputScreen = subtract(y, x);  

      output.textContent = `${outputScreen}`;
      break;
    case operation == "product":
      outputScreen = product(x, y);

      output.textContent = `${outputScreen}`;
      break;
    case operation == "divide":
      outputScreen = divide(y, x);

      output.textContent = `${outputScreen}`;
      break;
  }
}



const calculator = document.querySelector('div.calculatorBody');
const entry = document.querySelector('div.entry');
const output = document.querySelector('div.output');
const controls = document.querySelector('div.controls');
const operators = document.querySelector('div.operators');
const numbers = document.querySelector('div.numbers');
const buttons = document.querySelectorAll('.button');

const controlCheck = ["Escape", "Delete", "Backspace", "Enter"];
const operatorCheck = ["+", "-", "*", "/"];
const periodCheck = [".", "Period"];
const negsCheck = ["PosNeg"]
const operationCheck = ["add", "subtract", "product", "divide"]
const integerCheck = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let outputScreen = "";
let entryScreen = "";
let operation = "";

// event listener for change in input or entry
output.addEventListener("change", e => {
  output.textContent = `${outputScreen}`;
  if(outputScreen.length > 12){
    outputScreen.substr(0,12);
    output.textContent = `${outputScreen}`;
  }
})

entry.addEventListener("change", e => {
  console.log("fires");
  entry.textContent = `${entryScreen}`;
  if(entryScreen.length > 12){
    console.log(entryScreen);
    entryScreen.substr(0,12);
    entry.textContent = `${entryScreen}`;
  }
})


// if statements to limit size of entry and output





// when keypress down matches button on calculator
document.addEventListener('keydown', e => {
  // console.log(e.key);
  if(integerCheck.includes(e.key)){entryInput(e.key);
  } else  if(operatorCheck.includes(e.key)){operatorInput(e.key);
  } else if(controlCheck.includes(e.key)){controlInput(e.key);
  } else if(periodCheck.includes(e.key)){perAdd(entryScreen);
  }
});

// when clicking calculator button
document.addEventListener('click', e => {
  // console.log(e.target.id, "clicks");
  if(integerCheck.includes(e.target.id)){entryInput(e.target.id);
  } else if(operatorCheck.includes(e.target.id)){operatorInput(e.target.id);
  } else if(controlCheck.includes(e.target.id)){controlInput(e.target.id);
  } else if(negsCheck.includes(e.target.id)){addNeg(entryScreen);
  } else if(periodCheck.includes(e.target.id)){perAdd(entryScreen)}
});


// display Out will check length of input screens and adjust accordingly
const dispOut = (x) => {
  if (outputScreen.length > 15){
    outputScreen.substr(0, 20);
  }
};


// period adder function - spread? string into an array and filter for periods
const perAdd = (x) => {
  console.log("fire here")
  periodCount = [...x].filter( i => i == ".").length;
  if(periodCount < 1){
    entryScreen += ".";
    entry.textContent = `${entryScreen}`;
  }
}



// entry screen input
const entryInput = (x) => {
  entryScreen += x;
  entry.textContent = `${entryScreen}`;
  output.textContent = `${outputScreen}`;
}

// backspace function
const backOne = (x) => {
  if(x.length > 0) {
    newEntry = entryScreen.substr(0, x.length - 1);
    entryScreen = newEntry;
    entry.textContent = `${entryScreen}`;
  }
}

// negative function
const addNeg = (x) => {
  if(x > 0){
    entryScreen = -x; // make negative?
    entry.textContent = `${entryScreen}`;
  } else if (x < 0){
    entryScreen = -x; // make positive?
    entry.textContent = `${entryScreen}`;
  } 
}

// operation selector function
const operSelector = (x) => {
  switch (true){
    case x == "+":
      operation = "add";
      break;
    case x == "-":
      operation = "subtract";
      break;
    case x == "*":
      operation = "product";
      break;
    case x == "/":
      operation = "divide"
      break;
  }
}


// function for controls
const controlInput = (x) => {
  console.log(x, " control input function firing");
  switch (true){
    case x == "Enter":
      console.log("Entering");
      operate(operation, +entryScreen, +outputScreen);
      entryScreen = "";
      operation = "";
      entry.textContent = `${entryScreen}`;
      break;
    case x == "Backspace":
      console.log("Backspace fires");
      backOne(entryScreen);
      break;

    case x == "Escape":
      console.log("Escape");
      if(entryScreen !== ""){
        entryScreen = "";
        entry.textContent = `${entryScreen}`;
      }
      location.reload(true);
      break;
    case x == "Delete":
      console.log("Delete");
      if(entryScreen !== ""){
        entryScreen = "";
        entry.textContent = `${entryScreen}`;
      }
      break;
  }
};

// function to run when operation pressed
const operatorInput = (x) => {
  if(entryScreen !== "" && operation == "" && outputScreen == ""){  // run if entry is full while operation and output are empty: move a>b and +operation
    switch (true){
      case x == "+":
        outputScreen = entryScreen;
        entryScreen = "";
        operation = "add";
        break;
      case x == "-":
        outputScreen = entryScreen;
        entryScreen = "";
        operation = "subtract";
        break;
      case x == "*":
        outputScreen = entryScreen;
        entryScreen = "";
        operation = "product";
        break;
      case x == "/":
        outputScreen = entryScreen;
        entryScreen = "";
        operation = "divide";
        break;
    }
  } else if(entryScreen !== "" && operation !== "" && outputScreen !== ""){ // run all true: check for zeroes in mult & div
    switch (true){
      case x == "*":
        if(entryScreen == 0){
          console.log("enter something other than zero please");
        } else if(outputScreen == 0){
          console.log("you will get a 0 because it's multiplying by zero");
        }
        break;
      case x == "/":
        if(entryScreen == 0){
          console.log("cannot divide by zero")
        } else if(outputScreen == 0){
          console.log("whoa whoa")
        }
        break;
      default:
        console.log("default firing");
        operate(operation, +entryScreen, +outputScreen);
        entryScreen = "";
        operSelector(x);
    }
  } else if(entryScreen == "" && operation == "" && outputScreen == ""){
    console.log("all inputs false");
  } else {
    switch (true){
      case x == "+":
        operation = "add";
        break;
      case x == "-":
        operation = "subtract";
        break;
      case x == "*":
        operation = "product";
        break;
      case x == "/":
        operation = "divide";
        break;
    } 
  }
}

