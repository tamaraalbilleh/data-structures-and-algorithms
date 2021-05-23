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
// ---------------------------- code challenge 06 ------------------------//
describe ('Linked Lists' , ()=>{

  it ('should append a single new node to the end of the linked list',()=>{

    //arrange
    let linkedList = new LinkedList ();
    linkedList.insert (1);
    linkedList.insert (2);

    //act
    linkedList.append (3);


    //assert
    expect(linkedList.head.value).toBe (2);
    expect (linkedList.head.next).not.toBeNull ();
    expect (linkedList.head.next.value).toBe (1);
    expect (linkedList.head.next.next).not.toBeNull ();
    expect (linkedList.head.next.next.value).toBe (3);
    expect (linkedList.head.next.next.next).toBeNull ();

  });

});

describe ('Linked Lists' , ()=>{

  it ('should append a new node before of the provided value in the linked list',()=>{

    //arrange
    let linkedList = new LinkedList ();

    linkedList.insert (2);
    linkedList.insert (3);
    let newValue = 5;
    let before = 2;

    //act
    linkedList.insertBefore(before, newValue);
    console.log (linkedList.head.next.next);

    //assert
    expect(linkedList.head.value).toBe (3);
    expect (linkedList.head.next).not.toBeNull ();
    expect(linkedList.head.next.value).toBe (5);
    expect (linkedList.head.next).not.toBeNull ();
    expect(linkedList.head.next.next.value).toBe (2);
    expect (linkedList.head.next.next.next).toBeNull ();

  });

  it ('should insert a new node before head node', ()=>{

    //arrange
    let linkedList = new LinkedList ();
    linkedList.insert (2);
    linkedList.insert (3);
    let newValue = 5;
    let before = 3;

    // act
    linkedList.insertBefore(before, newValue);

    //assert
    expect(linkedList.head.value).toBe (5);
    expect (linkedList.head.next).not.toBeNull ();
    expect(linkedList.head.next.value).toBe (3);
    expect (linkedList.head.next).not.toBeNull ();
    expect(linkedList.head.next.next.value).toBe (2);
    expect (linkedList.head.next.next.next).toBeNull ();
  });

});

describe ('Linked Lists' , ()=>{

  it ('should throw an error while trying to insert a value before a non existent value',()=>{

    //arrange
    let linkedList = new LinkedList ();
    linkedList.insert (1);
    linkedList.insert (2);
    let newValue = 5;
    let before = 3;

    //act

    //assert
    expect (linkedList.insertBefore(before, newValue)).toThrowError;


  });

});


describe ('Linked Lists' , ()=>{

  it ('should insert a new node after of the provided value in the linked list',()=>{

    //arrange
    let linkedList = new LinkedList ();
    linkedList.insert (1);
    linkedList.insert (2);
    linkedList.insert (3);
    let newValue = 5;
    let after = 2;

    //act
    linkedList.insertAfter(after, newValue);

    //assert
    expect(linkedList.head.value).toBe (3);
    expect (linkedList.head.next).not.toBeNull ();

    expect(linkedList.head.next.value).toBe (2);
    expect (linkedList.head.next).not.toBeNull ();

    expect(linkedList.head.next.next.value).toBe (5);
    expect (linkedList.head.next.next).not.toBeNull ();

    expect(linkedList.head.next.next.next.value).toBe (1);
    expect (linkedList.head.next.next.next.next).toBeNull ();

  });

  it ('should insert a new single node after last node', ()=>{

    //arrange
    let linkedList = new LinkedList ();
    linkedList.insert (2);
    linkedList.insert (3);
    linkedList.insert (4);
    let newValue = 5;
    let after = 2;

    // act
    linkedList.insertAfter(after, newValue);

    //assert
    expect(linkedList.head.value).toBe (4);
    expect (linkedList.head.next).not.toBeNull ();

    expect(linkedList.head.next.value).toBe (3);
    expect (linkedList.head.next.next).not.toBeNull ();

    expect(linkedList.head.next.next.value).toBe (2);
    expect (linkedList.head.next.next.next).not.toBeNull ();

    expect(linkedList.head.next.next.next.value).toBe (5);
    expect (linkedList.head.next.next.next.next).toBeNull ();

  });
});

describe ('Linked Lists' , ()=>{

  it ('should throw an error while trying to insert a value before a non existent value  in the linked list',()=>{

    //arrange
    let linkedList = new LinkedList ();
    linkedList.insert (1);
    linkedList.insert (2);
    let newValue = 5;
    let before = 3;

    //act

    //assert
    expect (linkedList.insertBefore(before, newValue)).toThrowError;

  });

});

describe ('Linked Lists' , ()=>{

  it ('should insert multiple nodes after the last node ',()=>{

    //arrange
    let linkedList = new LinkedList ();
    linkedList.insert (1);
    let newValue = 5;
    let after = 1;
    let otherValue = 7;
    let secondAfter = 5;

    //act
    linkedList.insertAfter(after, newValue);
    linkedList.insertAfter(secondAfter, otherValue);

    //assert
    expect (linkedList.head.value).toBe(1);
    expect (linkedList.head.next.value).toBe(5);
    expect (linkedList.head.next.next.value).toBe (7);

  });

});
