// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    //linked in front of the old head
    //this.head = new Node(data, this.head);
    this.insertAt(data, 0);
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  getFirst() {
    return this.getAt(0);
    //return this.head;
  }

  getLast() {
    return this.getAt(this.size() - 1);
    /* //empty
    if (!this.head) {
      return null;
    }
    let node=this.head;
    while(node){
       if(!node.next)
      {return node}
    }node=node.next */
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }

  removeLast() {
    //if there's no node:
    if (!this.head) {
      return;
    }
    //if there's only one node:
    if (!this.head.next) {
      this.head = null;
      return;
    }
    //there are more node:
    let previous = this.head;
    let node = this.head.next;
    if (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  insertLast(data) {
    //use the getLast method created before
    const last = this.getLast();
    if (last) {
      //there are existing nodes in the chain
      last.next = new Node(data);
    } else {
      //the chain is empty
      this.head = new Node(data);
    }
  }

  getAt(index) {
    let count = 0;
    let node = this.head;
    while (node) {
      if (index === count) {
        return node;
      }
      count++;
      node = node.next;
    }
    //if there's no node or out of range
    return null;
  }

  removeAt(index) {
    //if there's an empty list
    if (!this.head) {
      return;
    }
    //if there's only one node
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    //reuse getAt method
    const previous = this.getAt(index - 1);

    //if index is out of the range of nodes
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }

  insertAt(data, index) {
    //if there's an empty list
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    //if there's only one node and new node to be the head
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    //reuse getAt method
    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }
  forEach(fn) {
    let node = this.head;
    let count = 0;
    while (node) {
      fn(node, count);
      node = node.next;
      count++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
