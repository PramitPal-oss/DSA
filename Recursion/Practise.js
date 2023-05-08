/*  
?Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.
*/

function power(a, b) {
  if (b === 0) return 1;
  return a * power(a, b - 1);
}

console.log(power(2, 3));

/* 
How it Works:
2 * power(2,2)     = 4*2 = 8 
  2* power(2,1)    = 2*2 = 4
     2*power(2,0)  = 2*1 = 2
       1           = 1
*/

/*  
?Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.
*/

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(4));

/*  
?Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
*/

function productOfArray(arr) {
  if (arr.length === 1) return arr[0];
  return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1, 2, 3, 10]));

/*  
?Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function. 
*/

function recursiveRange(n) {
  if (n === 0) return 0;
  return n + recursiveRange(n - 1);
}

console.log(recursiveRange(8));

/*
function sumRange(num) {
  if (num === 1) return 1; // Base case starts here
  return num + sumRange(num - 1); // Recursive Call
}

console.log(sumRange(3));

/*  
return 3 + sumRange(2)= return (3+3)
         return 2 + sumRange(1) = 1  (return 2+1)
                  return 1

*/

/*  
?Write a recursive function called reverse which accepts a string and returns a new string in reverse.
*/

function reversen(str) {
  if (str.length === 1) return str[0];
  return str[str.length - 1] + reversen(str.slice(0, -1));
}

console.log(reversen("rithmschool"));

/*  
?Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.
*/

function isPalindrome(strn) {
  let result = [];

  function reverse(str) {
    if (str.length === 1) return result.push(str[0]);
    return result.push(str[str.length - 1]) + reverse(str.slice(0, -1));
  }

  reverse(strn);
  let reversestr = result.join("");
  if (reversestr === strn) return true;
  return false;
}

console.log(isPalindrome("tacocat"));

function isPalindrome2(str) {
  if (str.length === 1 || str.length === 0) {
    return true;
  }

  return (
    str[0] === str.slice(-1) && isPalindrome2(str.substring(1, str.length - 1))
  );
}

console.log(isPalindrome2("tacocat"));

/*  
?Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false
*/

const isOdd = (val) => val % 2 !== 0;

function someRecursive(ar, callback) {
  const arr = ar;
  if (!arr.length) return false;
  if (callback(arr.pop())) return true;
  return someRecursive(arr, callback);
}
console.log(someRecursive([2, 3, 5, 6], isOdd));

/*  
?Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.
*/

const recursiveFlattenHelper = (arr) => {
  let result = [];
  const helper = (d1) => {
    if (d1.length === 0) return; // base case
    Array.isArray(d1[0]) // check if arr[0] is array
      ? helper(d1[0]) // if so send arr[0] back
      : result.push(d1[0]); // if not array, add to result
    helper(d1.slice(1)); // call again and decrement array by 1, till no more elements left in either outer or inner loop
  };
  helper(arr);
  return result;
};

const recursiveFlatten = (arr) => {
  if (arr.length === 0) return []; // base case

  let result = [];

  Array.isArray(arr[0]) // check if element is sub-array
    ? (result = recursiveFlatten(arr[0])) // if so, send back
    : result.push(arr[0]); // if not, add to array

  return result.concat(recursiveFlatten(arr.slice(1)));
};

const arr = [1, 2, [3, 4], 5, [10, 15, [61, 25]]];
console.log(recursiveFlattenHelper(arr));

/*   
?Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.
*/

function capitalFirst(arr) {
  let uppercaseArray = [];
  for (let val of arr) {
    const uppercase = val[0].toUpperCase().concat(val.slice(1));
    uppercaseArray.push(uppercase);
    console.log(uppercase);
  }
  return uppercaseArray;
}

console.log(capitalFirst(["Car", "Taco", "banana"]));

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

console.log(typeof obj1, Object.values(obj1));
