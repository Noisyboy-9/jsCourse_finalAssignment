'use strict';
let assert = require('chai').assert;
let expect = require('chai').expect;
/*
1 - get the two numbers
2 - determine wich one is bigger assign it to the smaller number variable
3 - then make a accumalator variable wich is  equal to 0
4 - make a for that starts with the smallest number and then ends with the biggest number
*/
/**
 * return sum of numbers between two input numbers including themself
 *
 * @param {number} number1
 * @param {number2} number2
 *
 * @returns {number}
 */
function getSum (number1, number2) {
  let startingNumber = (number1 < number2) ? number1 : number2;
  let endingNumber = (number1 < number2) ? number2 : number1;

  let accumalator = 0;

  for (startingNumber; startingNumber <= endingNumber; startingNumber++) {
    accumalator += startingNumber;
  }

  return accumalator;
}

describe('get sum', function () {
  it('two input are positive in order', function () {
    assert.deepEqual(getSum(10, 12), 33);
  });

  it('two positive input not in order', function () {
    assert.deepEqual(getSum(12, 10), 33);
  });

  it('two input number with 1 negative number', function () {
    assert.deepEqual(getSum(-1, 10), 54);
  });

  it('one negative and one positive number not in order', function () {
    assert.deepEqual(getSum(10, -1), 54);
  });

  it('two input with 2 negative number not in order', function () {
    assert.deepEqual(getSum(-1, -10), -55);
  });

  // test with in the file
  it('get two negative number in order', function () {
    assert.deepEqual(getSum(-10, -1), -55);
  });
});
// ----------------------------------------------------------------------------------------------------
/*
1 - get the input layer
2 - generate a array of odd numbers till we will reach the sum of the input layer to 0
3 - then slice the array with the sum of the last number before the layer to zero
4 - calculate the sum of remaining array items
 */
/**
 * generate odd numbers
 *
 * @param {number} numberOfItems
 *
 * @returns {Array}
 */
function generateOddNumbers (numberOfItems) {
  let oddNumbers = [];

  for (let i = 0; i < numberOfItems; i++) {
    let oddNumber = (2 * i) + 1;
    oddNumbers.push(oddNumber);
  }

  return oddNumbers;
}

/**
 * calculate the sum of pascal traingle in input layer
 *
 * @param {*} layer
 * @returns {number}
 */
function rowSumOddNumbers (layer) {
  // generating a array of odd elements number of it's elements is equal to sum of the range to zero
  let oddNumbers = [];
  let numberOfOddNumbers = 0;

  for (let i = layer; i >= 1; i--) {
    numberOfOddNumbers += i;
  }

  oddNumbers = generateOddNumbers(numberOfOddNumbers);

  for (let i = 1; i < layer; i++) {
    oddNumbers.splice(0, i);
  }

  return oddNumbers.reduce(
    (accumaltor, currentNumber) => accumaltor += currentNumber
  );
}

describe('row sum odd numbers', function () {
  it('layer number 1 ', function () {
    assert.deepEqual(rowSumOddNumbers(1), 1);
  });

  it('layer number 2', function () {
    assert.deepEqual(rowSumOddNumbers(2), 8);
  });

  it('layer number 3', function () {
    assert.deepEqual(rowSumOddNumbers(3), 27);
  });

  it('layer number 4', function () {
    assert.deepEqual(rowSumOddNumbers(4), 64);
  });

  it('layer number 5', function () {
    assert.deepEqual(rowSumOddNumbers(5), 125);
  });
});
