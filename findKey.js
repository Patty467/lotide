//Takes in an object and callback and returns the first key that meets the criteria specificed in the callback
const findKey = function(array, callback) {
  let values = Object.values(array);
  let keys = Object.keys(array)
  let index = values.findIndex(callback)
  const result = keys[index]
  return result;
}