const test = require('tape');
const merge = require('./merge')


test('merge returns a sorted array', (t) => {
  let actual = merge([1])
  let expected = [1]
  if (actual instanceof Array) {
    t.pass('array returned')
  }
  t.deepEqual(actual, expected, 'merge([1]) returns [1]')

  actual = merge([])
  expected = []
  t.deepEqual(actual, expected, 'merge([]) returns []')

  actual = merge([], [])
  expected = []
  t.deepEqual(actual, expected, 'merge([], []) returns []')

  actual = merge([2], [1])
  expected = [1, 2]
  if (actual instanceof Array) {
    t.pass('array returned')
  }
  t.deepEqual(actual, expected, 'merge([1, 2, 3]) returns[1, 2, 3]')

  actual = merge([1, 2, 3])
  expected = [1, 2, 3]
  t.deepEqual(actual, expected, ' merge([2], [1]) returns [1, 2]')

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

  actual = merge([0], [-2])
  expected = [-2, 0]
  t.deepEqual(actual, expected, 'merge([0], [-2]) returns [-2, 0]')

  actual = merge([-2, 0], [-1, 1])
  expected = [-2, -1, 0, 1]
  t.deepEqual(actual, expected, 'merge([-2, 0], [-1, 1]) returns [-2, -1, 0, 1]')

  t.end();
});

