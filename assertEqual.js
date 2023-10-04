// tests to see if the assertions are correct or not
const assertEqual = function(actual, expected) {
  let output = "";
  if (actual === expected) output = `Assertion Passed: [${actual}] === [${expected}]`;
  if (actual !== expected) output = `Assertion Failed: [${actual}] !== [${expected}]`;
  console.log(output);
};

module.exports = assertEqual;