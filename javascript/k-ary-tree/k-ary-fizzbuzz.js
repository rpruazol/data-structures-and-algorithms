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

    let response = '';
    
    if(num % 3 === 0 ){ response += 'Fizz'}
    if(num % 5 === 0){ response += 'Buzz'}
    if(response === ''){ response = num.toString() }
    console.log('response', response, 'value', num)
    return response
  }
  
  const newNode = new Node(_fizzBuzz(node.value));
  
  node.children.forEach(child => {
    //recursively go down tree
    console.log('child', child)
    const fizzNode = kAryFizzbuzz(child);
    newNode.children.push(fizzNode);
  })
  
  
  return newNode

}

module.exports = {kAryFizzbuzz, Node}