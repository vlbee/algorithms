const selection = require('./selectionSort/selectionSort')
const insertion = require('./insertionSort/insertionSort')
const bubble = require('./bubbleSort/bubbleSort')
const merge = require('./mergeSort/mergeSort')
const quick = require('./quickSort/quickSort')

const sortAlgorithms = {
  bubbleSort: bubble,
  insertionSort: insertion,
  selectionSort: selection,
  mergeSort: merge,
  quickSort: quick
}

module.exports = sortAlgorithms