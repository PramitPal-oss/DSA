'use strict';
/*   
Pseudocode : 
1.Store the first element as the smallest value you've seen so far.
2.Compare this item to the next item in the array until you find a smaller number.
3.If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
If the "minimum" is not the value (index) you initially began with, swap the two values.
4.Repeat this with the next element until the array is sorted.
*/

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    console.log(`Loop started at iteration ${i}`);
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      console.log(arr[i], arr[lowest], arr);
      var temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
      console.log(arr);
    }
    console.log(`Loop ended at iteration ${i}`);
  }
  console.log(arr);
}

selectionSort([5, 3, 4, 1, 2]);
