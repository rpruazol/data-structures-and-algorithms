'use strict';

class LinkedList {
  constructor(value){
    this.head = new Node(value);
  }

  append(value) {
    // traverse to end of linked list, then add a new node
    let current = this.head;
    while(current.next){
      current = current.next;
    }
    current.next = new Node(value);
    return current.next;
  }
}

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

module.exports = LinkedList;
