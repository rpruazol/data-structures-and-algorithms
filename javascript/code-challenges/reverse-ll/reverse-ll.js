'use strict';

// Require the linked list implementation
const LinkedList = require('../../linked-list');


/*
  Use a lagging temp variable as we step through the linked list so we don't lose track.  Keep a current variable to change the 'next' pointer to a temp variable
*/
module.exports = function reverse(list) {
  let current = list.head;
  let previous = null;
  let nxt = current;

  
  while(current){
    console.log('current: ', current)
    if(current.next === null) {list.head = current}
      nxt = current.next
      current.next = previous
      previous = current
      current = nxt
  }

  return list;
};
