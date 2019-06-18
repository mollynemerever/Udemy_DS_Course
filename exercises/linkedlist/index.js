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
    //insert, do not overwrite existing head
    let insert = new Node(data, this.head);
    this.head = insert;
  }

  size() {
    let size = 0;
    let node = this.head;

    while (node) {
      size++;
      node = node.next;
    }
    return size;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    return current;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    this.head = this.head.next;
  }

  removeLast() {
    let current = this.head;
    if (current === null) {
      //empty list
      return null;
    }
    if (current.next === null) {
      //one element in list
      this.head = null;
      return this.head;
    }
    while (current.next.next !== null) {
      current = current.next;
    }
    current.next = null;
    return current.next;
  }

  insertLast(data) {
    const last = this.getLast();

    if (last) {
      // There are some existing nodes in our chain
      last.next = new Node(data);
    } else {
      // The chain is empty!
      this.head = new Node(data);
    }
  }
  //
  // insertLast(data) {
  //   if (!this.head) {
  //     return null;
  //   }
  //
  //   let current = this.head;
  //   while (current.next) {
  //     current = current.next;
  //   }
  //   current.next = new Node(data);
  //   return current.next;
  // }

  // insertLast(data) {
  //   if (!this.head) {
  //     return null;
  //   }
  //   let current = this.head;
  //
  //   while (current.next) {
  //     current = current.next;
  //     //moves through the linkedlist
  //   }
  //   current.next = new Node(data);
  // }

  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }
    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return null;
    }
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    let previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return; //not able to get node at provided index
    }
    previous.next = previous.next.next;
  }

  insertAt(data, integer) {
    if (integer === 0 && !this.head) {
      //if empty list
      this.head = new Node(data);
      return;
    }
    if (integer === 0) {
      //if replacing existing head
      let insert = new Node(data);
      insert.next = this.head;
      this.head = insert;
      return;
    }
    let insert = new Node(data);

    let previous = this.getAt(integer - 1);
    if (!previous) {
      let last = this.getLast();
      last.next = insert;
      insert.next = null;
      return;
    }
    if (!previous.next) {
      //add to end of list
      previous.next = insert;
      return;
    }
    if (previous.next) {
      //add to middle of list
      insert.next = previous.next;
      previous.next = insert;
      return;
    }
  }

  forEach(callback) {
    let current = this.head;
    while (current) {
      callback(current);
      current = current.next;
    }
  }
}

module.exports = { Node, LinkedList };
