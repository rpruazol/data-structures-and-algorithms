'use strict';

const { Tree, Node } = require('./trees');





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
  test('insert nodes in tree', () => {
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
  test('preorder', () => {
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

    const result = newTree.preOrder();
    expect(result).toEqual([10, 7, 4, 1, 6, 15, 25, 20, 1000]);
  });
  test('inorder', () => {
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

    const result = newTree.inOrder();
    console.log(result);
    expect(result).toEqual([1, 4, 6, 7, 10, 15, 20, 25, 1000]);
  });
  test('postOrder', () => {
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

    const result = newTree.postOrder();
    console.log(result);
    expect(result).toEqual([1, 6, 4, 7, 20, 1000, 25, 15, 10]);
  });
  test('max value', () => {
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

    const result = newTree.maxValue();
    expect(result).toEqual(1000);
  });
});
