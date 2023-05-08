'use strict';

/*--------------------Problem Statement 1---------------------------------*/

/*  
Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist

sumZero([-3,-2,-1,0,1,2,3]) // [-3,3] 
sumZero([-2,0,1,3]) // undefined
sumZero([1,2,3]) // undefined

*/

//Solution : 1 : Naive Solution
function sumZero1(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

console.log(sumZero1([-4, -3, -2, -1, 0, 1, 2, 5]));

//Solution:2 : More faster
function sumZero2(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

//console.log(sumZero2([-4, -3, -2, -1, 0, 5, 3, 10]));

/*--------------------Problem Statement 2---------------------------------*/

/*   
Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4

*/

//Solution:1
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

//Solution:2
function countUniqueValues2(arr) {
  const uniqueVals = { count: 0 };

  for (let val of arr) {
    if (!(val in uniqueVals)) {
      uniqueVals[val] = 1;
      uniqueVals.count++;
    }
  }

  return uniqueVals;
}

//Solution:3
function countUniqueValues3(arr) {
  let arrObj = {};
  for (let val of arr) {
    arrObj[val] = ++arrObj[val] || 1;
  }
  return Object.keys(arrObj).length;
}

//Solution: 4
function countUniqueValues4(arr) {
  return new Set(arr).size;
}

console.log(countUniqueValues4([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
