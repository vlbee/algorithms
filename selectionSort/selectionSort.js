function selectionSort(array) {
  let min
  let index
  let len = array.length // needed because modifying array inplace with splice
  let result = []

  for (let i = 0; i < len; i++) {
    min = array[0]
    for (let j = 0; j < len; j++) {
      if (array[j] <= min) {
        min = array[j]
        index = j
      }
    }
    array.splice(index, 1)
    result = result.concat(Array.of(min))
  }

  return result;
}

module.exports = selectionSort