const { Queue, Node } = require("./queue");




describe('queue', () => {
  test('add new value to back of queue', () => {
    const queue = new Queue(new Node('world'));
    queue.enqueue('hello');
    expect(queue.back.value).toEqual('hello');
  });
  test('return and remove the node from front of queue', () => {
    const queue = new Queue(new Node('world'));
    queue.dequeue();
    expect(queue.front).toEqual(null)
  });
  test('peek at top of queue', () => {
    const queue = new Queue(new Node('world'));
    const result = queue.peek();
    expect(result.value).toEqual('world');
  });
  test('queue is empty', () => {
    const queue = new Queue(new Node('world'));
    queue.dequeue()
    expect(queue.isEmpty).toBeTruthy();
  });
  test('single node is the front and back', () => {
    const queue = new Queue(new Node('world'));
    expect(queue.front.value).toEqual('world');
    expect(queue.back.value).toEqual('world');
  })
})