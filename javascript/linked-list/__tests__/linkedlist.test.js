'use strict';

const { LinkedList, Node } = require('../linkedlist');

// Can successfully instantiate an empty linked list
// Can properly insert into the linked list
// The head property will properly point to the first node in the linked list
// Can properly insert multiple nodes into the linked list
// Will return true when finding a value within the linked list that exists
// Will return false when searching for a value in the linked list that does not exist
// Can properly return a collection of all the values that exist in the linked list


const testLL = new LinkedList();
testLL.insert('a linked list');
testLL.insert('is');
testLL.insert('this');



describe('linked list', () => {
  test('Can successfully instantiate an empty linked list', () => {
    const emptyLL = new LinkedList();
    expect(emptyLL.head).toEqual(null);
  });
  test('Can properly insert into the linked list', () => {
    expect(testLL.head.value).toEqual('this');
    expect(testLL.head.next.value).toEqual('is');
  }),
  test('The head property will properly point to the first node in the linked list', () => {
    expect(testLL.head.value).toEqual('this');
  }),
  test('Can properly insert multiple nodes into the linked list', () => {
    expect(testLL.head.value).toEqual('this');
    expect(testLL.head.next.value).toEqual('is');
    expect(testLL.head.next.next.value).toEqual('a linked list');
  }),
  test('Will return true when finding a value within the linked list that exists', () => {
    expect(testLL.includes('is')).toEqual(true);
  }),
  test('Will return false when searching for a value in the linked list that does not exist', () => {
    expect(testLL.includes('bananas')).toEqual(false);
  }),
  test('Can properly return a collection of all the values that exist in the linked list', () => {
    //
    expect(testLL.toString()).toEqual('{this}->{is}->{a linked list}->NULL');
  });
  test('Can append a new node with a given value to the end of the list', () => {
    testLL.append('last node');
    expect(testLL.toString()).toEqual('{this}->{is}->{a linked list}->{last node}->NULL');
  });
  test('Can insert a new node with a given value immediately before the first node that has the value specified', () => {
    // BEFORE {this}->{is}->{a linked list}->{last node}->NULL
    testLL.insertBefore('so', 'this');
    testLL.insertBefore('definitely', 'a linked list');
    expect(testLL.toString()).toEqual('{so}->{this}->{is}->{definitely}->{a linked list}->{last node}->NULL');
  });
  test('Can insert a new node with a given value immediately AFTER the first node that has the value specified', () => {
    testLL.insertAfter('I\'m sure', 'so');
    testLL.insertAfter('NOT', 'definitely');
    expect(testLL.toString()).toEqual('{so}->{I\'m sure}->{this}->{is}->{definitely}->{NOT}->{a linked list}->{last node}->NULL');
  });
});
