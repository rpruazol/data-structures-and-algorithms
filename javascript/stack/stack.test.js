'use strict';

const { Stack, Node } = require("./stack");




describe('stack', () => {
  test('add new value to top of stack', () => {
    const stack = new Stack(new Node('world'));
    stack.push('hello');
    expect(stack.top.value).toEqual('hello');
  });
  test('return and remove the node from top of stack', () => {
    const stack = new Stack(new Node('world'));
    stack.pop();
    expect(stack.top).toEqual(null)
  });
  test('peek at top of stack', () => {
    const stack = new Stack(new Node('world'));
    const result = stack.peek();
    expect(result.value).toEqual('world');
  });
  test('stack is empty', () => {
    const stack = new Stack(new Node('world'));
    stack.pop()
    console.log(stack)
    expect(stack.isEmpty).toBeTruthy();
  })
})