'use strict';

module.exports = function(array) {
  var ultimate = array[array.length - 1]; //save last value for return
  array.splice(array.length - 1, 1)
  return ultimate;
};
