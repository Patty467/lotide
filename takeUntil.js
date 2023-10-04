//Takes in an array and callback and returns a slice of the array based on the criteria specificed in the callback
const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (callback(item) === false) {
      results.push(item);
    } if (callback(item)) {
      break
    }
  }
  return results;
}