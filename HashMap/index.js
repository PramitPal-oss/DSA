'use strict';

// Writing First Hash Function :

function hashSlow(key, arrayLen) {
  let total = 0;
  for (let char of key) {
    // map "a" to 1, "b" to 2, "c" to 3, etc.
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }
  return total;
}

//Improved Hash Function :

function hash(key, arrayLen) {
  let total = 0;
  let WEIRED_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRED_PRIME + value) % arrayLen;
  }
  return total;
}

// Hash Table Implementation:

class HashTable {
  constructor(size = 53) {
    this.Map = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRED_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRED_PRIME + value) % this.Map.length;
    }
    return total;
  }

  set(key, value) {
    //Store the index of Array
    let address = this._hash(key);
    //check the address is available on that array or not.
    if (!this.Map[address]) {
      //Creating a new array for each and every address
      this.Map[address] = [];
    }
    this.Map[address].push([key, value]);
    return this.Map;
  }

  get(key) {
    let address = this._hash(key);
    const currentBucket = this.Map[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) return currentBucket[i][1];
      }
    }
    return undefined;
  }

  keys() {
    const keysArray = [];
    for (let i = 0; i < this.Map.length; i++) {
      if (this.Map[i]) {
        for (let j = 0; j < this.Map[i].length; j++) {
          keysArray.push(this.Map[i][j][0]);
        }
      }
    }
    return keysArray;
  }
}

const myHash = new HashTable(3);
myHash.set('apple', 500);
myHash.set('kiwi', 300);
myHash.set('banana', 100);
myHash.set('oranges', 200);

console.log(myHash, myHash.get('apple'), myHash.keys());

//Time Complexity :

/*
search o(1)
insert o(1)
lookup o(1)
delete o(1)
*/

//Return the first recurring no of the function.

function recurring(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    if (!obj[el]) obj[el] = 1;
    else return el;
  }
  return undefined;
}

console.log(recurring([2, 5, 5, 2, 3, 5, 1, 2, 4]));
