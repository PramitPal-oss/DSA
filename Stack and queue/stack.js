// Stacks :

/*  
lookup o(n)
pop o(1)
push o(1)
peek o(1)

Principle : Last In First Out (LIFO)

Last Item in the list will out First. Think about plates that are stacked one above another. In that case if we want to place a plate we have to placed in avobe all the plates and if we want to get a plate we have to take the first plate.

Browser History and JS engine (call Stack) 
*/

//Implementing Stack : Using Linked Lists

/*
myStack.push('google'); 1st 
myStack.push('udemy'); 2nd 
myStack.push('facebook'); 3rd 
myStack.push('instagram'); 4th 
*/

let mySTackDemo = {
  top: {
    value: 'insta',
    next: {
      value: 'facebook',
      next: {
        value: 'udemy',
        next: {
          value: 'google',
          next: null,
        },
      },
    },
  },
  buttom: {
    value: 'google',
    next: null,
  },
};

/*  
myStack.pop()
*/
let myStackDemoDelete = {
  top: {
    value: 'facebook',
    next: {
      value: 'udemy',
      next: {
        value: 'google',
        next: null,
      },
    },
  },
};

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.buttom = null;
    this.length = 0;
  }

  //see the top element
  peek() {
    return this.top;
  }

  // add top of the stack
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.buttom = newNode;
    } else {
      const pointer = this.top; //Save the reference
      this.top = newNode; //Set the node to the top
      newNode.next = pointer; // Set the reference node
    }
    this.length++;
    return this;
  }

  //Remove top of the stack
  pop() {
    if (!this.top) return null;
    if (this.top === this.buttom) this.buttom = null;
    //const pointer = this.top;
    this.top = this.top.next;
    this.length--;
    return this;
  }
}

const myStack = new Stack();
myStack.push('google');
myStack.push('udemy');
myStack.push('facebook');
myStack.push('instagram');
//myStack.pop();
//myStack.pop();
//myStack.pop();
//myStack.pop();

console.log(myStack, myStack.peek());

//Impleting Stack : Using Array

class Stack2 {
  constructor() {
    this.array = [];
  }

  peek() {
    return this.array[this.array.length - 1];
  }

  push(value) {
    this.array.push(value);
    return this;
  }

  pop() {
    this.array.pop();
  }
}

const myStack2 = new Stack2();
myStack2.push(2);
myStack2.push(5);
myStack2.push(7);
myStack2.pop();

console.log(myStack2);
