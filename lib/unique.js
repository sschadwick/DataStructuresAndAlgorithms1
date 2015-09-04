'use strict';

//Unique
//removes duplicates from array
// O(n^2) time
module.exports = function(arr) {
  for (var i = 0; i < arr.length; i++) {
    var current = arr[i];
    for (var j = i + 1; j < arr.length; j++) {
      if (current === arr[j]) {
        //remove any other instances of current but not original
        arr.splice(j, 1);
      };
    };
  };
  return arr;
};
