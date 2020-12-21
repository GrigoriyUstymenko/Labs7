'use strict';

// Create and return a new array without duplicate elements
// Don't modify initial array

const unique = array => {
  const resArr = [];
  for (const item of array) {
    if (resArr.indexOf(item) === -1) resArr.push(item);
  }
  return resArr;
};


module.exports = { unique };
