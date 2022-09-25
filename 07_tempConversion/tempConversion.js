const ftoc = function(temp) {
  let number =  (temp - 32)*.5556;

  let result = Math.round(number * 10) / 10;

  return result


};

const ctof = function(temp) {
  let number = temp*(9/5) + 32;

  let result = Math.round(number * 10) / 10;



  return result


};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

/// npm test tempConversion.spec.js
