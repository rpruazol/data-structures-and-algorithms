'use strict';


class Stack {
  constructor(top){
    this.top = top;
  }
  push(value){
    let temp = new Node(value);
    temp.next = this.top;
    this.top = temp;
  }
  pop(){
    const temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    return temp;
  }
  peek(){
    return this.top;
  }
  isEmpty(){
    return this.top === null;
  }
}

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}



module.exports = {Stack, Node};