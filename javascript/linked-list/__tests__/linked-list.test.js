'use strict';

// Require our linked list implementation
const {LinkedList, Node} = require('../index');

describe('Linked List', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });
  test('linked list one node', () => {
    const a = new Node('hello')
    const ll = new LinkedList(a)
    expect(ll.head.value).toStrictEqual('hello')
    expect(ll.head.next).toStrictEqual(null);
  })
  test('linked list with multiple nodes', () => {
    const a = new Node('hello')
    const b = new Node('world')
    const ll = new LinkedList(a)
    
    a.next = b
    expect(ll.head.value).toStrictEqual('hello')
    expect(ll.head.next.next).toStrictEqual(null);
  })
});