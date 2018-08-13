// for quickSort function mutating array in place... 

function swap(array, index1, index2) {
  // if (!array || !index1 || !index2) {
  //   throw new Error("Inadequate arguments passed into swap function")
  // }

  let result = []
  let smaller = array[index2]
  let larger = array[index1]

  result = result.concat(array.slice(0, index1), smaller, array.slice(index1 + 1, index2), larger, array.slice(index2 + 1))

  // console.log('swap result:', result)
  return result;
}

module.exports = swap
