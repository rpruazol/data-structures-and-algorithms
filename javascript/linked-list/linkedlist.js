'use strict';



class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
  traverse() {
    let current = this.head;
    while (current) {
      current = current.next;
    }
    // should we return something?

  }
  insert(value) {
    // add new node with the value to the head of the list with an O(1) time performance
    let newNode = new Node(value);
    if (this.head) {
      let temp = this.head;
      this.head = newNode;
      newNode.next = temp;
    } else {
      this.head = newNode;
    }
  }
  includes(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) { return true; }
      current = current.next;
    }
    return false;
  }
  toString() {
    let current = this.head;
    let str = '';
    while (current) {
      str += `{${current.value}}->`;
      current = current.next;
    }
    str += 'NULL';
    return str;
  }
  append(value) {
    let current = this.head;
    while(current.next){
      current = current.next;
    }
    current.next = new Node(value);
  }
  insertBefore(value,targetValue) {
    let current = this.head;
    if(current.value === targetValue){
      let newNode = new Node(value);
      newNode.next = current;
      this.head = newNode;
      return;
    }
    while(current){
      if(current.next.value === targetValue){
        // make new node,
        let newNode = new Node(value);
        // have the current node point to the new node
        newNode.next = current.next;
        current.next = newNode;
        return;
      } else {
        current = current.next;
      }
    }
  }
  insertAfter(value, targetValue){
    let current = this.head;
    if(current.value === targetValue){
      // {so}->{this}->{is}->{definitely}->{a linked list}->{last node}->NULL'
      let newNode = new Node(value);
      // {I'm sure}->
      newNode.next = current.next;
      current.next = newNode;
      return;
    } else {
      while(current){
        if(current.value === targetValue){
          let newNode = new Node(value);
          // {NOT}
          newNode.next = current.next;
          current.next = newNode;
          return;
        } else {
          current = current.next;
        }
      }
    }
  }
}


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


module.exports = { LinkedList, Node };
