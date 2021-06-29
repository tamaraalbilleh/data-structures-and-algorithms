'use strict';
const LinkedList = require ('./linkedlist.js');

class HashTable {
  constructor (size){
    this.size = size;
    this.table = new Array (size);
  }

  hash (key){
    let sum = 0;
    sum = key.split('').reduce((result, n) => {
      return result + n.charCodeAt(0);
    }, 1) * 599 % this.table.length;
    return sum;
  }

  add ( key , value ){
    const hashed = this.hash (key);
    if ( !this.table[hashed]){
      this.table[hashed] = new LinkedList ();
    }
    this.table[hashed].append ({ [key] : value });


  }

  get (key){
    let valArray = [];
    const hashed = this.hash(key); // index
    if (this.table[hashed]){
      let pointer = this.table[hashed].head;
      while (pointer){

        let objArray = Object.values(pointer.value);
        objArray.map (item =>{
          valArray.push (item);
        });
        pointer = pointer.next;
      }
      return valArray;
    }else {
      return null;
    }

  }

  contains (key) {
    let hashed = this.hash (key); // index
    if (this.table[hashed]){
      return true;
    }else {
      return null;
    }
  }
}

module.exports = HashTable ;
