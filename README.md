# algorithms

To run locally: 
`npm i -D tape tap-spec nodemon benchmark`

## Sorting Functions

* `bubbleSort`, `selesctionSort` and `insertionSort` all mutate the source array in place with splice.
* `mergeSort` and `quickSort` use recursion and avoid mutating the source array. 


* `swap` function is unused - originally intended for `quickSort`

**Run Tests:** 
`npm run test:sort`

**Run Benchmarking:** 
`npm run bench [length of array to test]`  e.g. `npm run bench 100` or `npm run bench 1000`


#### Benchmarking Results:
(uses [benchmark.js](https://github.com/bestiejs/benchmark.js))
```
NEW BENCHMARKING SUITE - list length: 10
Bubble Sort Test x 148,886 ops/sec ±10.22% (66 runs sampled)
Selection Sort Test x 91,538 ops/sec ±9.59% (66 runs sampled)
Insertion Sort Test x 218,584 ops/sec ±9.71% (70 runs sampled)
Merge Sort Test x 172,145 ops/sec ±1.40% (92 runs sampled)
Quick Sort Test x 341,598 ops/sec ±0.84% (91 runs sampled)
Fastest is Quick Sort Test
```

```
NEW BENCHMARKING SUITE - list length: 100
Bubble Sort Test x 1,991 ops/sec ±1.47% (86 runs sampled)
Selection Sort Test x 3,555 ops/sec ±18.26% (76 runs sampled)
Insertion Sort Test x 2,889 ops/sec ±1.20% (90 runs sampled)
Merge Sort Test x 13,394 ops/sec ±0.95% (91 runs sampled)
Quick Sort Test x 31,506 ops/sec ±1.14% (92 runs sampled)
Fastest is Quick Sort Test
```

```
NEW BENCHMARKING SUITE - list length: 1000
Bubble Sort Test x 17.89 ops/sec ±6.84% (33 runs sampled)
Selection Sort Test x 49.49 ops/sec ±3.10% (63 runs sampled)
Insertion Sort Test x 28.39 ops/sec ±2.45% (51 runs sampled)
Merge Sort Test x 1,186 ops/sec ±0.90% (90 runs sampled)
Quick Sort Test x 2,690 ops/sec ±1.02% (89 runs sampled)
Fastest is Quick Sort Test
```

```
NEW BENCHMARKING SUITE - list length: 10000
Bubble Sort Test x 0.18 ops/sec ±17.37% (5 runs sampled)
Selection Sort Test x 0.56 ops/sec ±9.41% (6 runs sampled)
Insertion Sort Test x 0.29 ops/sec ±1.57% (5 runs sampled)
Merge Sort Test x 107 ops/sec ±0.96% (76 runs sampled)
Quick Sort Test x 218 ops/sec ±0.74% (83 runs sampled)
Fastest is Quick Sort Test
```
