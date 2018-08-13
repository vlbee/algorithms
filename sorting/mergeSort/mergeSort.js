const merge = require('./merge')

function mergeSort(array) {
  if (array.length <= 1) {
    return array
  }

  let midPoint = Math.ceil(array.length / 2)
  let arrLeft = array.slice(0, midPoint)
  let arrRight = array.slice(midPoint)
  let sortedLeft = mergeSort(arrLeft)
  let sortedRight = mergeSort(arrRight)

  return merge(sortedLeft, sortedRight)
}

module.exports = mergeSort