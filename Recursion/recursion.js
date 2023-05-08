'use strict';

function countDown(num) {
  for (let i = num; i > 0; i--) {
    console.log(i);
  }
}

//countDown(5);

//Recursive Solution:
function countDown2(num) {
  //Base Case:
  if (num <= 0) {
    console.log('Done');
    return;
  }

  console.log(num);
  num--;
  countDown2(num);
}

//countDown2(5);

//sum of n nos:

function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

//console.log(sumRange(4));

//factorial:
//Non Recursive Solution:
function factorial(num) {
  let total = 1;
  for (let i = num; i > 0; i--) {
    total *= i;
  }
  return total;
}

//console.log(factorial(4));

//Recursive solution:
function recursiveFactorial(n) {
  if (n === 1) return 1;
  return n * recursiveFactorial(n - 1);
}

//console.log(recursiveFactorial(5));

//Helper Method Recursion : collecting All the odd value:

//Solution: 1
function collectOdds(arr) {
  let results = [];
  function helper(helperInput) {
    if (helperInput.length === 0) return;
    if (helperInput[0] % 2 !== 0) results.push(helperInput[0]);
    helper(helperInput.slice(1));
  }
  helper(arr);
  return results;
}

//console.log(collectOdds([55, 11, 77, 95, 2, 4, 6, 80, 5]));

//solution:2 (pure Recursive way)
function collectOddValue(arr) {
  let result = [];
  if (arr.length === 0) return result;
  if (arr[0] % 2 !== 0) result.push(arr[0]);
  result = result.concat(collectOddValue(arr.slice(1)));
  return result;
}

//console.log(collectOddValue([55, 11, 77, 95, 2, 4, 6, 80, 5]));

/*  
Tips for pure recursive function:

1. For arrays, use methods like slice, the spread operator, and concat that make copies of arrays so you do not mutate them.

2.Remember that strings are immutable so you will need to use methods like slice, substr, or substring to make copies of strings.

3.To make copies of objects use Object.assign, or the spread operator.
*/
