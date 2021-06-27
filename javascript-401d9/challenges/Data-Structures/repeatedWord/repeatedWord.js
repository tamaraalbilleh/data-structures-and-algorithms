'use strict';
const HashTable = require ('../hashtable/hashtable.js');

function hashmap (str){
  if (typeof (str) !== 'string'){
    return 'please enter a string value';
  }
  let hashTable = new HashTable(1021);
  let array =  str.match(/\w+/g);
  for (let i = 0; i < array.length; i++) {
    let word = array[i].toLowerCase();
    if (hashTable.get(word) === word) {
      return hashTable.get(word);
    } else {
      hashTable.add(word, word);
    }
  }
  return null;
}

module.exports = hashmap;
