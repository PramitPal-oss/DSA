'use strict';

//1.Subarray with given sum:
function subArray(arr, n, s) {
  let i = 0;
  let j = 0;
  let sum = 0;
  let resarr = [];

  if (s <= 0) {
    resarr.push(-1);
    return resarr;
  }

  while (i < n && j <= n) {
    if (sum < s) {
      sum += arr[j];
      j++;
    } else if (sum > s) {
      sum -= arr[i];
      i++;
    } else if (sum === s) {
      resarr.push(i + 1);
      resarr.push(j);
      return resarr;
    }
  }
  resarr.push(-1);
  return resarr;
}

//console.log(subArray([1, 2, 3, 7, 5], 5, 12));

//2.Missing number in array

function missingNo(arr, n) {
  arr.sort((a, b) => a - b);

  let j = 1;

  for (let i = 0; i < n; i++) {
    if (arr[i] === j) j++;
    else return j;
  }
}

//console.log(missingNo([1, 2, 3, 5], 5));

//3.Equilibrium Point

function equilibrumPoint(a, n) {
  let left = 0;
  let right = n - 1;
  let middle = Math.floor((left + right) / 2);
  let leftsum = 0;
  let rightsum = 0;
  for (let i = 0; i < middle; i++) {
    leftsum += a[i];
  }
  for (let i = middle + 1; i < n; i++) {
    rightsum += a[i];
  }
  if (leftsum === rightsum) return middle + 1;
  else return -1;
}
/*
console.log(
  equilibrumPoint(
    [
      20, 17, 42, 25, 32, 32, 30, 32, 37, 9, 2, 33, 31, 17, 14, 40, 9, 12, 36,
      21, 8, 33, 6, 6, 10, 37, 12, 26, 21, 3,
    ],
    30
  )
); */

//4.Find duplicates in an array :

function duplicatesArray(a, n) {
  let objArray = {};

  for (let i = 0; i < n; i++) {
    let el = a[i];
    objArray[el] ? (objArray[el] += 1) : (objArray[el] = 1);
  }

  for (let key in objArray) {
    if (objArray[key] > 1) a.push(key);
  }

  a.splice(0, n);

  if (a.length === 0) a.push(-1);

  return a;
}

//console.log(duplicatesArray([2, 3, 1, 2, 3], 5));

//5.Count pairs with given sum:

function getPairsCount(arr, n, k) {
  let sum = 0;
  let count = 0;
  let left = 0;
  console.log(arr.sort((a, b) => a - b));

  for (let i = 1; i < n; i++) {
    if (arr[left] + arr[i] === k) count++;
  }
}

console.log(getPairsCount([1, 5, 7, 1], 4, 6));
