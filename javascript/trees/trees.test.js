'use strict';

const {Tree, Node} = require('./trees');





describe('Trees', () => {
  test('create new tree', () => {
    const newTree = new Tree();
    expect(newTree.root).toEqual(null);
  });
  test('insert one node in tree', () => {
    const newTree = new Tree();
    newTree.insert(10);
    expect(newTree.root.value).toEqual(10);
  });
  test('insert 3 nodes in tree', () => {
    const newTree = new Tree();
    newTree.insert(10);
    newTree.insert(15);
    newTree.insert(7);
    newTree.insert(4);
    newTree.insert(25);
    newTree.insert(20);
    newTree.insert(1000);
    newTree.insert(1);
    newTree.insert(6);
    expect(newTree.root.value).toEqual(10);
    expect(newTree.root.left.value).toEqual(7);
    expect(newTree.root.right.value).toEqual(15);
    expect(newTree.root.left.left.value).toEqual(4);
    expect(newTree.root.right.right.value).toEqual(25);
    expect(newTree.root.left.left.right.value).toEqual(6);
  });
});
