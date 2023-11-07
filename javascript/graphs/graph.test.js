const Graph = require('./graph');


describe('graph implementation', () => {
  test('add verticies', () => {
    const newGraph = new Graph();
    newGraph.addVertex('hello');
    newGraph.addVertex('world');
    expect(newGraph.adjacencyList.size).toBe(2);
  });
  test('retrieve list of verticies', () => {
    const newGraph = new Graph();
    newGraph.addVertex('hello');
    newGraph.addVertex('world');
    expect(newGraph.getVerticies().length).toBe(2)
  })
})