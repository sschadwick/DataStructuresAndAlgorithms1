'use strict';

module.exports = function (arr) {
  var lettersCount = {_: 0}; //will hold count of leters
  var max = '_'; //start with a nonletter symbol

  var string = arr.join('').toLowerCase(); //combine all letters from words
  for (var i = 0; i < string.length; i++) {
    if (lettersCount.hasOwnProperty([string[i]])) {
      //if the key is already in our dict, add to that letters counter
      lettersCount[string[i]]++;
    } else {
      lettersCount[string[i]] = 1; //add new key to letters object, set counter to 1
    };
  };

  //iterate through and find the maximum
  for (var letter in lettersCount) {
    //if the count is more than the count of the max letter,
    //then add the letter to max
    if (lettersCount[letter] > lettersCount[max]) {
      max = letter;
    }
  };
  return max;
};
