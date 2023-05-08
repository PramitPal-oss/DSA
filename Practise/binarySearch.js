'use strict';

/* What is benefit of Binary Searcrh:  
1)Binary search is a much faster form of search.
2)Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time
3)Binary search only works on sorted arrays!
*/

/*
PSEUDOCODE:   
This function accepts a sorted array and a value
Create a left pointer at the start of the array, and a right pointer at the end of the array
While the left pointer comes before the right pointer:
Create a pointer in the middle
If you find the value you want, return the index
If the value is too small, move the left pointer up
If the value is too large, move the right pointer down
If you never find the value, return -1
*/

function binarysearch(arr, n) {
  let left = 0;
  let right = arr.length - 1;
  if (arr[right] === n) return right;
  if (arr[left] === n) return left;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    //  console.log(`${left}, ${middle}, ${right} and array el is ${arr[middle]}`);

    if (arr[middle] < n) left = middle + 1;
    else if (arr[middle] > n) right = middle - 1;
    else return middle;
  }

  return -1;
}

console.log(
  binarysearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    98
  )
);

/* 
BIG O
wrost case  & Avg case: O(log n)
Best Case : O(1)
*/

//Naive String Search :

/*
Count the no of times a smaller strings appear to a longer strings:

PSEUDOCODE: 
Loop over the longer string
Loop over the shorter string
If the characters don't match, break out of the inner loop
If the characters do match, keep going
If you complete the inner loop and find a match, increment the count of matches
Return the count
*/

function stringCount(bStr, sStr) {
  let count = 0;
  for (let i = 0; i < bStr.length; i++) {
    for (let j = 0; j < sStr.length; j++) {
      let large = bStr[i];
      let small = sStr[j];
      let add = bStr[i + j];
      if (sStr[j] !== bStr[i + j]) break;
      if (j === sStr.length - 1) count++;
    }
  }
  return count;
}

console.log(stringCount('wowomgzomg', 'omg'));
