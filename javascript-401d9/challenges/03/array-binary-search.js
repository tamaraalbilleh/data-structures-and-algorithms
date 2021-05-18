'use strict';
function binarySearch(sortedArray, searchKey){
  let start  = 0;
  let end   = sortedArray.length - 1;
  let middle = Math.floor((end + start)/2);

  while(sortedArray[middle] !== searchKey && start < end){
    if (searchKey < sortedArray[middle]){
      end = middle - 1;
    }else if (searchKey > sortedArray[middle]){
      start = middle + 1;
    }
    middle = Math.floor((end + start)/2);
  }
  if (sortedArray[middle] !== searchKey){
    return -1;
  }else {
    return middle ;
  }
}
module.exports = binarySearch ;
