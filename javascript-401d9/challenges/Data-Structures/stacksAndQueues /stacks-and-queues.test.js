let { Node }= require('./stacks-and-queues.js');
let { Stack } = require ('./stacks-and-queues.js');
let { Queue } = require ('./stacks-and-queues.js');

const { expect } = require('@jest/globals');

// testing stacks //
describe ('Nodes', ()=>{
  it ('should create a new node', ()=>{
    // arrange
    let value = 5;
    // act
    let newNode = new Node (value);
    // assert
    expect (newNode.value).toBe (5);
  });
});

describe ('Stacks' , ()=>{
  it ('should create a new stack', ()=>{
    // arrange
    // act
    let newStack = new Stack ();
    // assert
    expect (newStack.top).toBeNull;
  });
});

describe ('Stacks push' , ()=>{
  //  onto a stack
  it ('should push a node onto the top stack', ()=>{
    // arrange
    let value = 5;
    let newStack = new Stack ();
    // act
    newStack.push (value);
    // assert
    expect (newStack.top.value).toBe (value);
    expect (newStack.top.next).toBeNull;
  });
  it ('should push multiple values node to the top stack', ()=>{
    // arrange
    let value = 5;
    let pushedNodeValue = 4;
    let newStack = new Stack ();
    // act
    newStack.push (value);
    newStack.push (pushedNodeValue);
    // assert
    expect (newStack.top.value).toBe(pushedNodeValue);
    expect (newStack.top.next.value).toBe (value);
  });
});

describe ('Stacks pop' , ()=>{
  it ('should empty a stack after multiple pops', ()=>{
  // arrange
    let value = 5;
    let value2 = 4;
    let newStack = new Stack ();
    newStack.push (value);
    newStack.push (value2);
    // act
    newStack.pop ();
    newStack.pop ();
    // assert
    expect (newStack.top).toBeNull;
  });
  it ('should pop on an empty stack after and throw error', ()=>{
    // arrange
    let newStack = new Stack ();
    // act
    // assert
    expect (newStack.pop).toThrowError;
  });
});

describe ('Stacks peek' , ()=>{
  it ('should peek the next item on the stack on a non empty stack', ()=>{
    // arrange
    let value = 5;
    let value2 = 4;
    let newStack = new Stack ();
    newStack.push (value);
    newStack.push (value2);
    // act
    let peek = newStack.peek ();
    // assert
    expect (peek).toBe (value2);
  });
  it ('should peek the next item on the stack on an empty stack', ()=>{
    // arrange
    let newStack = new Stack ();
    // act
    // assert
    expect (newStack.peek).toThrowError;
  });
});

describe ('Stacks isEmpty' , ()=>{
  it ('should indicate whether or not the stack is empty on a non empty stack', ()=>{
    // arrange
    let value = 5;
    let value2 = 4;
    let newStack = new Stack ();
    newStack.push (value);
    newStack.push (value2);
    // act
    let is = newStack.isEmpty ();
    // assert
    expect (is).toBeFalsy;
  });
  it ('should indicate whether or not the stack is empty on an empty stack', ()=>{
    // arrange
    let newStack = new Stack ();
    // act
    let is = newStack.isEmpty ();
    // assert
    expect (is).toBeTruthy;
  });
});



describe ('Queue' , ()=>{
  it ('should create a new queue', ()=>{
    // arrange
    // act
    let newQueue = new Queue ();
    // assert
    expect (newQueue.front).toBeNull;
  });
});

describe ('Queue enqueue' , ()=>{
  it ('should enqueue multiple nodes to the back of the queue', ()=>{
    // arrange
    let value = 5;
    let otherValue = 4;
    let newQueue = new Queue ();
    // act
    newQueue.enqueue (value);
    newQueue.enqueue (otherValue);
    // assert
    expect (newQueue.front.value).toBe (value);
    expect (newQueue.front.next.value).toBe (otherValue);
    expect (newQueue.rear.next).toBeNull;
  });
  it ('should enqueue a nodes to the back of the queue', ()=>{
    // arrange
    let value = 5;
    let newQueue = new Queue ();
    // act
    newQueue.enqueue (value);
    // assert
    expect (newQueue.front.value).toBe (value);
    expect (newQueue.rear).toBeNull;
  });

});

describe ('Queue dequeue' , ()=>{
  it ('should dequeue a node from a queue', ()=>{
    // arrange
    let value = 1;
    let otherValue = 2;
    let otherOtherOtherValue = 3;
    let newQueue = new Queue();
    // act
    newQueue.enqueue(value);
    newQueue.enqueue(otherValue);
    newQueue.enqueue(otherOtherOtherValue);
    // assert
    expect(newQueue.dequeue()).toEqual(1);
  });
  it ('should dequeue on an empty queue and throw error', ()=>{
    // arrange
    let newQueue = new Queue ();
    // act
    // assert
    expect (newQueue.dequeue).toThrowError;
  });

  it('should successfully empty a queue after multiple dequeues', () => {
    // arrange
    let newQueue = new Queue();
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    // act
    newQueue.dequeue();
    newQueue.dequeue();
    // assert
    expect(newQueue.length).toBe(0);
  });
});

describe ('Queues peek' , ()=>{
  it ('should peek the next item on the queue on a non empty queue', ()=>{
    // arrange
    let value = 5;
    let value2 = 4;
    let newQueue = new Queue ();
    newQueue.enqueue (value);
    newQueue.enqueue (value2);
    // act
    let peek = newQueue.peek ();
    // assert
    expect (peek).toBe (value);
  });
  it ('should peek the next item on the Queue on an empty Queue', ()=>{
    // arrange
    let newQueue = new Queue ();
    // act
    // assert
    expect (newQueue.peek).toThrowError;
  });
});

describe ('Queues isEmpty' , ()=>{
  it ('should indicate whether or not the Queue is empty on a non empty Queue', ()=>{
    // arrange
    let value = 5;
    let value2 = 4;
    let newQueue = new Queue ();
    newQueue.enqueue (value);
    newQueue.enqueue (value2);
    // act
    let is = newQueue.isEmpty ();
    // assert
    expect (is).toBeFalsy;
  });
  it ('should indicate whether or not the Queue is empty on an empty Queue', ()=>{
    // arrange
    let newQueue = new Queue ();
    // act
    let is = newQueue.isEmpty ();
    // assert
    expect (is).toBeTruthy;
  });
});
// Can successfully dequeue out of a queue the expected value //

// Can successfully empty a queue after multiple dequeues

