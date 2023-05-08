'use strict';
//BUBBLE SORT PSEUDOCODE:

/*  
1)Start looping from with a variable called i the end of the array towards the beginning
2)Start an inner loop with a variable called j from the beginning until i - 1
3)If arr[j] is greater than arr[j+1], swap those two values!
4)Return the sorted array
*/

//Solution Based On :ES 5:
function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    console.log(`Loop start at iteration : ${i}`);
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    console.log(`One Loop Completed of iteration: ${i}`);
  }
  return arr;
}

//console.log(bubbleSort([37, 45, 29, 8]));

//console.log(bubbleSort([37, 45, 29, 8, 1, 10, 15, 19]));

//Solution Based On : ES 2015:
function bubbleSort2(arr) {
  const swap = (arr, indx1, indx2) =>
    ([arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]]);

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      // console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

//Optimization:
function bubbleSort3(arr) {
  let noSwap;
  for (let i = arr.length; i > 0; i--) {
    console.log(`Loop start at iteration : ${i}`);
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwap = false;
      }
    }
    console.log(`One Loop Completed of iteration: ${i}`);
    if (noSwap) break;
  }
  return arr;
}

//console.log(bubbleSort2([37, 45, 29, 8, 12, 88, 45, 66, -1, -45, 82, 15]));

//console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));

console.log(bubbleSort3([37, 45, 29, 8, 1, 19, 11, 15]));
