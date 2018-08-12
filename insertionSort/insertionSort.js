function insertionSort(array) {

  for (let i = 1; i < array.length; i++) {
    const val = array[i]

    for (let j = i - 1; j >= 0; j--) {
      if (val < array[j]) {
        array.splice(j, 2, array[j + 1], array[j])
      }
    }

  }
  return array

}


module.exports = insertionSort
