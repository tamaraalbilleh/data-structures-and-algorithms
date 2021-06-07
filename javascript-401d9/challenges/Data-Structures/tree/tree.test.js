'use strict';
const Node = require ('./tree.js').Node;
const BinaryTree = require ('./tree.js').BinaryTree;
const BinarySearchTree = require ('./tree.js').BinarySearchTree;
const {expect} = require ('@jest/globals');

describe ('Nodes', ()=>{
  it ('should create a new node' , ()=>{
    // arrange
    let value = 2;
    // act
    let node = new Node(value);
    // assert
    expect (node.value).toBe(2);
    expect (node.right).toBeNull;
    expect (node.left).toBeNull;
  });

});

// instantiate an empty tree
describe ('Empty Binary Tree', ()=>{
  it ('should instantiate an empty tree' , ()=>{
    // arrange and act
    let tree = new BinaryTree ();
    // assert
    expect (tree.root).toBeNull;
  });

});

// instantiate a tree with a single root node
describe ('A single root node Binary Tree', ()=>{
  it ('should instantiate a tree with a single root node' , ()=>{
    // arrange
    let node = new Node (1);
    let tree = new BinaryTree ();
    // act
    tree.root = node;
    // assert
    expect (tree.root.value).toBe(1);
    expect (tree.root.right).toBeNull;
    expect (tree.root.left).toBeNull;
  });

});

// add a left child and right child to a single root node
describe ('A single root node Binary Tree with child nodes', ()=>{
  it ('should add a left and a right node to a single root node binary tree' , ()=>{
    // arrange
    let node = new Node (1);
    let tree = new BinaryTree ();
    // act
    tree.root = node;
    // assert
    expect (tree.root.value).toBe(1);
    expect (tree.root.right).toBeNull;
    expect (tree.root.left).toBeNull;
  });

});

// traverse onto an empty tree
describe ('Traversing into an empty Binary Tree', ()=>{
  it ('traverse onto an empty tree pre order' , ()=>{
    // arrange and act
    let tree = new BinaryTree ();
    // assert
    expect (tree.preOrder).toThrowError();
  });

  it ('traverse onto an empty tree in order' , ()=>{
    // arrange and act
    let tree = new BinaryTree ();
    // assert
    expect (tree.inOrder).toThrowError();
  });

  it ('traverse onto an empty tree post order' , ()=>{
    // arrange and act
    let tree = new BinaryTree ();
    // assert
    expect (tree.postOrder).toThrowError();
  });

});

describe ('Binary Trees' , ()=>{
  let tree;
  beforeAll (()=>{
    // making the nodes and the tree //
    tree = new BinaryTree;
    let node1 = new Node (25);
    let node2 = new Node (20);
    let node3 = new Node (36);
    let node4 = new Node (10);
    let node5 = new Node (22);
    let node6 = new Node (30);
    let node7 = new Node (40);
    let node8 = new Node (5);
    let node9 = new Node (12);
    let node10 = new Node (28);
    let node11 = new Node (38);
    let node12 = new Node (48);
    let node13 = new Node (1);
    let node14 = new Node (8);
    let node15 = new Node (15);
    let node16 = new Node (45);
    let node17 = new Node (50);

    // connecting it //
    tree.root = node1;
    node1.left = node2;
    node1.right = node3;

    node2.left = node4;
    node2.right = node5;

    node4.left =node8;
    node4.right = node9;

    node9.right = node15;

    node8.left =node13;
    node8.right = node14;

    node3.left =node6;
    node3.right = node7;

    node6.left = node10;

    node7.left =node11;
    node7.right = node12;

    node12.left = node16;
    node12.right = node17;
  });

  // root >> left >> right
  // preOrder
  it ('should return the pre order of a binary tree' , ()=>{
    // arrange
    let expected = [25, 20, 10, 5, 1,8,12,15,22,36,30,28,40,38,48,45,50];
    // act
    let preOrderResult = tree.preOrder();
    // assert
    expect (preOrderResult).toEqual (expected);
  });

  // left >> root >> right
  // inOrder
  it ('should return the in order of a binary tree' , ()=>{
    // arrange
    let expected = [1,5,8,10,12,15,20,22,25,28,30,36,38,40,45,48,50];
    // act
    let inOrderResult = tree.inOrder();
    // assert
    expect (inOrderResult).toEqual (expected);
  });

  // left >> right >> root
  // postOrder
  it ('should return the post order of a binary tree' , ()=>{
    // arrange
    let expected = [1,8,5,15,12,10,22,20,28,30,38,45,50,48,40,36,25];
    // act
    let postOrderResult = tree.postOrder();
    // assert
    expect (postOrderResult).toEqual (expected);
  });
});

