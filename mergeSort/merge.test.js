const test = require('tape');
const merge = require('./merge')


test('Merge returns an array', (t) => {
  const actual = merge([2], [1])
  const expected = [1, 2]
  if (actual instanceof Array) {
    t.pass('array returned')
  }
  t.deepEqual(actual, expected, '[1,2] returned')
  t.end();
});

test('Merge returns sorted array', (t) => {
  let actual = merge([1])
  let expected = [1]
  t.deepEqual(actual, expected, 'merge([1]) returns [1]')

  actual = merge([])
  expected = []
  t.deepEqual(actual, expected, 'merge([]) returns []')

  actual = merge([], [])
  expected = []
  t.deepEqual(actual, expected, 'merge([], []) returns []')

  actual = merge([1, 2, 3])
  expected = [1, 2, 3]
  t.deepEqual(actual, expected, 'merge([1, 2, 3]) returns [1, 2, 3]')

  actual = merge([2], [1])
  expected = [1, 2]
  t.deepEqual(actual, expected, 'merge([2], [1]) returns [1, 2]')

  actual = merge([1], [2])
  expected = [1, 2]
  t.deepEqual(actual, expected, 'merge([1], [2]) returns [1, 2]')

  actual = merge([1, 2], [3, 4])
  expected = [1, 2, 3, 4]
  t.deepEqual(actual, expected, 'merge([1, 2], [3, 4]) returns [1, 2, 3, 4]')

  actual = merge([1, 2, 3], [4, 5])
  expected = [1, 2, 3, 4, 5]
  t.deepEqual(actual, expected, 'merge([1, 2, 3], [4, 5]) returns [1, 2, 3, 4, 5]')

  actual = merge([1, 2], [3, 4, 5])
  expected = [1, 2, 3, 4, 5]
  t.deepEqual(actual, expected, 'merge([1, 2], [3, 4, 5]) returns [1, 2, 3, 4, 5]')

  actual = merge([1, 2], [1, 2])
  expected = [1, 1, 2, 2]
  t.deepEqual(actual, expected, 'merge([1, 2], [1, 2]) returns [1, 1, 2, 2]')


  t.end();
});

