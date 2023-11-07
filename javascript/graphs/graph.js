"use strict";

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
  addEdge(vertA, vertB, weight) {
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
    if (edges) {
      return edges.map((key, value) => {
        if (value !== vertex.value) {
          neighbors.push({ key, value });
        }
      });
    } else {
      return [];
    }
  }
  size(){
    return this.adjacencyList.size;
  }
}

module.exports = Graph;
