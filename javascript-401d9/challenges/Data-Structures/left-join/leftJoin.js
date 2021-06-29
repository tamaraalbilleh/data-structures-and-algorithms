'use strict';

function joinLeft (left , right){
  if (!left || !right){
    return 'please enter two hash maps';
  }

  let output = [];
  for (let i = 0 ; i < left.table.length ; i ++){
    if (left.table[i] ){
      output.push (Object.entries( left.table[i].head.value)[0]);
    }
  }
  for (let i = 0 ; i < right.table.length ; i ++){
    if (right.table[i]){
      for (let j = 0; j < output.length ; j++){

        if (output[j].includes (Object.keys(right.table[i].head.value)[0])){

          output[j].push (Object.values (right.table[i].head.value)[0]);
        }
      }
    }
  }
  for (let i = 0 ; i < output.length ;i ++){
    if (output[i].length < 3) {
      output[i].push (null);
    }
  }
  return output;
}
module.exports = joinLeft;
