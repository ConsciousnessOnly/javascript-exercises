const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (numbers) {
  let result = 0;
  for (let num of numbers) {
    result += num;
  }
  return result;
};

const multiply = function (numbers) {
  let result = 1;
  for (let num of numbers) {
    result *= num;
  }
  return result;
};

const power = function () {

};

const factorial = function () {

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
