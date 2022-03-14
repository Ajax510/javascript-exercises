const sumAll = function (int1, int2) {
  // create a loop to set a start and end for nums to count
  // within the loop, add the numbers and mke them equal the new sum
  // return the sum of all the nums in between including int2

  // declaring all variables to be used
  let sum = 0;
  let smallNum = int1;
  let largeNum = int2;

  // this will check to make sure all variables are greater than 0
  if (smallNum < 0 || largeNum < 0) {
    // if they are, return an error
    return "ERROR";
    // else if, any of the vaiables are not a number
  } else if (!Number.isInteger(smallNum) || !Number.isInteger(largeNum)) {
    // if not a number, return error
    return "ERROR";
  }

  // this will make sure the smaller number is set as the starting point
  if (int1 > int2) {
    smallNum = int2;
    largeNum = int1;
  }

  // looping between the smallNum and the largeNum
  for (let i = smallNum; i <= largeNum; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
