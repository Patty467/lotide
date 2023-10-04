const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

//Takes in an array and returns the middle most element of the array
const middle = function(input) {
  let mid = input.length / 2;
  if (input.length < 3) {
    return [];
  } if (input.length % 2 === 0) {
    return [input[mid - 1], input[mid]];
  } if (input.length % 2 === 1) {
    return [input[Math.floor(mid)]];
  }
};


x = middle([1,2,3])
console.log(x)

module.exports = middle