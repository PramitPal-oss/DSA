'use strict';

//10->5-->16->78->25

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

  append(value) {
    /*
    const newNode = {
      value: value,
      next: null,
    };
    */
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.size++;
    return this;
  }

  prepend(value) {
    /* 
    const newNode = {
      value,
      next: null,
    };
    */
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
    return this;
  }

  insert(index, value) {
    if (index >= this.size) {
      return this.append(value);
    }
    const newNode = new Node(value);
    console.log(newNode);
    const leader = this.traversingNode(index - 1);
    //console.log(leader);
    const holdingPointer = leader.next;
    //console.log(holdingPointer);
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.size++;
    return this;
  }

  traversingNode(index) {
    let currentNode = this.head;
    let counter = 1;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index) {
    const leader = this.traversingNode(index - 1);
    const unwantedNote = leader.next;
    leader.next = unwantedNote.next;
    this.length--;
    return this;
  }
}

const linkedlist1 = new SingleLinkedList(25);
linkedlist1.append(45);
linkedlist1.append(65);
linkedlist1.prepend(15);
linkedlist1.append(55);
linkedlist1.append(75);
linkedlist1.prepend(5);
linkedlist1.insert(4, 1500);
linkedlist1.remove(4);

console.log(linkedlist1);

/* 
5 ==> 15 ==> 25 ==> 1500 ==> 45 ==> 65
*/
