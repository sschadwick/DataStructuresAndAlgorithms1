'use strict';

var expect = require('chai').expect;
var index = require('../index');

var testArray1 = [0, 1, 2, 3, 4, 3, 2, 8];
var testArray2 = [0, 1, 2, 3, 4, 3, 2, 8];
var wordArray = ['words', 'test', 'test', 'test', 'potato', 'tomato', 'another', 'letter']; //should return t


describe('push function', function() {
  it('should have the same result as Array.push()', function() {
    expect(index.push(testArray1, 9)).to.eql(testArray2.push(9));
  });
});

describe('pop function', function() {
  it('should have the same result as Array.pop()', function() {
    expect(index.pop(testArray1)).to.eql(testArray2.pop());
  });
});

describe('shift function', function() {
  it('should have the same result as Array.shift()', function() {
    expect(index.shift(testArray1)).to.eql(testArray2.shift());
  });
});

describe('unshift function', function() {
  it('should have the same result as Array.unshift()', function() {
    expect(index.unshift(testArray1, 8)).to.eql(testArray2.unshift(8));
  });
});

describe('unique', function() {

});

describe('uniqueImproved', function() {

});

describe('frequency2', function() {

})
