'use strict'

class Node {
  constructor(value, children = []){
    this.value = value;
    this.children = children;
  }
}

function kAryFizzbuzz(node){

  if(!node) {return null} //base case
  
  
  
  
  let _fizzBuzz = (num) => {
    console.log('num', num)
    let response = '';
    
    if(num % 3 === 0 ){ response += 'fizz'}
    if(num % 5 === 0){ response += 'buzz'}
    return response
  }
  
  const newNode = new Node(_fizzBuzz(node.value));

  node.children.forEach(child => {
    //recursively go down tree
    const fizzNode = kAryFizzbuzz(child);
    child.children.push(fizzNode);
  })


  return newNode

}

module.exports = {kAryFizzbuzz, Node}