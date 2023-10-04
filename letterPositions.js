//Takes in a string and returns all indices of letter positions in the string
const letterPositions = function(word) {
  const result = {};
  for (let i = 0; i < word.length; i++) {
    if (!result[word[i]]) {
      result[word[i]] = [];
    }
    result[word[i]].push(i);
  }
  return result;
};