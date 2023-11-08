"use strict";

const {Queue} = require('../queue/queue');
const {Stack} = require('../stack/stack');

class Node {
  constructor(value = null) {
    this.value = value;
  }
}

class Edge {
  constructor(fromNode, toNode, weight) {
    this.fromNode = fromNode;
    this.toNode = toNode;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }
  addVertex(value) {
    // create a new vertex(node) and add it to the adjacency list
    const newVertex = new Node(value);
    this.adjacencyList.set(newVertex, []);
  }
  addEdge(vertA, vertB, weight = 1) {
    // check to see if verts exist
    if (!this.adjacencyList.has(vertA) || !this.adjacencyList.has(vertB)) {
      throw new Error("vertices do not exist");
    }
    
    const edges = this.adjacencyList.get(vertA);
    
    const newEdge = new Edge(vertA, vertB, weight);
    edges.push(newEdge);
  }
  addUnidirectedEdge(vertA, vertB, weight) {
    this.addEdge(a, b, weight);
    this.addEdge(b, a, weight);
  }
  getVerticies() {
    const verticies = [];
    this.adjacencyList.forEach((_, value) => {
      verticies.push(value);
    });
    return verticies;
  }
  getEdges(vertex) {
    return this.adjacencyList.get(vertex);
  }
  getNeighbors(vertex) {
    const edges = this.adjacencyList.get(vertex);
    console.log('edges', edges)
    if (edges) {
      const res = edges.map(edge => edge.toNode)
      return res
    } else {
      return [];
    }
  }
  size(){
    return this.adjacencyList.size;
  }
  breadthFirstTraversal(vertex){
    // console.log(vertex)
    const queue = new Queue();
    const map = new Map();
    const output = [];
    output.push(vertex.value)
    queue.enqueue(vertex);
    while(queue.front && queue.back){
      const node = queue.dequeue(vertex).value;
      // console.log('node to check>>>>', node)
      // console.log('should be empty', queue)
      const neighbors = this.getNeighbors(node);
      // console.log('neighbors>>>>', neighbors)
      neighbors.forEach(node => {
        if(!map.has(node)){
          map.set(node, true);
          queue.enqueue(node);
          output.push(node.value);
        }
      })
    }
    return output;
  }
  depthFirstTraversal(vertex){
    const stack = new Stack();
    const map = new Map();
    const output = [];
    output.push(vertex.value)
    stack.push(vertex);
    while(stack.top){
      const node = stack.pop().value;
      const neighbors = this.getNeighbors(node);
      console.log(neighbors)
      neighbors.forEach(node => {
        if(!map.has(node)){
          map.set(node, true);
          stack.push(node);
          output.push(node.value);
          console.log(output)
        }
      })
    }
    return output;
  }
}

module.exports = Graph;
