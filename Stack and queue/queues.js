//Queues :

/*  
lookup o(n)
enqueue o(1) (put 1st item in the case )
dequeue o(1) (remove 1st item from the list)
peek o(1)

Priciple : FIFO : FIrst In First Out

Array is inefficient in case of queues. So don't make queeue using arrays. Because we know removing 1st item from the array we need to reindexing all the elements in the array, same thing applicable for add 1st item in the array. And as we know time complexity will be o(n), But as per queues the time complexity must be o(1) in both cases which is not possible to acheive with using array.
*/

// Implementin Queue : LinkedList

/*
myqueue.enqueue(5); 1st 
myqueue.enqueue(10); 2nd 
myqueue.enqueue(15); 3rd
*/

let myDemoQueue = {
  first: {
    value: 5,
    next: {
      value: 10,
      next: {
        value: 15,
        next: null,
      },
    },
  },
  last: {
    value: 15,
    next: null,
  },
};

/*  
myqueue.dequeue()
*/

let mydemoQueueDelete = {
  first: {
    value: 10,
    next: {
      value: 15,
      next: null,
    },
  },
};

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  //Get first Item
  peek() {
    return this.first;
  }

  //add to the queue
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = this.first;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  //remove from the queue
  dequeue() {
    if (!this.first) return null;
    if (this.length === 1) {
      this.last = null;
      this.first = null;
      this.length--;
    }
    if (this.length > 1) {
      this.first = this.first.next;
      this.length--;
    }
  }
  //isEmpty;
}

const myqueue = new Queue();
myqueue.enqueue('Joy');
myqueue.enqueue('Matt');
myqueue.enqueue('Pavel');
myqueue.enqueue('Samir');
myqueue.dequeue();
myqueue.dequeue();
myqueue.dequeue();
myqueue.dequeue();

console.log(myqueue);
