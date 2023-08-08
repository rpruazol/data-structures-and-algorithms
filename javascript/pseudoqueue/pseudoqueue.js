'use strict';


const {Stack, Node} = require('../stack/stack');


class Pseudoqueue {
  constructor(stackOne=null, stackTwo=null){
    this.stackOne = new Stack(stackOne)
    this.stackTwo = new Stack(stackTwo)
    
    // if there is only one node
  }
  enqueue(value){
    if(this.stackOne.top === null){
      this.transfer(this.stackTwo)
    }
    return this.stackOne.push(value);
  }
  dequeue(value){
    if(this.stackTwo.top.value === null){
      console.log('dequeue stack is empty.  transferring...')
      this.transfer(this.stackOne)
    }
    console.log(this.stackTwo)
    return this.stackTwo.pop()
  }
  transfer(sourceStackTop){
    let destinationStack = this.stackOne === null ? this.stackOne : this.stackTwo;
    while(sourceStackTop.top){
      // console.log(sourceStackTop)
      let popped = sourceStackTop.pop();
      destinationStack.push(popped.value);
      // console.log('sourceStackTop', sourceStackTop)
      console.log('destinationStackTop', destinationStack)
    }
  }
}


module.exports = Pseudoqueue