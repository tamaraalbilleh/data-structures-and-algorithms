'use strict';
function quickSort(arr, left, right){
  if (!arr || !right ){
    return 'some params are missing';
  }
  if (arr.length === 0){
    return [];
  }
  if (left > right){
    return;
  }
  for (let i=0;i<arr.length;i ++){
    if (typeof (arr[i]) !== 'number'){
      return 'some values are not numerical';
    }
  }

  let position = partition(arr, left, right);
  quickSort(arr, left, position - 1);
  quickSort(arr, position + 1, right);
  return arr;
}

function partition(arr, left, right){
  let pivot = arr[right];
  let low = left - 1;
  for (let i = left ;i<right; i++) {
    if (arr[i] <= pivot){
      low = low+ 1;
      swap(arr, i, low);
    }
  }
  swap(arr, right, low + 1);
  return low + 1;
}

function swap(arr, i, low){
  let temp;
  temp = arr[i];
  arr[i] = arr[low];
  arr[low] = temp;
}
module.exports = quickSort ;
