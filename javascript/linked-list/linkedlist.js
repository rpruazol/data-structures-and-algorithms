'use strict';



class LinkedList {
  constructor(head = null){
    this.head = head;
  }
  traverse(){
    let current = this.head
    while(current){
      current = current.next
    }
    // should we return something?
  }
  insert(value){
    // add new node with the value to the head of the list with an O(1) time performance
    let newNode = new Node(value)
    if(this.head){
      let temp = this.head
      this.head = newNode
      newNode.next = temp      
    } else {
      this.head = newNode;
    }
  }
}


class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}


module.exports = {LinkedList, Node};