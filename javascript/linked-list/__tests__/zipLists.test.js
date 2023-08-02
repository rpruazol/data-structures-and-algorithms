'use strict';


const { LinkedList, Node } = require('./linkedlist');
const zipLists = require('./zipLists');






describe('zip linked list', () => {
  test('zip up linked list', () => {
    const linkedListA = new LinkedList(new Node(1));
    linkedListA.append(2);
    linkedListA.append(3);
    linkedListA.append(4);

    const linkedListB = new LinkedList(new Node('a'));
    linkedListB.append('b');
    linkedListB.append('c');
    linkedListB.append('d');
    const result = zipLists(linkedListA.head, linkedListB.head);
    expect(result.value).toEqual(1);
    expect(result.next.value).toEqual('a');
  });
  test('zip up linked lists with only 1 node each', () => {
    const linkedListA = new LinkedList(new Node(1));
    const linkedListB = new LinkedList(new Node('a'));

    const result = zipLists(linkedListA.head, linkedListB.head);
    expect(result.value).toEqual(1);
    expect(result.next.value).toEqual('a');
    expect(result.next.next).toEqual(null);
  });
  test('zip up linked lists with different lengths', () => {
    const linkedListA = new LinkedList(new Node(1));
    linkedListA.append(2);
    linkedListA.append(3);
    linkedListA.append(4);

    const linkedListB = new LinkedList(new Node('a'));
    // linkedListB.append('b');
    // linkedListB.append('c');
    // linkedListB.append('d');

    const result = zipLists(linkedListA.head, linkedListB.head);

    expect(result.value).toEqual(1);
    // expect(result.next.next.next.value).toEqual('c');
    expect(result.next.next.next.value).toEqual(3);
  });
  test('invalid input', () => {
    const linkedListTest = new LinkedList(new Node(1));
    const result = zipLists(linkedListTest, 'bananas');
    expect(result).toEqual(null);

  });
});
