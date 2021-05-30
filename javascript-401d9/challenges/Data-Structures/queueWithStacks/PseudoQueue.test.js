'use strict';
let { PseudoQueue } = require ('./PseudoQueue.js');

const { expect } = require('@jest/globals');

describe ('happy path', ()=>{
  it ('should enqueue to a PseudoQueue', ()=>{
    // arrange
    let queue = new PseudoQueue ();
    let val1 = 1;
    let val2 = 2;
    let val3 = 3;
    // act
    queue.enqueue (val1);
    queue.enqueue (val2);
    queue.enqueue (val3);
    // assert
    expect(queue.mainStack.top.value).toBe (3);
  });
  it ('should dequeue from a pseudoQueue', ()=>{
    // arrange
    let queue = new PseudoQueue ();
    let val1 = 1;
    let val2 = 2;
    let val3 = 3;
    // act
    queue.enqueue (val1);
    queue.enqueue (val2);
    queue.enqueue (val3);
    let result = queue.dequeue();
    // assert
    expect(result).toBe (1);
  });
  it ('should make a new pseudoQueue', ()=>{
    // arrange
    let queue = new PseudoQueue();
    // act
    // assert
    expect(queue.mainStack.top).toBeNull;
    expect(queue.temporaryStack.top).toBeNull;
    expect(queue instanceof PseudoQueue).toBeTruthy;
  });
});

describe ('Expected failure' , ()=>{
  it ('should fail to enqueue without a value',()=>{
    // arrange
    let queue = new PseudoQueue ();
    // act
    // assert
    expect(queue.enqueue()).toThrowError;
  });
});

describe ('Edge Case',()=>{
  it ('should throw error while trying to dequeue from an empty queue',()=>{
    // arrange
    let queue = new PseudoQueue ();
    // act
    // assert
    expect(queue.dequeue).toThrowError;
  });
});
