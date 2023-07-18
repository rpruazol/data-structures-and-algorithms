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
  includes(value){
    let current = this.head
    while(current){
      if(current.value === value){return true}
      current = current.next
    }
    return false
  }
  toString(){
    let current = this.head;
    let str = ''
    while(current){
      str += `{${current.value}}->`
      current = current.next;
    }
    str += 'NULL'
    return str;
  }
}


class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}


module.exports = {LinkedList, Node};