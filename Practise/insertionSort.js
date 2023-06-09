/*  
Insertion Sort PseudoCode:
1. Start by picking the second element in the array
2. Now compare the second element with the one before it and swap if necessary.
3. Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place.
4. Repeat until the array is sorted.
*/

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentEl = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentEl; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentEl;
  }
  return arr;
}

console.log(insertionSort([5, 3, 4, 1, 2]));
