const selection = require('./selectionSort/selectionSort')
const insertion = require('./insertionSort/insertionSort')
const merge = require('./mergeSort/mergeSort')

const sortAlgorithms = {
  insertionSort: insertion,
  selectionSort: selection,
  mergeSort: merge
}

module.exports = sortAlgorithms