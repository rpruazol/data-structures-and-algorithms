import {assert} from 'chai'
import LinkedList from '../linked-list/linked-list';


describe('Linked List tests', () => {
  it('create basic linked list', () => {
    const a = new LinkedList('hello');
    assert.equal(a.head.value, 'hello');
  })
})
