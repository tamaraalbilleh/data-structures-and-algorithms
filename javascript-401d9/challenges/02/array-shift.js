'use strict';
function insertShiftArray (array , value){
  let output = [];
  if (array.length %2 === 0){
    let placement = array.length/ 2;
    for (let i = 0;i< array.length;i++){
      if ( i === placement){
        output.push (value);
        output.push (array[i]);
      }else {
        output.push(array[i]);
      }
    }
  } else {
    let placement = array.length/2 + 0.5;
    for (let i=0 ; i< array.length ; i++){
      if ( i === placement){
        output.push (value);
        output.push (array[i]);

      }else {
        output.push(array[i]);
      }
    }
  }
  if (array.length === 0){
    return [value];
  }

  return output;
}
module.exports = insertShiftArray;
// console.log (insertShiftArray ([2,4,6,-8], 5));
// console.log (insertShiftArray ([42,8,15,23,42], 16));
