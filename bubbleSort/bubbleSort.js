function bubbleSort(array) {
  // loop through an array as many times as it is long
  for (let i = 0; i < array.length; i++) {
    // on each loop, loop through array from start to end, 
    for (let j = 0; j < array.length; j++) {
      //each time comparing adjacent items...
      if (array[j] > array[j + 1]) {
        // and swapping them if the left item is greater than the right item
        array.splice(j, 2, array[j + 1], array[j])
      }
    }
  }
  return array
}

module.exports = bubbleSort
