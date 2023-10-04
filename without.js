//Takes in a source array, and an itemsToRemove array, and returns only the itmes from the source array that are not in the itemsToRemove array
const without = function(source, itemsToRemove) {
  const result = source.filter(x => !itemsToRemove.includes(x));
  console.log(result);
};

module.exports = without;