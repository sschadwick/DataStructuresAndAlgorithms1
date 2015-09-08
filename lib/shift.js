'use strict';

module.exports = function(array) {
  var first = array[0]; //pull first item for return
  var newArray = [];

  for (var i = 1; i < array.length; i++) {
    array[i - 1] = array[i];
  };
  delete (array[array.length - 1]);
  array.length = array.length - 1;
  return first;
};
