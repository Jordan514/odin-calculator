let calculator = {
  add: function (num1, num2) {
    return +num1 + +num2;
  },
  subtract: function (num1, num2) {
    return num1 - num2;
  },
  multiply: function (num1, num2) {
    return num1 * num2;
  },
  divide: function (num1, num2) {
    return num1 / num2;
  },
};

let num1 = "";
let operand = "";
let num2 = "";
let display = document.querySelector("#display");

function operate(string = "") {
  let index =
    (string.indexOf("+") + 1 ||
      string.indexOf("-") + 1 ||
      string.indexOf("*") + 1 ||
      string.indexOf("/") + 1) - 1;
  num1 = string.slice(0, index - 1);
  operand = string[index];
  num2 = string.slice(index + 2, string.length);
  let result = "";
  switch (operand) {
    case "+":
      result = calculator.add(num1, num2);
      break;

    case "-":
      result = calculator.subtract(num1, num2);
      break;

    case "*":
      result = calculator.multiply(num1, num2);
      break;

    case "/":
      result = calculator.divide(num1, num2);
      break;
  }
  return result;
}

function addButtonFunctions() {
  //numbers
  let buttonList = document.querySelectorAll("#numbers button");
  buttonList.forEach((button) =>
    button.addEventListener(
      "click",
      () => (display.textContent += button.textContent)
    )
  );
  //operand buttons
  let operandList = document.querySelectorAll("#operators button");
  operandList.forEach((button) =>
    button.addEventListener(
      "click",
      () => (display.textContent += ` ${button.textContent} `)
    )
  );
  //specail buttons
  let specialButtons = document.querySelectorAll("#special button");
  specialButtons[0].addEventListener("click", () => (display.textContent = ""));
  specialButtons[1].addEventListener(
    "click",
    () => (display.textContent = operate(display.textContent))
  );
}

addButtonFunctions();
