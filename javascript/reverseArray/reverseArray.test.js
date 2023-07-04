'use strict';



function reverseArray(arr) {
  if (arr.length === 0) { return arr; }
  let frontIdx = 0;
  let rearIdx = arr.length - 1;
  while (frontIdx <= rearIdx) {
    let tmp = arr[rearIdx];
    arr[rearIdx] = arr[frontIdx];
    arr[frontIdx] = tmp;
    frontIdx++;
    rearIdx--;
    console.log(arr);
  }
  return arr;
}






describe('Testing challenge 1', () => {
  test('Reversing an array', () => {
    expect(reverseArray([1, 2, 3, 4, 5])).toStrictEqual([5, 4, 3, 2, 1]);
  });
  test('Reverse an empty array', () => {
    expect(reverseArray([])).toStrictEqual([]);
  });
  test('Reverse a single value array', () => {
    expect(reverseArray([1])).toStrictEqual([1]);
  });
  test('Reverse a large value array', () => {
    expect(reverseArray([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199])).toStrictEqual([199, 197, 193, 191, 181, 179, 173, 167, 163, 157, 151, 149, 139, 137, 131, 127, 113, 109, 107, 103, 101, 97, 89, 83, 79, 73, 71, 67, 61, 59, 53, 47, 43, 41, 37, 31, 29, 23, 19, 17, 13, 11, 7, 5, 3, 2]
    );
  });
});
