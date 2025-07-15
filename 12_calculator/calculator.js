const add = function(...numbers) {
  return numbers.reduce((total, number) => total + number, 0);
};

const subtract = function(start, ...numbers) {
  return start - (numbers.reduce((total, number) => total + number, 0));
};

const sum = function(arr) {
	return arr.reduce((total, number) => total + number, 0); 
};

const multiply = function(arr) {
  return arr.reduce((total, number) => total * number, 1);
};

const power = function(start, exp) {
	return start ** exp;
};

const factorial = function(num) {
  let output = 1;
	for (let i = num; i > 0; i--) {
    output *= i;
  }
  return output;
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
