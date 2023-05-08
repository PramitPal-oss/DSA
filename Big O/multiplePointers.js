//! A sorted array will be given as a input. And find which of the two pairs will be sum of Zero.

function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) return [arr[i], arr[j]];
    }
  }
}

//console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 4]));

function sumZeroRefractor(arr) {
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
//console.log(sumZeroRefractor([-4, -3, -2, -1, 0, 1, 2, 3, 5, 6]));

//!Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

/* 
* Method 1 :
const unique = (array) => {
  const object = {};
  let result = 0;
  for (let val of array) {
    object[val] > 0 ? object[val]++ : (object[val] = 1);
  }
  for (let key in object) {
    if (!(key in object)) {
      result;
    } else {
      result++;
    }
  }
  return result;
}; */

// * Method 2:

function countUniqueValues(arr) {
  // add whatever parameters you deem necessary - good luck!
  let a = arr.length;
  let b = arr[0];
  let c = 1;
  for (let i = 1; i < a; i++) {
    if (b !== arr[i]) {
      b = arr[i];
      c++;
    } else {
      continue;
    }
  }
  return c;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));

// * Method : 3

function coountingUniquenos(arr) {
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
console.log(coountingUniquenos([-2, -1, -1, 0, 1]));
