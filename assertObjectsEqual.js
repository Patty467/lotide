//Takes in 2 objects and returns true if they are equal and false otherwise
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let output = "";
  if (actual === expected) output = `Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`;
  if (actual !== expected) output = `Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`;
  console.log(output);
};