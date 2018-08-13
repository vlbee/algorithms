function merge(left, right) {
  let sortedMerge = []
  let i = 0
  let j = 0

  if (left && right) {
    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        sortedMerge.push(left[i])
        i++
      } else {
        sortedMerge.push(right[j])
        j++
      }
      if (left[i] === undefined) { // cannot use !left[i] because 0 is falsey
        let remainingRight = right.slice(j)
        sortedMerge = sortedMerge.concat(remainingRight)
      }
      if (right[j] === undefined) {
        let remainingLeft = left.slice(i)
        sortedMerge = sortedMerge.concat(remainingLeft)
      }
    }

  } else {
    sortedMerge = sortedMerge.concat(left)
  }

  return sortedMerge
}

module.exports = merge
