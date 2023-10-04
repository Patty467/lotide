//takes in an array that contains elments, including nested arrays of elements, and returns a flattened version of the array.
const flatten = function(input) {
  let output = [];
  for (let x of input) {
    if (Array.isArray(x)) {
      for (let y of x)
        output.push(y);
    } else {
      output.push(x);
    }
  }
  console.log(output);
};

module.exports = flatten;