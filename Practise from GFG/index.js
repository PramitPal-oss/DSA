import {
  countOccurance,
  cyclicRotate,
  distinct,
  equalCheck,
  immedieatesmaller,
  largest,
  largestel,
  maximizeIndexSum,
  minMax,
  minmaxDistance,
  occurrences,
  print2Largestno,
  print2Largestno2,
  reverseArray,
  search,
  seriesSum,
  valueEqualtoIndex,
} from './Greeksforgeeks.js';

//?Add upto no n:

//?Solution 1
function addupTo(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  console.log(sum);
}

//addupTo(4);

//?Solution 2
function addupTo2(n) {
  return (n * (n + 1)) / 2;
}
//console.log(addupTo2(4));

function addSum(nums, target) {
  const array = nums.filter((el) => el < target);
  for (let i = 1; i < array.length; i++) {
    let j = 0;
    if (array[j] + array[i] === target) return [array[j], array[i]];
    else if (array[j++] + array[i] === target) return [array[j], array[i]];
  }
}

/*console.log(
  largest(
    [
      28, 43, 26, 65, 60, 54, 51, 35, 42, 48, 33, 40, 58, 38, 64, 47, 44, 49,
      46, 25, 57, 39, 55, 45, 29, 32, 61, 53, 31, 36, 56, 63, 30, 52, 27, 34,
      50, 41, 37, 66, 62, 59,
    ],
    6
  )
);

console.log(print2Largestno([4, 5, 8, 3, 2, 10], 7)); */

//console.log(print2Largestno2([2, 5, 9, 4, 1, 5, 8], 7));

/*console.log(
  reverseArray(
    [
      1, 2, 3, 4, 5, 6, 8, 2, 5, 9, 7, 1, 5, 7, 15, 7, 1, 5, 7, 4, 5, 4, 5, 8,
      4, 845, 45, 4, 51, 51, 21, 2, 12, 12, 12, 12, 12, 12, 1, 1,
    ],
    40,
    7
  )
);*/

//console.log(distinct([85, 25, 1, 32, 54, 6], 6, [85, 2], 2));

//console.log(equalCheck([1, 2, 5], [2, 4, 15], 3));

//console.log(search([1, 2, 3, 4], 4, 3));

//console.log(cyclicRotate([0, -1, 2, -3, 1], 5));

//console.log(minMax([3, 2, 1, 56, 10000, 167]));

//console.log(occurrences([1, 3, 5, 5, 5, 5, 67, 123, 125], 9, 5));

//console.log(largestel([1, 2, 0, 3, 2, 4, 5], 7));

//console.log(minmaxDistance([3, 5, 4, 2, 6, 3, 0, 0, 5, 4, 8, 3], 12, 3, 6));

/*console.log(
  maximizeIndexSum(
    [6, 6, 8, 19, 8, 10, 19, 14, 20, 18, 5, 11, 20, 6, 10, 7, 15, 8, 8, 9],
    20
  )
);*/

//console.log(valueEqualtoIndex([15, 2, 45, 12, 7], 5));

//console.log(immedieatesmaller([4, 2, 1, 5, 3], 5));

//console.log(seriesSum(5));

//console.log(countOccurance([1, 1, 2, 2, 2, 2, 3], 7, 10));
