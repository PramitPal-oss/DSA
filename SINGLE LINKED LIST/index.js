'use srict';

//Single Linked list :

/*
A data structure that contains a head, tail and length property.Linked Lists consist of nodes, and each node has a value and a pointer to another node or null.

10==> 15 ==> 20 ==> 25

*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.size = 1;
  }

  //Insert last item in the list o(1)
  push(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.size++;
    return this;
  }

  //Insert first item in the list o(1)
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
    return this;
  }

  //Insert any item in the List o(n)
  insert(index, value) {
    if (index <= this.size) return undefined;

    if (index > this.size || index === undefined) {
      return this.push(value);
    }
    const newNode = new Node(value);
    let leaderNode = this.traverse(index - 1);
    let refNode = leaderNode.next;
    leaderNode.next = newNode;
    newNode.next = refNode;
    this.size++;
    return this;
  }

  //Loopin through the list o(n)
  traverse(index) {
    let counter = 1;
    let lead = this.head;
    while (counter !== index) {
      lead = lead.next;
      counter++;
    }
    return lead;
  }

  //Delete any Item in the List o(n)
  delete(index) {
    if (index > this.size || index <= 0 || index === undefined) {
      return undefined;
    }
    const leader = this.traverse(index - 1);
    const pointer = leader.next.next;
    leader.next = pointer;
    this.size--;
    return this;
  }

  //Remove last item in the List o(n)
  pop() {
    if (this.size === 0) {
      return undefined;
    }
    let leader = this.traverse(this.size - 1);
    leader.next = null;
    this.tail = leader;
    this.size--;
    return this;
  }

  //Remove first item in the list o(1)
  shift() {
    let refNode = this.head.next;
    this.head = refNode;
    this.size--;
    return this;
  }

  //Get any item from the list o(n)
  get(index) {
    if (index > this.size || index <= 0 || index === undefined) {
      return undefined;
    }
    if (index === this.size) return this.tail;
    if (index === 1) return this.head;
    let leader = this.traverse(index - 1);
    return leader.next;
  }

  //Update any item in the list o(n)
  set(index, value) {
    if (index > this.size || index <= 0 || index === undefined) {
      return undefined;
    }
    let leader = this.traverse(index - 1);
    leader.next.value = value;
  }

  //Reverse the Linked List o(n)
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    //console.log(this.tail, this.head);
    let next;
    let prev = null;
    for (let i = 0; i < this.size; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

const myLinkedList = new SingleLinkedList(15);
myLinkedList.push(20);
myLinkedList.prepend(10);
myLinkedList.prepend(5);
myLinkedList.push(30);
myLinkedList.insert(5, 25);
myLinkedList.push(35);
myLinkedList.insert(25, 40);
myLinkedList.insert(40, 45);
myLinkedList.delete(200);
myLinkedList.pop();
myLinkedList.push(50);
//myLinkedList.shift();
//myLinkedList.shift();
myLinkedList.get(5);
myLinkedList.set(5, 100);
myLinkedList.reverse();

console.log(myLinkedList);

let demolist = {
  head: {
    value: 5,
    next: {
      value: 10,
      next: {
        value: 15,
        next: {
          value: 20,
          next: {
            value: 25,
            next: {
              value: 30,
              next: {
                value: 35,
                next: {
                  value: 40,
                  next: null,
                },
              },
            },
          },
        },
      },
    },
  },
};
