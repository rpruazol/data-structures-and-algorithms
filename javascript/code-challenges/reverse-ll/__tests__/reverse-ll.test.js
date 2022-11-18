'use strict';

const reverse = require('../reverse-ll.js');
const {LinkedList, Node} = require('../../../linked-list/index.js');


describe('Reverse', () => {

  const ll = new LinkedList()
  const a = new Node('hello')
  const b = new Node('world')
  const c = new Node('lorum')
  const d = new Node('ipsum')
  
  ll.head = a;
  ll.head.next = b;
  b.next = c;
  c.next = d;


  it('works', () => {
    expect(ll.head.value).toStrictEqual('hello');
  })
  test('reverse linked list', () => {
    const result = reverse(ll)
    console.log(result)
    expect(result.head.value).toStrictEqual('ipsum')
  })
})
