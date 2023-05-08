// Recursive Version
function countDown(num) {
  if (num <= 0) {
    console.log("All done!");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}
countDown(3);

// Iterative Version
function countDown(num) {
  for (var i = num; i > 0; i--) {
    console.log(i);
  }
  console.log("All done!");
}

//? SUm of Nth No using Recursion :

function sumRange(num) {
  if (num === 1) return 1; // Base case starts here
  return num + sumRange(num - 1); // Recursive Call
}

console.log(sumRange(3));

/*  
How It Works :
return 3 + sumRange(2)= return (3+3)
         return 2 + sumRange(1) = 1  (return 2+1)
                  return 1

*/

//?Factorial

//Using Loop
function factorial(num) {
  let total = 1;
  for (let i = 1; i <= num; i++) {
    total *= i;
  }
  return total;
}

console.log(factorial(5));

//Using Recursion :

function factorialre(num) {
  if (num === 1) return 1;
  return num * factorialre(num - 1);
}

console.log(factorialre(5));

// Pure Recursion Method :

function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

collectOddValues([1, 2, 3, 4, 5]);

/*  
How It works : 
[1].concat(collectOddValues([2,3,4,5])) = [1].concat([3,5]) = [1,3,5]
   [].concat(collectOddValues([3,4,5])) = [].concat([3,5]) = [3,5]
       [3].concat(collectOddValues([4,5])) = [3].concat([5]) = [3,5]
           [].concat(collectOddValues([5])) = [].concat([5])= [5]
               [5].concat(collectOddValues([])) =  [5].concat[]= [5]
                     []
*/

// Helper Function Method :

function collectOddValues2(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}

console.log(collectOddValues2([1, 2, 3, 4, 5, 6, 7, 8, 9]));
