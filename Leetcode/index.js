'use strict';

//Two Sum :

//Naive Approach
function twoSum(arr, target) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        result.push(i);
        result.push(j);
      }
    }
  }
  return result;
}

//Optimize Solution
function twoSum2(num, target) {
  let obj = {};
  for (let i = 0; i < num.length; i++) {
    let el = num[i];
    let cmplement_Pair = target - el;
    if (obj[cmplement_Pair] !== undefined) {
      return [obj[cmplement_Pair], i];
    } else {
      obj[el] = i;
    }
  }
}

console.log(twoSum2([2, 7, 11, 15], 9));

//Palindrome:

//Naive approach
function palindrome(x) {
  let str = String(x);
  let plaindromeText = '';
  for (let i = str.length - 1; i >= 0; i--) {
    plaindromeText += str[i];
  }
  let result = plaindromeText === str ? true : false;
  return result;
}

//Optimize Solution
function isPalindrome(num) {
  if (num < 0) {
    // Negative numbers are not palindromes
    return false;
  }

  let reversedNum = 0;
  let originalNum = num;

  // Reverse the digits of the original number
  while (originalNum > 0) {
    reversedNum = reversedNum * 10 + (originalNum % 10);
    originalNum = Math.floor(originalNum / 10);
  }

  // Check if the reversed number is the same as the original number
  return num === reversedNum;
}

console.log(isPalindrome(121));

//Roman to integer
function romatoInt(s) {
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    let el = s[i];
    if (el === 'I') total += 1;
    if (el === 'V') total += 5;
    if (el === 'X') total += 10;
    if (el === 'L') total += 50;
    if (el === 'C') total += 100;
    if (el === 'D') total += 500;
    if (el === 'M') total += 1000;
  }
  return total;
}

console.log(romatoInt('MCMXCIV'));
