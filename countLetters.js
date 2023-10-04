//Takes in a sentence and returns a count of each of the letters in the sentence
const countLetters = function(source) {
  const results = {};
  for (const letter of source) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};