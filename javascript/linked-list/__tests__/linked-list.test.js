'use strict';

// Require our linked list implementation
const LinkedList = require('../index');


describe('Linked List', () => {
  const a = new LinkedList('hello');

  it('works', () => {
    expect(true).toBeTruthy();
  });
  it('basic linked list', () => {
    expect(a.head.value).toStrictEqual('hello');
    expect(a.head.next).toStrictEqual(null);
  });
  it('appending node', () => {
    a.append('world');
    a.append('!!!');
    expect(a.head.value).toStrictEqual('hello');
    expect(a.head.next.value).toStrictEqual('world');
    expect(a.head.next.next.value).toStrictEqual('!!!');
  });
});

