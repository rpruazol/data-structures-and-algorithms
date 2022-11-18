class Node {
  constructor(key, value) {
    this.key = key
    this.value = value
    this.next = null
    this.previous = null

  }
}

class LRUCache {
  constructor(cap) {
    this.capacity = cap;
    this.cache = {};
    // pointers to the most and least recently used
    this.mostRecent = new Node(null, null);
    this.leastRecent = new Node(null, null);
  }

  remove() {
    // get old node
    let oldNode = this.leastRecent.next
    // connect the adjacent nodes together
    oldNode.next.previous = this.leastRecent
    this.leastRecent.next = oldNode.next
    console.log('removed ', oldNode.value)
    console.log('new LRU ', this.leastRecent.next.value)
    delete this.cache[oldNode.key]
    return oldNode
  }


  put(key, value) {
    if (Object.keys(this.cache).length >= this.capacity) {
      // remove LRU
      this.remove()
    }
    this.cache[key] = new Node(key, value);
    // if first node
    if (this.mostRecent.next === null) {
      this.mostRecent.next = this.cache[key]
      this.leastRecent.next = this.cache[key]
    }
    // old mostRecent
    let oldNode = this.mostRecent.next
    this.mostRecent.next = this.cache[key]
    this.cache[key].previous = oldNode
    oldNode.next = this.cache[key]
    console.log('cache status, ', this.cache)
    return this.cache[key]
  }
}

module.exports = { LRUCache };