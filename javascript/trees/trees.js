'use strict';


class Node {
  constructor(value) {
    this.value = value;
    this.left;
    this.right;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) { this.root = newNode; return newNode; }
    else {
      const _insert = (node) => {
        console.log(node)
        // node here is our ref node or our root
        if (newNode.value < node.value) {
          if (!node.left) { node.left = newNode; return; }
          return _insert(node.left);
        } else {
          if (newNode.value > node.value) {
            if (!node.right) { node.right = newNode; return; }
            return _insert(node.right);
          }
        }
      };
      _insert(this.root);
    }
  }
}

module.exports = { Tree, Node }
