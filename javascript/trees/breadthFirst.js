'use strict';

const {Queue} = require('../queue/queue');

function breadthFirst(tree){
  const queue = new Queue();
  const arr = [];
  queue.enqueue(tree.root);
  console.log('root', tree.root )
  while(!queue.isEmpty()){
    const node = queue.dequeue();
    console.log('dequeuednode', node.value)
    arr.push(node.value.value);

    if(node.value.left){ 
      queue.enqueue(node.value.left)
    }
    if(node.value.right){
      queue.enqueue(node.value.right)
    }
    console.log('queue', queue)
  }
  return arr;
}

module.exports = breadthFirst;