const PseudoQueue  = require("./pseudoqueue");



describe('PseudoQueue', () => {
  test('add new value to back of PseudoQueue', () => {
    const testPseudoQueue = new PseudoQueue();
    let result = testPseudoQueue.enqueue('world');
    expect(result.value).toEqual('world');
  });
  test('return and remove the node from front of PseudoQueue', () => {
    const testPseudoQueue = new PseudoQueue('world');
    testPseudoQueue.enqueue('hello');
    let helloNode = testPseudoQueue.dequeue();
    console.log(helloNode)
    let worldNode = testPseudoQueue.dequeue();
    expect(helloNode.value).toEqual('world');
    expect(worldNode.value).toEqual('hello');
  });
})