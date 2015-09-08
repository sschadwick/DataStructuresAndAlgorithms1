'use strict';

//Unique but now with O(n) time
module.exports = function(array) {
  var seen = {}; //create empty dict
  var current; //current iteratee item
  var newArray = []; //create a new array with no duplicates

  for (var i = 0; i < array.length; i++) {
    current = array[i]; //this assignment keeps it simpler
    if (!seen[current]) { //because haven't seen before, need to add
      seen[current] = current; //now we've seen it
      newArray.push(seen[current]); //add current to newArray
    }
  }
  return newArray;
};
