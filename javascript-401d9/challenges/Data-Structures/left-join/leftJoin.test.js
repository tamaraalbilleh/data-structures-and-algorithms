'use strict';

const joinLeft = require ('./leftJoin.js');
const HashTable = require ('../hashtable/hashtable');
const {expect} = require ('@jest/globals');

describe('Join left', () => {
  it ('should return the values on the join left principle ' , ()=>{
    let left = new HashTable(1024);
    let right = new HashTable(1024);

    left.add('fond', 'enamored');
    left.add('wrath', 'anger');
    left.add('diligent', 'employed');
    left.add('outfit', 'garb');
    left.add('guide', 'usher');

    right.add('fond', 'averse');
    right.add('wrath', 'delight');
    right.add('diligent', 'idle');
    right.add('guide', 'follow');
    right.add('flow', 'jam');
    let result = [
      [ 'fond', 'enamored', 'averse' ],
      [ 'guide', 'usher', 'follow' ],
      [ 'wrath', 'anger', 'delight' ],
      [ 'diligent', 'employed', 'idle' ],
      [ 'outfit', 'garb', null ]
    ];

    let test = joinLeft(left, right);
    expect (test).toEqual (result);

  });
  it ('should not continue without entering two hash maps', ()=>{
    expect (joinLeft ()).toBe ('please enter two hash maps');
  });
});


