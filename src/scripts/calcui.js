/** @format */

export const calcUI = (() => {
  const entryScreen = document.querySelector(".entry");

  const render = (calcInput) => {
    // console.log(calcInput);
    entryScreen.textContent = calcInput;
  };
  return {
    render,
  };
})();

export default calcUI;
