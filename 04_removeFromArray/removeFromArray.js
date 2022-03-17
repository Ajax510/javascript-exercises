const removeFromArray = function (...args) {
  // very first item in the list of arguments is the array
  const array = args[0];
  // Create a new empty array
  const newArray = [];
  // forEach will loop throught the array
  array.forEach((item) => {
    // push every element into the new array
    // UNLESSS, it is included in the function arguments
    // so we create a new array with every item, except those that should be removed
    if (!args.includes(item)) {
      newArray.push(item);
    }
  });
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
