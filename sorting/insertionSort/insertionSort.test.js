const test = require('tape');
const insertionSort = require('./insertionSort')

test('insertionSort returns correctly', (t) => {
  let actual = insertionSort([1, 4, 2, 0, 3])
  let expected = [0, 1, 2, 3, 4]
  if (actual instanceof Array) {
    t.pass('array returned')
  }
  t.deepEqual(actual, expected, 'insertionSort([1, 4, 2, 0, 3]) returned [0, 1, 2, 3, 4]')

  actual = insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92])
  expected = [1, 1, 2, 2, 4, 8, 32, 43, 43, 55, 63, 92, 123, 123, 234, 345, 5643]
  t.deepEqual(actual, expected, 'insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]) returned [1, 1, 2, 2, 4, 8, 32, 43, 43, 55, 63, 92, 123, 123, 234, 345, 5643]')

  actual = insertionSort([1, 4, 2, -8, 345, 3, 43, 32, 5643, 63, 0, -2.5, 2, 55, 1, 0])
  expected = [-8, -2.5, 0, 0, 1, 1, 2, 2, 3, 4, 32, 43, 55, 63, 345, 5643]
  t.deepEqual(actual, expected, 'insertionSort([1, 4, 2, -8, 345, -1, 43, 32, 5643, 63, 0, 43, 2, 55, 1, 0, 92]) returned [ -8, -2.5, 0, 0, 1, 1, 2, 2, 3, 4, 32, 43, 55, 63, 345, 5643 ]')

  t.end();
});
