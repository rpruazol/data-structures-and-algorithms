'use strict';


const {Tree} = require('../trees/trees');



function intersectingTrees(root1, root2){
  const output = new Set();
  const check = {};
  console.log(root1)
  const traverse = (node, tree) => {
    if(node.left){traverse(node.left, tree)}
    if(node.right){traverse(node.right, tree)}
    
    if(node.value in check){
      if(check[node.value] === 'first'){
        console.log('found in object', node.value, check)
        output.add(node.value)
      }
    }
    check[node.value] = tree;
  }
  traverse(root1, 'first')
  traverse(root2, 'second')
  console.log(check)
  return output;
}

describe('intersecting trees', () => {
  it('returns a set with intersecting nodes ', () => {
    const tree = new Tree()
    tree.insert(1)
    tree.insert(2)
    tree.insert(3)
    const treeTwo = new Tree()
    treeTwo.insert(2)
    treeTwo.insert(6)
    treeTwo.insert(8)
    
    const result = intersectingTrees(tree.root, treeTwo.root);
    expect(result.has(2)).toBe(true);
    expect(result.has(32)).toBe(false);

  });

  it('accounts for duplicate values', () => {
    const tree = new Tree()
    tree.insert(2)
    tree.insert(2)
    tree.insert(2)
    const treeTwo = new Tree()
    treeTwo.insert(3)
    treeTwo.insert(6)
    treeTwo.insert(8)

    const result = intersectingTrees(tree.root, treeTwo.root);
    expect(result.has(2)).toBe(false);

  })
})