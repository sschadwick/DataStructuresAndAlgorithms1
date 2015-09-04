//These are the solutions for the Data Structures and Algorithms 1 assignment

/* TODO:

shift

NEED TO SEE WHICH FUNCTIONS ARE DESTRUCTIVE IE HOW TO TEST

unshift

Create mocha tests for push, pop, shift and unshift

frequency2
*/

var testArray1 = [0, 1, 2, 3, 4, 3, 2, 8];
var testArray2 = [0, 1, 2, 3, 4, 3, 2, 8];
var wordArray = ['words', 'test', 'test', 'test', 'potato', 'tomato', 'another', 'letter']; //should return t


//re-implement Push, pop, shift and unshift for array.prototype
//without using library functions. Add mocha tests to verify

function push(array, item) {
  array[array.length] = item;
  return array.length;
};

function pop(array) {
  var ultimate = array[array.length - 1]; //save last value for return
  array.splice(array.length - 1, 1)
  return ultimate;
};

//needs work
function shift(array) {
  var first = array[0]; //pull first item for return
  var newArray = [];

  for (var i = 1; i < array.length; i++) {
    console.log(array[i])


  };
  return first;
};

// console.log(testArray1);
// console.log(shift(testArray1));
// console.log(testArray1)


//needs work
function unshift(array, item) {
  for (var i = array.length - 1; i > 0; i--) {
    array[i + 1] = array[i];
  }
  array[0] = item;
}

// console.log(testArray1);
// console.log(unshift(testArray1, 8))
// console.log(testArray1);


//Unique
//removes duplicates from array
// O(n^2) time
function unique(arr) {
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

//Unique but now with O(n) time
function uniqueImproved(array) {
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
}

//frequency2:
//find most frequent letter

//not done
function frequency2 (arr) {
  var letters = {}; //will hold count of leters
  var max = ['_']; //start with a nonletter symbol

  var string = arr.join('').toLowerCase(); //combine all letters from words

  for (var i = 0; i < string.length; i++) {
    letters[string.charAt(i)]++;
  }
  for (var key in letters) {
    if (letters[key] = letters[max]) {
      max.push(key);
      console('test')
    };
    if (letters[key] > letters[max]) {
      max = key; //not firing
    }
  }
  return max;
}


// frequency2(wordArray);
console.log(frequency2(wordArray));










