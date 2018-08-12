const Benchmark = require('benchmark');
const { selectionSort, insertionSort, mergeSort } = require('../sortAlgorithms')
const generateLongList = require('./generateLongList')

const suite = new Benchmark.Suite;
const listLength = +process.argv[2]
// Example CLI command: npm run bench 100

function runBenchSuite(num) {
  console.log('list length:', num)

  suite.add('Selection Sort Test', function () {
    selectionSort(generateLongList(num));
  })
    .add('Insertion Sort Test', function () {
      insertionSort(generateLongList(num));
    })
    .add('Merge Sort Test', function () {
      mergeSort(generateLongList(num));
    })
    // add listeners
    .on('cycle', function (event) {
      console.log(String(event.target));
    })
    .on('complete', function () {
      console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run({ 'async': false });
}

runBenchSuite(listLength)