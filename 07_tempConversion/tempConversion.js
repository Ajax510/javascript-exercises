const ftoc = function (f) {
  // insert the formula to turn temp into F
  // formula: (temp - 32) * (5/9) = F
  // the * 10 after will give you a number that will be easier to round
  // the last / 10 will give you a point behind the decimal
  // finally, well return the rounded temp in F
  return Math.round((f - 32) * (5 / 9) * 10) / 10;
};

const ctof = function (c) {
  // insert the formula to turn temp into C
  // formula: ((temp * 9) / 5) + 32 = C
  // the * 10 after will give you a number that will be easier to round
  // the last / 10 will give you a point behind the decimal
  // finally, well return the rounded temp in C
  return Math.round(((c * 9) / 5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
