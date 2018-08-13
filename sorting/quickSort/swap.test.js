const test = require('tape');
const swap = require('./swap')


test('swap returns an array of same length with swapped items', (t) => {
  let array = [1, 2, 3, 4, 5]
  let actual = swap(array, 0, 4)
  let expected = [5, 2, 3, 4, 1]
  if (actual instanceof Array) {
    t.pass('array returned')
  }
  if (actual.length === array.length) {
    t.pass('array of same length returned')
  }

  t.deepEquals(actual, expected, 'swap([1, 2, 3, 4, 5], 0, 4) returns [5, 2, 3, 4, 1]')

  actual = swap(array, 1, 3)
  expected = [1, 4, 3, 2, 5]
  t.deepEquals(actual, expected, 'swap([1, 2, 3, 4, 5], 1, 3) returns [1, 4, 3, 2, 5]')


  t.end();
});