describe ('binary search tree' ,()=>{

  let tree;
  beforeAll (()=>{
    tree = new BinarySearchTree ();
    tree.add (8);
    tree.add (3);
    tree.add (10);
    tree.add (1);
    tree.add (6);
    tree.add (14);
    tree.add (4);
    tree.add (7);
    tree.add (13);
  });

  it ('should add to the binary search tree' , ()=>{
    expect (tree.root.value).toBe(8);
    expect (tree.root.left.value).toBe(3);
    expect (tree.root.left.left.value).toBe(1);
    expect (tree.root.left.right.value).toBe(6);
    expect (tree.root.left.right.left.value).toBe(4);
    expect (tree.root.left.right.right.value).toBe(7);

    expect (tree.root.right.value).toBe (10);
    expect (tree.root.right.right.value).toBe (14);
    expect (tree.root.right.right.left.value).toBe (13);
  });
});

describe ('Binary search Tree', ()=>{
  let tree;
  beforeAll (()=>{
    tree = new BinarySearchTree ();
    tree.add (8);
    tree.add (3);
    tree.add (10);
    tree.add (1);
    tree.add (6);
    tree.add (14);
    tree.add (4);
    tree.add (7);
    tree.add (13);
  });
  it ('should find out if a value exists in a binary search tree', ()=>{
    expect (tree.contains(10)).toBeTruthy;
    expect (tree.contains(5)).toBeFalsy;
  });
});

describe ('Binary Tree Max Value', ()=>{
  let tree;
  beforeAll (()=>{
    // making the nodes and the tree //
    tree = new BinaryTree;
    let node1 = new Node (25);
    let node2 = new Node (20);
    let node3 = new Node (36);
    let node4 = new Node (10);
    let node5 = new Node (22);
    let node6 = new Node (30);
    let node17 = new Node (50);
    let node7 = new Node (40);
    let node8 = new Node (5);
    let node9 = new Node (12);
    let node10 = new Node (28);
    let node11 = new Node (38);
    let node12 = new Node (48);
    let node13 = new Node (1);
    let node14 = new Node (8);
    let node15 = new Node (15);
    let node16 = new Node (45);

    // connecting it //
    tree.root = node1;
    node1.left = node2;
    node1.right = node3;

    node2.left = node4;
    node2.right = node5;

    node4.left =node8;
    node4.right = node9;

    node9.right = node15;

    node8.left =node13;
    node8.right = node14;

    node3.left =node6;
    node3.right = node7;

    node6.left = node10;

    node7.left =node11;
    node7.right = node12;

    node12.left = node16;
    node12.right = node17;
  });
  it ('Happy Path : should return the maximum value in a binary tree' , ()=>{
    expect (tree.findMaximumValue()).toBe(50);
  });
});

describe ('expected failure : Binary Tree Max Value' ,()=>{
  it ('should return an error',()=>{
    let tree = new BinaryTree ();
    expect (tree.findMaximumValue).toThrowError;
  });
});

describe ('Edge cases : Binary Tree Max Value' , ()=>{
  it ('should ' ,()=>{
    let tree = new BinarySearchTree ();
    expect (tree.findMaximumValue).toThrowError;
  });
});

describe ('Binary Trees breadth first' , ()=>{
  let tree;
  beforeAll (()=>{
    // making the nodes and the tree //
    tree = new BinaryTree;
    let node1 = new Node (2);
    let node2 = new Node (7);
    let node3 = new Node (5);
    let node4 = new Node (2);
    let node5 = new Node (6);
    let node6 = new Node (9);
    let node7 = new Node (5);
    let node8 = new Node (11);
    let node9 = new Node (4);


    // connecting it //
    tree.root= node1;
    node1.left= node2;
    node1.right= node3;

    node2.left = node4;
    node2.right = node5;

    node5.left = node7;
    node5.right =node8;

    node3.right = node6;

    node6.left = node9;

  });

  // root >> left >> right
  // preOrder
  it ('should return the breadth first of a binary tree' , ()=>{
    // arrange
    let expected = [2,7,5,2,6,9,5,11,4];
    // act
    let breadthFirstResult = tree.breadthFirst();
    // assert
    expect (breadthFirstResult).toEqual (expected);
  });
  it ('Edge cases : should throw an error when applied on an empty tree', ()=>{
    let empty = new BinaryTree ();
    expect (empty.breadthFirst).toThrowError;
  });
  it ('Expected Failure : should throw an error when applied on a non binary tree data structure', ()=>{
    let empty = new BinarySearchTree();
    expect (empty.breadthFirst).toThrowError;
  });
});


