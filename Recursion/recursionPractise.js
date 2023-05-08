/*  
Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.
*/

function power(num, expo) {
  if (expo === 0) return 1;
  return num * power(num, expo - 1);
}

//console.log(power(2, 2));

/*  
Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.
*/

function factorial(no) {
  if (no === 0) return 1;
  return no * factorial(no - 1);
}
//console.log(factorial(4));

/*  
Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
*/

function productOfArray(arr) {
  if (arr.length === 1) return arr[0];
  return arr[0] * productOfArray(arr.slice(1));
}

//console.log(productOfArray([1, 2, 3, 10]));

/*  
Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function.
*/

function recursiveRange(n) {
  if (n === 0) return 0;
  return n + recursiveRange(n - 1);
}

//console.log(recursiveRange(6));

/*  
Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.
*/

function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

//console.log(fib(4));

/*  
Write a recursive function called reverse which accepts a string and returns a new string in reverse.
reverse('awesome') // 'emosewa'
reverse('rithmschool') // 'loohcsmhtir'
*/

//Non recursive approach
function reverse(str) {
  let res = [];
  for (let i = str.length; i >= 0; i--) res.push(str[i]);
  return res.join('');
}

//Recursive Solution: 1
function reverserecur(str) {
  let newarr = [];
  if (str.length === 0) return;
  if (str.length > 0) newarr.push(str[str.length - 1]);
  newarr = newarr.concat(reverserecur(str.substring(str.length - 1, 0)));
  return newarr.join('');
}

//Recursive Solution:2
function reverse2(str) {
  if (str.length === 1) return str[0];
  return str[str.length - 1] + reverse2(str.substring(str.length - 1, 0));
}

/*   
Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.
 isPalindrome('awesome') // false
 isPalindrome('foobar') // false
 isPalindrome('tacocat') // true
 isPalindrome('amanaplanacanalpanama') // true
 isPalindrome('amanaplanacanalpandemonium') // false
*/

//Non recersive Solution.
function plaindrome(str) {
  let resarr = [];
  for (let i = str.length - 1; i >= 0; i--) resarr.push(str[i]);
  if (str === resarr.join('')) return true;
  else return false;
}

//Recersive Solution:
function isPalindrome(str) {
  function helper(str) {
    if (str.length === 1) return str[0];
    else return str[str.length - 1] + helper(str.substring(str.length - 1, 0));
  }
  if (str === helper(str)) return true;
  else return false;
}

//console.log(isPalindrome('aba'));

/*  
Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.
 SAMPLE INPUT / OUTPUT
 const isOdd = val => val % 2 !== 0;
someRecursive([1,2,3,4], isOdd) // true
someRecursive([4,6,8,9], isOdd) // true
someRecursive([4,6,8], isOdd) // false
someRecursive([4,6,8], val => val > 10); // false
*/

const isOdd = (val) => val % 2 !== 0;

function someRecursive(arr, cb) {
  if (!arr.length) return false;
  const [num, ...rest] = arr;
  return cb(num) || someRecursive(rest, cb);
}

//console.log(someRecursive([1, 2, 3, 4], isOdd));

/*   
Flatten Array:
Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.
flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
flatten([[1],[2],[3]]) // [1,2,3]
flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

*/

function flatten(arr) {}

console.log(flatten([1, 2, 3, [4, 5], [6, 7]]));
