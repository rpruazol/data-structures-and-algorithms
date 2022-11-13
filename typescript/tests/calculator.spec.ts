import {assert} from 'chai';
import {addition} from '../code-challenges/calculator'

describe('Calculator tests', () => {
  it("calculator returns 20 when 5 + 5", () => {
    const result = addition(5,5);
    assert.equal(result, 10);
  })
})
