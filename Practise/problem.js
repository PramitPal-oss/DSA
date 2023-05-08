'use strict';

// 1. Write a function that takes two nos and returns their sums :

function addition() {
  let sum = 0;
  const arr = [...arguments];
  if (arr.length === 0) return 'It is a empty input';
  const arrNumber = arr.filter((el) => typeof el === 'number');
  if (arrNumber.length === 0)
    return 'Sorry all Your Inputs are strings! please input number';
  for (let i = 0; i < arrNumber.length; i++) sum += arrNumber[i];
  return sum;
}

//console.log(addition('45', '55'));

/*----------------------Problem Statement 2---------------------------- */

// 2. Write a function that takes a string and returns counts if each character in the string :

//Refactor 1
function charCount(str) {
  //Make an empty obj to store the values
  let strObj = {};

  // loop over the string :
  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLocaleLowerCase();

    if (/[a-z0-9]/.test(char)) {
      // the char is a  number/letter AND is a keyin object, add one to count
      if (strObj[char] > 0) strObj[char]++;
      else strObj[char] = 1;
    }
  }

  //return object at end
  return strObj;
}

//Refactor 2
function charCount2(str) {
  let obj = {};

  for (let char of str) {
    char = char.toLocaleLowerCase();
    // Getting rid of special Character:
    if (/[a-z0-9]/.test(char)) {
      // the char is a  number/letter AND is a key in object, add one to count or  just set it to 1
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

//CharCode:
function isAlphaneumeric(char) {
  let code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && //(numeric (0-9))
    !(code > 64 && code < 91) && //(upper alpha (A-Z))
    !(code > 96 && code < 123) //(lower alpha (a-z))
  )
    return false;
  else return true;
}

//console.log(isAlphaneumeric());

//Refactor 3 : More Faster
function charCount2(str) {
  let obj = {};

  for (let char of str) {
    char = char.toLocaleLowerCase();
    // Getting rid of special Character:
    if (isAlphaneumeric(char)) {
      // the char is a  number/letter AND is a key in object, add one to count or  just set it to 1
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

//console.log(charCount2('Dude HWY HJJDP KJDFK' + 455 + 'anD' + 45556));

/*----------------------Problem Statement 3------------------------------ */

// Write a function called same which accpects two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

//same([1,2,3],[4,1,9]) //true
//same([1,2,3],[1,9]) //false
//same([1,2,1], [4,4,1]) //false

//1.Solution : 1
function same1(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    const currentIndex = arr2.indexOf(arr1[i] ** 2);
    if (currentIndex === -1) return false;
    arr2.splice(currentIndex, 1);
  }
  return true;
}

//Solution : 2
function same2(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

console.log(same2([1, 2, 3], [4, 1, 9]));

/*----------------------Problem Statement 4------------------------------ */

//ANAGRAMS
/*Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman. 

validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true

*/

//Solution: 1
function validAnagram1(str1, str2) {
  if (str1.length !== str2.length) return false;

  let strobj1 = {};
  let strobj2 = {};

  for (let str of str1) strobj1[str] ? (strobj1[str] += 1) : (strobj1[str] = 1);

  for (let str of str2) strobj2[str] = (strobj2[str] || 0) + 1;

  console.log(strobj1, strobj2);

  for (let key in strobj1) {
    if (!(key in strobj2)) return false;
    if (strobj1[key] !== strobj2[key]) return false;
  }
  return true;
}

//console.log(validAnagram1('texttwisttime', 'timetwisttext'));

//Solution : 2
function validAnagram2(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  console.log(lookup);

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
console.log(validAnagram2('anagrams', 'nagaramm'));
