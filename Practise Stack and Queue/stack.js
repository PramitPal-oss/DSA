class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {}

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      let refNode = this.top;
      this.top = newNode;
      newNode.next = refNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    }

    if (this.length > 1) {
      this.top = this.top.next;
      this.length--;
    } else {
      this.top = null;
      this.bottom = null;
      this.length--;
    }
    return this;
  }

  //isEmpty
}

const myStack = new Stack();
myStack.push('google');
myStack.push('udemy');
myStack.push('facebook');
myStack.push('insta');
myStack.pop();
//myStack.pop();
//myStack.pop();
//myStack.pop();
//myStack.pop();

console.log(myStack);

/*   
myStack.push('google');
myStack.push('udemy');
myStack.push('facebook');
myStack.push('instagram');
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
