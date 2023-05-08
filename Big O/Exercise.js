/* 
?Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
TODO :Your solution MUST have the following complexities: Time: O(N)
*sameFrequency(182,281) // true
*sameFrequency(34,14) // false
*sameFrequency(3589578, 5879385) // true
*sameFrequency(22,222) // false
*/
function samefrequency(no1, no2) {
  let objno1 = {};
  let objno2 = {};
  let no1str = String(no1);
  let no2str = String(no2);
  if (no1str.length !== no2str.length) return false;
  for (let val of no1str) {
    objno1[val] ? objno1[val]++ : (objno1[val] = 1);
  }
  for (let val of no2str) {
    objno2[val] ? objno2[val]++ : (objno2[val] = 1);
  }
  //console.log(objno1);
  //console.log(objno2);
  for (let val in objno1) {
    if (!(val in objno2)) return false;
    if (objno1[val] !== objno2[val]) return false;
  }
  return true;
}

/*    
?Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.
!RESTRICTION : 
*Time - O(n)
*Space - O(n)
!Bonus :
*Time - O(n log n)
*Space - O(1)

!Examples:
*1)areThereDuplicates(1, 2, 3) // false
*2)areThereDuplicates(1, 2, 2) // true 
*3)areThereDuplicates('a', 'b', 'c', 'a') // true
*/

//*METHOD : 1 (Multiple Pointer)

function areThreeDuplicates(...a) {
  const sorted = a.sort();
  const strArray = sorted.map((el) => String(el));
  let i = 0;
  for (let j = 1; j < strArray.length; j++) {
    if (strArray[i] !== strArray[j]) {
      i++;
      strArray[i] = strArray[j];
    }
  }
  if (i + 1 !== strArray.length) return true;
  return false;
}

//console.log(areThreeDuplicates(1, 2, 3));

//*Method : 2 (frequency counter)

function areThereDuplicates2() {
  let collection = {};
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
  }
  for (let key in collection) {
    if (collection[key] > 1) return true;
  }
  return false;
}

console.log(areThereDuplicates2(1, 2, 2, 4, 4));

//*Method : 3 (One liner)

function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}

/*  
?Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

TODO: Time: O(N), Space: O(1)

!Exapmles:
*1)averagePair([1,2,3],2.5) // true
*2)averagePair([1,3,3,5,6,7,10,12,19],8) // true
*3)averagePair([-1,0,3,4,5,6], 4.1) // false
*4)averagePair([],4) // false
*/

function averagePair(array, n) {
  if (array.length === 0) return false;
  let start = 0;
  let end = array.length - 1;
  while (start < end) {
    let avg = (array[start] + array[end]) / 2;
    if (avg === n) return true;
    if (avg > n) end--;
    else start++;
  }
  return false;
}

console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
