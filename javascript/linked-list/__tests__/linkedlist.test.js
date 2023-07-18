"use strict";

const { LinkedList, Node } = require("../linkedlist");

// const testNodeA = new Node('hello')
// const testNodeB = new Node('world')
const testLL = new LinkedList();


describe('linked list', () => {
  test('insert a node', () => {
    testLL.insert('hello')
    testLL.insert('world')
    expect(testLL.head.value).toEqual('world');
    expect(testLL.head.next.value).toEqual('hello');
  })
})