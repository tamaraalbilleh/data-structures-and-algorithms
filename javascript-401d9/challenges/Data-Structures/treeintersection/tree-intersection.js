'use strict';
const HashTable = require ('../hashtable/hashtable.js');

function treeIntersection (tree1 , tree2){
  if (!tree1 || !tree2){
    return 'please enter trees';
  }
  if (!tree1.root || ! tree2.root ){
    return 'please enter non empty trees';
  }
  let val1 = tree1.preOrder();
  let val2 = tree2.preOrder();
  let hash2 = new HashTable (3021);
  let output = [];
  for (let i = 0 ; i < val1.length ; i ++){
    if (!hash2.contains(val1[i].toString())){
      hash2.add ( `${val1[i]}` , `${val1[i]}`);
    }
  }
  for (let i = 0; i < val2.length; i++) {
    if (hash2.contains (`${val2[i]}`)){
      output.push(val2[i]);

    }
  }
  return output;
}
module.exports = treeIntersection;
