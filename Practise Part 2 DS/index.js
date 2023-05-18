'use strict';

//Singe Linked List:

/*  
1. This function should accept a value
2. Create a new node using the value passed to the function
3. If there is no head property on the list, set the head and tail to be 
   the newly created node
4. Otherwise set the next property on the tail to be the new node and set 
   the tail property on the list to be the newly created node
5. Increment the length by one
6. Return the linked list
*/

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
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.size++;
    return this;
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
    return this;
  }

  insert(index, value) {
    const newNode = {
      value: value,
      next: null,
    };
    let leader = this.traversing(index - 1);
    let refNode = leader.next;
    leader.next = newNode;
    newNode.next = refNode;
    this.size++;
    return this;
  }

  traversing(index) {
    let counter = 1;
    let leader = this.head;
    while (counter !== index) {
      leader = leader.next;
      counter++;
    }
    return leader;
  }

  delete(index) {
    let leader = this.traversing(index - 1);
    console.log(leader);
    let refNode = leader.next;
    leader.next = refNode.next;
    this.size--;
    return this;
  }
}

const mylinkList = new SingleLinkedList(10);
mylinkList.append(15);
mylinkList.append(25);
mylinkList.append(30);
mylinkList.prepend(5);
mylinkList.insert(4, 20);
mylinkList.insert(5, 60);
mylinkList.delete(5);

console.log(mylinkList);

let demoSingleLinkedList = {
  head: {
    value: 5,
    next: {
      value: 10,
      next: {
        value: 15,
        next: {
          value: 20,
          next: {
            value: 60,
            next: {
              value: 25,
              next: {
                value: 30,
                next: null,
              },
            },
          },
        },
      },
    },
  },
};
