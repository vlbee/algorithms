function insertionSort(array) {
  // console.log('start', array)
  // loops through the array 
  for (let i = 1; i < array.length; i++) {
    // sets the second item in the array as a constant value to be compared to within second loop
    const val = array[i]
    // console.log('i:', { val })
    // console.log('array', array)
    // for each const value, loops through array a second time, checking through all items the the LEFT of the current value's position.
    for (let j = i - 1; j >= 0; j--) {
      // if an item to the LEFT of the current value is greater than the current value...
      // console.log('j val:', array[j])
      if (val < array[j]) {
        // ... then it gets swapped with the current value postion to be the RIGHT side of the current value.
        array.splice(j, 2, array[j + 1], array[j])
        // console.log('splice', array)
        // as the j loop decreases to the start of the array, the current value always in the index position one greater than j, and gets swapped down all the way to index 0 if needed. 
      }
      // do nothing if item to the LEFT of the current value is smaller than the current value...
    }

  }
  return array

}


module.exports = insertionSort
