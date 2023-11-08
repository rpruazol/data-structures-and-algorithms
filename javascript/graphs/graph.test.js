const Graph = require('./graph');


describe('graph implementation', () => {
  test('add verticies', () => {
    const newGraph = new Graph();
    newGraph.addVertex('hello');
    newGraph.addVertex('world');
    expect(newGraph.adjacencyList.size).toBe(2);
  });
  test('retrieve list of verticies and size method', () => {
    const newGraph = new Graph();
    newGraph.addVertex('hello');
    newGraph.addVertex('world');
    expect(newGraph.getVerticies().length).toBe(2);
    expect(newGraph.size()).toBe(2);
  })
  test('breadth-first traversal', () => {
    const graph = new Graph();
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    const verticies = graph.getVerticies()
    const a = verticies[0]
    const b = verticies[1]
    const c = verticies[2]
    const d = verticies[3]
    graph.addEdge(a, b);
    graph.addEdge(a, c);
    graph.addEdge(b, d);

    const result = graph.breadthFirstTraversal(a);
    expect(result).toEqual(['A', 'B', 'C', 'D']); // The expected traversal order
  });
  test('depth-first traversal', () => {
    const graph = new Graph();
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    const verticies = graph.getVerticies()
    const a = verticies[0]
    const b = verticies[1]
    const c = verticies[2]
    const d = verticies[3]
    graph.addEdge(a, b);
    graph.addEdge(a, c);
    graph.addEdge(b, d);
    console.log('test graph', graph.adjacencyList)
    const result = graph.depthFirstTraversal(a);
    expect(result).toEqual(['A', 'B', 'C', 'D']); // The expected traversal order
  })
})