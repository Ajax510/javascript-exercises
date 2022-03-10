const reverseString = function (string) {
  let result = "";
  // find a way to split the string up
  // then, use the .reverse() function to reverse the array
  // then, use the .join() function to bring it all together
  // return the results
  result = string.split("").reverse().join(""); // this will go from left to right
  return result;
};

// Do not edit below this line
module.exports = reverseString;
