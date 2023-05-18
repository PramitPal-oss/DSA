//10->5-->16

//Demo of a LinkedList
let mylinkListDemo = {
  head: {
    value: 10,
    next: {
      value: 5,
      next: {
        value: 16,
        next: {
          value: 78,
          next: {
            value: 25,
            next: null,
          },
        },
      },
    },
  },
};

console.log(mylinkListDemo.head.next);

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    //assign head to the tail.
    this.tail = this.head;
    this.size = 1;
  }

  append(value) {
    let newNode = {
      value: value,
      next: null,
    };
    //Overwrite the tail.next with newnode.
    this.tail.next = newNode;
    this.tail = newNode;
    this.size++;
  }

  traversing() {
    let counter = 0;
    let curentNode = this.head;
    while (counter < this.size) {
      console.log(curentNode);
      curentNode = curentNode.next;
      counter++;
    }
  }

  deleteNode(index) {
    let counter = 1;
    let lead = this.head;
    if (index === 1) this.head = this.head.next;
    else {
      while (counter < index - 1) {
        lead = lead.next;
        counter++;
      }
      let nextNode = lead.next.next;
      this.size--;
      lead.next = nextNode;
    }
  }

  insert(index, value) {
    let count = 1;
    let currentNode = this.head;
    console.log(currentNode);
    while (count < index - 1) {
      count++;
      console.log(currentNode);
      currentNode = currentNode.next;
      console.log(currentNode);
    }
    const nextNode = currentNode.next;
    currentNode.next = {
      value,
      next: nextNode,
    };
    this.size++;
    return this;
  }
}

const newlist = new LinkedList(92);
newlist.append(45);
newlist.append(56);
newlist.append(152);
newlist.append(400);
newlist.append(700);
newlist.append(800);
newlist.append(900);
newlist.append(1000);
newlist.traversing();
newlist.deleteNode(6);

console.log(newlist);

let x = { name: 'Pram' };
//y has the memory of x. So that when we change the value of x it will reflect in y too.
let y = x;
y.name = 'dude';
console.log(y);
