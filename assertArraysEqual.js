const eqArrays = require("./eqArrays");

//Asserts if the two arrays are equal
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log('Assertion passed!');
  } else {
    console.log('Assertion failed');
  }
};

module.exports = assertArraysEqual;