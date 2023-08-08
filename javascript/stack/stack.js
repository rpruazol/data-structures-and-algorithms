'use strict';


class Stack {
  constructor(top=null){
    this.top = new Node(top);
  }
  push(value){
    let temp = new Node(value);
    temp.next = this.top;
    this.top = temp;
    return temp
  }
  pop(){
    // console.log(this)
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