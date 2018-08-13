// PIVOT = last item in the array 

function quickSort(array) {

  // PIVOT SELECTION
  const pivotValue = array[array.length - 1]

  // BREAKING CONDITIONS TO STOP RECURSION // 
  // array of one returns the pivot value
  if (array.length === 1) {
    return [pivotValue]
  }
  // empty array returns empty array (to be concatanated and avoid instances of undefined)
  if (array.length === 0) {
    return [];
  }

  // RECURSION 
  let result = []
  let arrLeft = []
  let arrRight = []

  // If greater than pivot -> arrRight
  // If less than or equqal to pivot - arrLeft
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > pivotValue) {
      arrRight.push(array[i])
    } else {
      arrLeft.push(array[i])
    }
  }

  // implement recursion until breaking conditions are met
  let sortedLeft = quickSort(arrLeft)
  let sortedRight = quickSort(arrRight)

  // return sorted array with pivot always in the sorted position
  result = result.concat(sortedLeft, [pivotValue], sortedRight)
  return result

}

module.exports = quickSort
