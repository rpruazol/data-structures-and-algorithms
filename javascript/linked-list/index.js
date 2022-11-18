'use strict';

class LinkedList {
  constructor(head = null){
    this.head = head
  }
}


class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

module.exports = {LinkedList, Node};
