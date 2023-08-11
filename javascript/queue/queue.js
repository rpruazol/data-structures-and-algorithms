'use strict';


class Queue {
  constructor(back=null, front=null){
    this.back = back === null ? front : back;




    this.front = front === null ? back : front;
  }
  enqueue(value){
    // returns the node that is enqueued
    const temp = new Node(value);
    if(this.front === null && this.back === null){
      // queue is empty
      this.back = temp;
      this.front = temp;
      return temp
    }
    temp.next = this.back;
    this.back = temp;
    return temp;
  }
  dequeue(){
    const temp = this.front;
    this.front = this.front.next;
    temp.next = null;
    return temp;
  }
  peek(){
    return this.front;
  }
  isEmpty(){
    return this.rear === null;
  }
}

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}



module.exports = {Queue, Node};