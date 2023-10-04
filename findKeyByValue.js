//Takes in an object and a value and returns the first key that corresponds to that value
const findKeyByValue = function(object, value) {
  for (key in object) {
    if (value === object[key])
    return key;
  }
};