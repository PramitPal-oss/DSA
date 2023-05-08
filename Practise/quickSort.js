'use strict';

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function pivot(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let swapIndx = start;
  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIndx++;
      swap(arr, swapIndx, i);
    }
    console.log(arr);
  }
  swap(arr, start, swapIndx);
  console.log(arr, swapIndx);
  return swapIndx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    console.log(left, right);
    let pivotIndx = pivot(arr, left, right);
    //left
    quickSort(arr, left, pivotIndx - 1);
    //right
    quickSort(arr, pivotIndx + 1, right);
  }
  console.log('break');
  return arr;
}

console.log(quickSort([4, 6, 9, 1, 2, 5]));
