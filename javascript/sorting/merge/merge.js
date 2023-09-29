

function mergeSort(arr){
  let n = arr.length
  if(n > 1){
    console.log('arr at start', arr)
    let mid = Math.floor(arr.length / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)
    mergeSort(left)
    mergeSort(right)

    console.log(left, right, arr)
    merge(left, right, arr)
  }
}

function merge(left, right, arr){
  let i = 0  // left pointer
  let j = 0 // right pointer
  let k = 0 // arr pointer

  while(i < left.length && j < right.length){
    if(left[i] <= right[j]){
      arr[k] = left[i]
      i++
    }
    else {
      arr[k] = right[j]
      j++
    }
    k++
  }
    
    while(i < left.length){
      arr[k] = left[i];
      i++;
      k++;
    }
    while(j < right.length){
      arr[k] = right[j];
      j++;
      k++
    }
}


let arr = [8, 4, 23, 42, 16, 15]

mergeSort(arr)

console.log(arr)
