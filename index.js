let calculator = {
  add: function (num1, num2) {
    return num1 + num2;
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

console.log(calculator.add(3, 5));
console.log(calculator.subtract(3, 5));
console.log(calculator.multiply(3, 5));
console.log(calculator.divide(3, 5));
