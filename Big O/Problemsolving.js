//? How to Appcroach  A Problem :

//! Write a function which takes two number and return their sum:

const sum = function (a, b) {
  return a + b;
};

//Todo:
//?1)can I restate the problem in my own words?
//*Implement Addition

//?2)What are the input that go into the Problem?
//*int? float? what about string for large no??

//?3)What are the output that should come from the solution to the problem?
//* int? float? string??

//?4) How shuold i level imp pieces of data that are part of Problem?
//* Use sudo code to break the problem diffrent parts

//!Write a function that takes in a string and returns count of each character in the string.

// Is Alphaneumeric Or not :
function isAlphaNumeric(char) {
  let code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // * Numeric(0-9)
    !(code > 64 && code < 91) && //* upper Alpha (A-Z)
    !(code > 96 && code < 123) //* lowe Alpha (a-z)
  )
    return false;
  return true;
}

function charCount(str) {
  //1)make object to return at end
  const charObj = {};
  //2) loop over the string, for each character...
  for (let char of str) {
    //a)If the char is a no/letters in object, add one to it
    let charlower = char.toLowerCase();
    if (isAlphaNumeric(char)) {
      //b)if the char is no/letters in the object . add it and set value 1
      //c)If the char is somthing else(space, period, etc) don't do anything
      charObj[charlower] = ++charObj[charlower] || 1;
    }
  }
  //3)return Object at end
  return charObj;
}

console.log(charCount("Mandira Saha"));
