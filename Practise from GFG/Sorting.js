'use strict';

function sortArray(arr, N) {
  let low = 0;
  let mid = 0;
  let high = N - 1;

  while (mid <= high) {
    if (arr[mid] === 0) {
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  }

  return arr;
}

//console.log(sortArray([0, 1, 2, 0, 1, 2], 6));

//Anagram :

function anagram(a, b) {
  let anaObja = {};
  let anaObjb = {};

  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; i++) {
    let el = a[i];
    anaObja[el] ? (anaObja[el] += 1) : (anaObja[el] = 1);
  }

  for (let i = 0; i < b.length; i++) {
    let el = b[i];
    anaObjb[el] ? (anaObjb[el] += 1) : (anaObjb[el] = 1);
  }

  for (let keys in anaObja) {
    if (!keys in anaObjb) {
      return false;
    }
    if (!(anaObja[keys] === anaObjb[keys])) {
      return false;
    }
  }
  return true;
}

//console.log(anagram('geeksforgeeks', 'forgeeksgeeks'));

//Find triplets with zero sum

function triplate(arr, n) {
  arr.sort((a, b) => a - b);
  console.log(arr);
  let k = 2;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {}
  }
}

console.log(triplate([0, -1, 2, -3, 1], 5));

//Wave array Pattern

function waveArray(arr, n) {
  for (let i = 0; i < n - 1; i = i + 2) {
    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
  }
  return arr;
}

//console.log(waveArray([1, 2, 3, 4, 5], 5));

//Tripilates:

function countTriplets(arr, n) {
  let count = 0;
  arr.sort((a, b) => a - b); // sort the array in ascending order

  // iterate over all possible triplets (i, j, k)
  for (let i = 0; i < n - 2; i++) {
    let j = i + 1; // set the second element of the triplet
    let k = j + 1; // set the third element of the triplet

    while (k < n) {
      if (arr[i] + arr[j] === arr[k]) {
        count++;
        j++;
        k++;
      } else if (arr[i] + arr[j] < arr[k]) {
        j++;
      } else {
        k++;
      }
    }
  }
  return count;
}

//console.log(countTriplets([1, 2, 3, 4, 5], 5));

//Floor in a Sorted Array

function findfloor(arr, n, x) {
  let max = -Infinity;
  let index = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] <= x) {
      max = arr[i];
      index = i;
    }
  }

  if (max === -Infinity) return -1;

  return index;
}

console.log(
  findfloor(
    [
      66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83,
      84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101,
      102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116,
      117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130,
    ],
    65,
    106
  )
);
