//These are the solutions for the Data Structures and Algorithms 1 assignment

var wordArray = ['words', 'test', 'test', 'test', 'potato', 'tomato', 'another', 'letter']; //should return t

//TODO:
//Unique bughunt
//frequency2 bughunt


//not done
exports.frequency2 = function(arr) {
  var letters = {}; //will hold count of leters
  var max = ['_']; //start with a nonletter symbol

  var string = arr.join('').toLowerCase(); //combine all letters from words

  for (var i = 0; i < string.length; i++) {
    letters[string[i]]++;
  }

  for (var key in letters) {
    if (letters[key] = letters[max]) {
      max.push(key);
    };
    if (letters[key] > letters[max]) {
      max = key;
    }
  }
  return max;
}





