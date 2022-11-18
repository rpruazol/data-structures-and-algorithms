'use strict';


const {LRUCache} = require('../lru');


describe('Least recently used cache', () => {
  test('LRU with a capacity of 3', () => {
    const a = new LRUCache(3)
    expect(a.capacity).toStrictEqual(3)
    expect(a.mostRecent.value).toStrictEqual(null);
  })
  test('LRU with a capacity of 3 add 3 nodes', () => {
    const a = new LRUCache(3)
    a.put(1,1)
    a.put(2,2)
    a.put(3,3)
    expect(a.mostRecent.next.key).toStrictEqual(3)
    expect(a.leastRecent.next.key).toStrictEqual(1);
  })
  test('LRU with a capacity of 3 add 4 nodes', () => {
    const a = new LRUCache(3)
    a.put(1,1)
    a.put(2,2)
    a.put(3,3)
    a.put(4,4)
    expect(a.mostRecent.next.key).toStrictEqual(4)
    expect(a.leastRecent.next.key).toStrictEqual(2);
  })
});
