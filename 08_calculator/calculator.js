const add = function(a,b) {
  return a+b;
	
};

const subtract = function(a,b) {
  return a-b;
	
};

const sum = function(arr) {
  return arr.reduce(
   (prev,cur) => prev+cur,0);
	
};

const multiply = function(arr) {
return arr.reduce(
  (prev,cur) => prev*cur);
};

const power = function(a,b) {
  return a**b;
	
};

const factorial = function(num) {
  var result = num;
  if (num === 0 || num === 1) 
    return 1; 
  while (num > 1) { 
    num--;
    result *= num;
  }
  return result;
	
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




///npm test calculator.spec.js

