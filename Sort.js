const merge = require('./mergeSort/mergeSort')
const selection = require('./selectionSort/selectionSort')
const insertion = require('./insertionSort/insertionSort')

const Sort = {
  insertionSort: insertion,
  selectionSort: selection,
  mergeSort: merge
}

module.exports = Sort