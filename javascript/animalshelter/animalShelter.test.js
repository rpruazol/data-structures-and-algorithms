'use strict';

const { Queue, Node } = require("../queue/queue.js");
const {AnimalShelter, Animal} = require('./animalShelter.js');



let Shelter;


describe('Shelter of animals', () => {

  beforeEach(() => {
    Shelter = new AnimalShelter();
  });

  test('add new animal to the animal shelter', () => {
    const animal = new Animal('fido', 'dog')
    Shelter.enqueue(animal);
    expect(Shelter.queue.back.value.species).toEqual('dog');
  });

  test('adopt a cat', () => {
    Shelter.enqueue(new Animal('fido', 'dog'));
    Shelter.enqueue(new Animal('shelbert', 'cat'));
    Shelter.enqueue(new Animal('martha', 'cat'));
    Shelter.enqueue(new Animal('alberta', 'cat'));
    //{alberta} => {martha} => {shelbert} => {fido}
    let animal = Shelter.dequeue('cat');
    expect(animal.value.name).toEqual('shelbert');
  });

  test('adopt a dog', () => {
    Shelter.enqueue(new Animal('fido', 'dog'));
    Shelter.enqueue(new Animal('shelbert', 'cat'));
    Shelter.enqueue(new Animal('martha', 'cat'));
    Shelter.enqueue(new Animal('alberta', 'cat'));
    //{alberta} => {martha} => {shelbert} => {fido}
    let animal = Shelter.dequeue('dog');
    expect(animal.value.name).toEqual('fido');
  })
  test('adopt a dog', () => {
    Shelter.enqueue(new Animal('fido', 'dog'));
    Shelter.enqueue(new Animal('shelbert', 'cat'));
    Shelter.enqueue(new Animal('martha', 'cat'));
    Shelter.enqueue(new Animal('alberta', 'cat'));
    //{alberta} => {martha} => {shelbert} => {fido}
    let animal = Shelter.dequeue();
    expect(animal.value.name).toEqual('fido');
  })
})