# What is Single Linked Lists?

A data structure that contains a head, tail and length property.
Linked Lists consist of nodes, and each node has a value and a pointer to another node or null.

**Comparisons with Arrays**

**Lists**

1. Do not have indexes!
2. Connected via nodes with a next pointer
3. Random access is not allowed

**Arrays**

1. Indexed in order!
2. Insertion and deletion can be expensive
3. Can quickly be accessed at a specific index

##### Insert

This is how a linkedlist looklike.

```js
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
```

Task is to insert 1500 in between 5 and 16. Or You can say in the place of 16. and point the new Node to the 16.

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

 insert(index, value) {
    const newNode = new Node(value); // This come from Node class
    const leader = this.traversingNode(index - 1);
    const holdingPointer = leader.next;
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

  linkedlist1.insert(3, 1500);
```

1. When we are creating newNode the state of our programme looklike :

```js
const newNode = {
  value: value,
  next: null,
};
```

2. **Traversing the Node and finidng leader** : So if we want to put 1500 in the place of 16 first we have to grab the pointer of the previous no. In this case that will be 5. So it must be look like this

```js
 const linklist = head: {
    value: 10,
    next: {
      value: 5,
      next: {
      }}}

```
