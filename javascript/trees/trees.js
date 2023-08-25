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
  preOrder() {
    // preorder prints the value first
    const arr = [];
    const _traverse = (node) => {

      arr.push(node.value);

      if (node.left) {
        _traverse(node.left);
      }
      if (node.right) {
        _traverse(node.right);
      }
    };
    _traverse(this.root);

    return arr;
  }
  inOrder(){
    const arr = [];
    const _traverse = (node) => {

      if(node.left){
        _traverse(node.left);
      }
      arr.push(node.value);
      if(node.right){
        _traverse(node.right);
      }
    };
    _traverse(this.root);
    return arr;
  }
  postOrder(){
    const arr = [];
    const _traverse = (node) => {

      if(node.left){
        _traverse(node.left);
      }
      if(node.right){
        _traverse(node.right);
      }
      arr.push(node.value);
    };
    _traverse(this.root);
    return arr;
  }
  maxValue(){
    let currentMax = this.root.value;
    
    let _helper = (node) => {
      if(node.value > currentMax){currentMax = node.value}

      if(node.left){_helper(node.left)}
      if(node.right){_helper(node.right)}
    }
    _helper(this.root);

    return currentMax;
  }

}

module.exports = { Tree, Node };
