'use strict';

/*   
Problem Statement:

1) This function accepts an array and a value
2) Loop through the array and check if the current array element is equal to the value
3) If it is, return the index at which the element is found
4) If the value is never found, return -1

*/

function linerSearch(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) return i;
  }
  return -1;
}

console.log(linerSearch([5, 4, 8, 9, 10, 22, 33, 66, 44, 88], 22));

//Time Complexity 0(n) and Space Complexity 0(n)

/*   
There are many different search methods on arrays in JavaScript:

indexOf
includes
find
findIndex
*/
