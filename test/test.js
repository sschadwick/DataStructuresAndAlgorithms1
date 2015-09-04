'use strict';

var expect = require('chai').expect;
var index = require('../index');

var push = require('../lib/push');
var pop = require('../lib/pop');
var shift = require('../lib/shift');
var unshift = require('../lib/unshift');
var unique = require('../lib/unique');
var uniqueImproved = require('../lib/uniqueImproved');
var frequency2 = require('../lib/frequency2');

//to be removed shortly
var wordArray = ['words', 'test', 'test', 'test', 'potato', 'tomato', 'another', 'letter', 'ttttt'];
var uniqueArray = ['words', 'test', 'potato', 'tomato', 'another', 'letter'];

describe('push', function() {
  var testArray1 = [0, 1, 2, 3];
  var testArray2 = [0, 1, 2, 3];

  it('should return the same array length as Array.push()', function() {
    expect(push(testArray1, 9)).to.eql(testArray2.push(9));
    //returns length of the array with new item
  });

  it('should add a new item to the end of the array', function() {
    expect(testArray1[4]).to.eql(testArray2[4]);
  })
});

describe('pop', function() {
  var testArray1 = [0, 1, 2, 3];
  var testArray2 = [0, 1, 2, 3];

  it('should return the same removed value as Array.pop()', function() {
    expect(pop(testArray1)).to.eql(testArray2.pop());
  });

  it('should have the same output arrays', function() {
    expect(testArray1[4]).to.eql(testArray2[4]);
  })
});

describe('shift', function() {
  var testArray1 = [0, 1, 2, 3];
  var testArray2 = [0, 1, 2, 3];

  it('should return the same value as Array.shift()', function() {
    expect(shift(testArray1)).to.eql(testArray2.shift());
  });

  it('should remove [0] from the array and reindex', function() {
    expect(testArray1[0]).to.eql(1);
  });
});

describe('unshift', function() {
  var testArray1 = [0, 1, 2, 3];
  var testArray2 = [0, 1, 2, 3];

  it('should return the same new array length as Array.unshift()', function() {
    expect(unshift(testArray1, 8)).to.eql(testArray2.unshift(8));
  });

  it('should have added a new item to array at [0]', function() {
    expect(testArray1[0]).to.eql(8);
  });
});

describe('unique', function() {
  var wordArray = ['words', 'test', 'test', 'test', 'potato', 'tomato', 'another', 'letter'];
  var uniqueArray = ['words', 'test', 'potato', 'tomato', 'another', 'letter'];

  it('should remove all duplicate words', function() {
    expect(unique(wordArray)).to.eql(uniqueArray);
  });

});

describe('uniqueImproved', function() {
  var wordArray = ['words', 'test', 'test', 'test', 'potato', 'tomato', 'another', 'letter'];
  var uniqueArray = ['words', 'test', 'potato', 'tomato', 'another', 'letter'];

  it('should remove all duplicate words', function() {
    expect(uniqueImproved(wordArray)).to.eql(uniqueArray);
  });
  it('should have the same length as the unique array', function() {
    expect(uniqueImproved(wordArray).length).to.eql(uniqueArray.length);
  })
});

describe('frequency2', function() {
  var wordArray = ['words', 'test', 'potato', 'tomato', 'another', 'letter', 'ttttt'];

  it('should find the most frequent used letter', function() {
    expect(index.frequency2(wordArray)).to.eql('t');
  });
});

