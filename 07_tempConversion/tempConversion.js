const ftoc = function (temp) {
  // formula to turn temps into fahrenheit
  const fahrenheit = (temp - 32) * 0.5556;
  // Rounded the fahrenheit and assigned to new const
  const fahrenheitRounded = Math.round(fahrenheit * 10) / 10;
  // The .toFixed(1) will show a number of digits after the decimal
  // To fixed will return a string
  // The function pasrseFloat() will return a decimal number
  return parseFloat(fahrenheitRounded.toFixed(1));
};

const ctof = function (temp) {
  // equation to turn temperatures to celsius
  const celsius = temp * 1.8 + 32;
  // Rounded the celsius and assigned to new const
  const celsiusRounded = Math.round(celsius * 10) / 10;
  // returnred the new const after rounding it and converting into a decimal
  return parseFloat(celsiusRounded.toFixed(2));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
