// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(child) {
    let node = new Node(child);
    this.children.push(node);
  }

  remove(child) {
    let index = this.children.indexOf(child);
    this.children.splice(index, 1);
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn) {
    let array = [];
    array.push(this.root);
    //populate array from start

    while (array.length > 0) {
      let node = array.shift();
      if (node.children) {
        node.children.forEach(child => {
          array.push(child);
        });
      }
      fn(node);
    }
  }

  traverseDF(fn) {
    let array = [];
    array.push(this.root);

    while (array.length > 0) {
      let node = array.shift();
      array.unshift(...node.children);
      fn(node);
    }
  }
}

module.exports = { Tree, Node };
