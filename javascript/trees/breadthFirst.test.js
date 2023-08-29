'use strict'

const breadthFirst = require('./breadthFirst');
const {Tree, Node} = require('./trees');


describe('breadthFirst traversal', () => {
  const tree = new Tree();
  tree.insert(5)
  tree.insert(3)
  tree.insert(6)
  tree.insert(2)
  tree.insert(4)
  tree.insert(7)
  test('', () => {
    const res = breadthFirst(tree);
    expect(res).toEqual([5,3,6,2,4,7])
  })
})