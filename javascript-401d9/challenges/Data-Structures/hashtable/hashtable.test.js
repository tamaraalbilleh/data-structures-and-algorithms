'use strict';

const HashTable = require ('./hashtable.js');
const { expect } = require('@jest/globals');

describe('Hash Tables', () => {

  it ('should Add a key/value to your hashtable' , ()=>{
    let myHash = new HashTable (1021);
    let obj = { 'key' : 'test'};
    myHash.add ('key' , 'test');
    let hashed = myHash.hash ('key');
    expect(myHash.table[hashed].head.value).toEqual (obj);
  });

  it ('should Retrieve based on a key returns the value stored ' , ()=>{
    let myHash = new HashTable (1021);
    let arr = [ 'test' , 'test2'];
    myHash.add ('key' , 'test');
    myHash.add ('key' , 'test2');
    expect(myHash.get ('key')).toEqual (arr);
    expect(myHash.get ('ke')).toBeNull;
  });

  it ('should return null for a key that does not exist in the hashtable' , ()=>{
    let myHash = new HashTable (1021);
    myHash.add ('key' , 'test');
    myHash.add ('key' , 'test2');
    expect(myHash.contains ('key2')).toBeNull;
    expect(myHash.contains ('key')).toBeTruthy();

  });

  it ('should handle a collision within the hashtable' , ()=>{
    let myHash = new HashTable (1021);
    myHash.add ('key' , 'test2');
    myHash.add ('yek' , 'test2');
    let hashed = myHash.hash ('key');
    expect(myHash.table[hashed].head.value).toEqual ({'key': 'test2'});
    expect(myHash.table[hashed].head.next.value).toEqual ({'yek': 'test2'});
  });

  it ('should retrieve a value from a bucket within the hashtable that has a collision' , ()=>{
    let myHash = new HashTable (1021);
    myHash.add ('key' , 'test2');
    myHash.add ('yek' , 'test2');
    let array = myHash.get ('key');
    expect (array[0]).toEqual ('test2');
    expect (array[1]).toEqual ('test2');
  });

  it ('should hash a key to an in-range value' , ()=>{
    let myHash = new HashTable (1021);
    let hashed = myHash.hash ('key');
    expect (hashed).toBeLessThanOrEqual (599 % myHash.size);
  });

});
