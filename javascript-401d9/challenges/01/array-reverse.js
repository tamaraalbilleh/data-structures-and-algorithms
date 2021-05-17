'use strict';

function reverseArray (array){
  let reversed = [];
  for (let i= 0 ; i< array.length +1 ; i ++){
    reversed.push (array[array.length -i- 1]);
  }
  reversed.pop ();
  return reversed;
}

// console.log (reverseArray (numbers1));
// console.log (reverseArray (numbers2));
// console.log (reverseArray (numbers3));


// streatch
function reverseArray2 (array){
  array.sort (item =>{
    return -1;
  });
  return array;

}
// console.log (reverseArray2 (numbers1));
// console.log (reverseArray2 (numbers2));
// console.log (reverseArray2 (numbers3));

module.exports = {reverseArray , reverseArray2} ;
