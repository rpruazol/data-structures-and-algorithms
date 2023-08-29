'use strict';


class Queue {
  constructor(back=null, front=null){
    this.back = back === null ? front : back;




    this.front = front === null ? back : front;
  }
  enqueue(value){
    // returns the node that is enqueued
    const temp = new Node(value);
    if(this.back === null){
      // queue is empty
      this.front = this.back = temp;
    } else{
      this.back.next = temp;
      this.back = temp;

    }
    return temp;
  }
  dequeue(){
    if (this.isEmpty()) {
      return null;
  }
    const temp = this.front;
    this.front = this.front.next;
    if(this.front === null){
      this.back = null;
    }

    return temp;
  }
  peek(){
    return this.front;
  }
  isEmpty(){
    return this.front === null;
  }
}

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}



module.exports = {Queue, Node};