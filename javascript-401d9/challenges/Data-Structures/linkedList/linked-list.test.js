let Nodes = require('./node.js');
let LinkedList = require('./linked-list.js');
const { expect } = require('@jest/globals');


describe ('Linked Lists' , ()=>{

  it ('should instantiate an empty linked list',()=>{
    //arrange
    let value = 5;
    let linkedList = new LinkedList ();
    //act
    linkedList.insert(value);

    //assert
    expect(linkedList.head.next).toBeNull();
    expect(linkedList.head.value).toBe (5);

  });

});


describe ('Linked Lists' , ()=>{
  it ('should insert a node to the head of linked list',()=>{
    //arrange
    let value = 8;
    let value2 = 2;
    let linkedList = new LinkedList ();
    //act
    linkedList.insert(value);
    linkedList.insert(value2);
    //assert
    expect(linkedList.head.next.next).toBeNull();
    expect(linkedList.head.next.value).toBe (8);

    expect(linkedList.head.next).not.toBeNull();
    expect(linkedList.head.value).toBe (2);
  });

});



describe ('Linked Lists' , ()=>{

  it ('Will return true when finding a value within the linked list that exists and false if it did not',()=>{
    //arrange
    let existingValue = 6;
    let otherExistingValue = 5;
    let nonExistingValue = 3;
    let linkedList = new LinkedList ();
    //act
    linkedList.insert(existingValue);
    linkedList.insert(otherExistingValue);
    let result = linkedList.includes (existingValue);
    let otherResult = linkedList.includes(otherExistingValue);
    let falseResult = linkedList.includes(nonExistingValue);
    //assert
    expect(result).toEqual(true);
    expect(linkedList.head.value).toBe (otherExistingValue);
    expect(otherResult).toEqual(true);
    expect(linkedList.head.next.value).toBe (existingValue);
    expect(falseResult).toBeFalsy();
  });

});

describe ('Linked Lists' , ()=>{

  it ('Will return false when finding a value within the linked list that is empty',()=>{
    //arrange
    let nonExistingValue = 4;
    let linkedList = new LinkedList ();
    //act
    let falseResult = linkedList.includes(nonExistingValue);
    //assert
    expect(falseResult).toBeFalsy();
  });

});

describe ('Linked Lists' , ()=>{

  it ('should properly return a collection of all the values that exist in the linked list',()=>{
    //arrange
    let first = 2;
    let second = 3;
    let third =5;
    let linkedList = new LinkedList ();
    //act
    linkedList.insert(third);
    linkedList.insert(second);
    linkedList.insert(first);
    let result = linkedList.toString();
    //assert
    expect(result).toBe(`{ ${first} } -> { ${second} } -> { ${third} } -> NULL`);
  });

});

describe ('Linked Lists' , ()=>{

  it ('should properly return NULL linked list for using toString in an empty linked list',()=>{
    //arrange
    let linkedList = new LinkedList ();
    //act
    let falsy = linkedList.toString();
    //assert
    expect(falsy).toBe('NULL');
  });

});

describe ('Linked Lists' , ()=>{

  it ('should throw error',()=>{
    //arrange
    let linkedList = new LinkedList ();
    //act
    linkedList.insert();

    //assert
    expect(linkedList.head.value).toThrowError;

  });

});

describe ('Node' , ()=>{

  it ('should create a new node',()=>{
    //arrange
    let value = 1;
    //act
    let newNode = new Nodes (value);

    //assert
    expect(newNode.value).toBe (1);

  });

});
