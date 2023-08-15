'use strict';

'use strict';

const {Queue} = require('../queue/queue.js');

class AnimalShelter {
  constructor(){
    this.queue = new Queue()
  }
  enqueue(animal){
  //species is an object, which will be a value in our nodes
  
  if(animal.species.toLowerCase() !== 'cat' && animal.species.toLowerCase() !== 'dog') {return null}
  console.log(this.queue)
  this.queue.enqueue(animal);
  }
  dequeue(pref){
    if(!pref){return this.queue.front}
    
    let current = this.queue.back;
    let temp = null;
    let previous = null
    let longest = null;
    while(current){
      console.log('animal', current, pref);
      if(current.value.species === pref){
        // found the animal, but now we have to remove without islanding the nodes
        previous = temp;
        longest = current;
      } 
        temp = current;
        current = current.next;
    }
    previous = longest.next;
    longest.next = null;
    return longest
  }
}

class Animal{
  constructor(name, species){
    this.name = name;
    this.species = species;
  }
}

module.exports = {Animal, AnimalShelter};