function leftJoinHashmap(hashOne,hashTwo){
  const answer = {};
  Object.keys(hashOne).map(value => {
    if(hashTwo[value]){
      answer[value] = [hashOne[value], hashTwo[value]]
    }
    else {
      answer[value] = [hashOne[value], null]
    }
  })
  return answer;
}




describe('left join', () => {

  
  it('left join on two hash maps', () => {
    const synonyms = {
      diligent: 'employed',
      outfit: 'garb'
    }
    const antonyms = {
      diligent: 'idle',
      flow: 'jam'
    }
    const response = leftJoinHashmap(synonyms, antonyms);
    expect(response).toStrictEqual({
      'diligent': ['employed', 'idle'],
      'outfit': ['garb', null]
    })
  });

  it('left join no matches', () => {
    const one = {
      'a': 1,
      'b': 2,
      'c': 3,
      'd': 4
    }
    const two = {}
  const response = leftJoinHashmap(one, two)
  expect(response).toStrictEqual({
    'a': [1, null],
    'b': [2, null],
    'c': [3, null],
    'd': [4, null]
  })
})
})