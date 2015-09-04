'use strict';

module.exports = function(array, item) {
  array[array.length] = item;
  return array.length;
};
