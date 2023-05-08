### What is bubble Sort??

A sorting algorithm where the largest values bubble up to the top!

[5,3,4,1,2] : Comparison between 5 and 3 as we know 3 is shorter that 5 so...
[3,5,4,1,2] : 3 comes 1st. and Now comparison b/w 5 and 4. so 5 > 4 so..
[3,4,5,1,2] : 4 comes. then 5 and 1. 5 > 1 so...
[3,4,1,5,2] : 1 comes . then 5 and 2 5 > 2 so...
[3,4,1,2,5] : 5 comes.

> [3,4,1,2,5] in this suituition we can see that 5 is alrady sorted. as per defination the heighest value bublle up.

[3,4,1,2,5] : 3 < 4 so...
[3,4,1,2,5] : It stays same . Now 4 > 1 so... It will swap
[3,1,4,2,5] : 4 > 2 It will swap so...
[3,1,2,4,5]

> [3,1,2,4,5] 4 and 5 already sorted.

[3,1,2,4,5] : 3 > 1 so it will swap...
[1,3,2,4,5] : 3 > 2 so it will swap...
[1,2,3,4,5]

> [1,2,3,4,5] 3,4,5 already sorted.

**How Swap Works in Js**

```js
// ES5
function swap(arr, idx1, idx2) {
  //store the value of inx1 temporarely in a variable
  let temp = arr[idx1];
  //Swap the value of indx1 to indx2. But at this point we don't have indx1 value. That's why we stored that in a variable.
  arr[idx1] = arr[idx2];
  //Asign the variable to the indx2.
  arr[idx2] = temp;
}

// ES2015
const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};
```
