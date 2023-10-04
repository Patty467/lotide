const assertEqual = require("./assertEqual");

//Returns the tail of an array
const tail = function(input) {
  return input.splice(1);
};

module.exports = tail;