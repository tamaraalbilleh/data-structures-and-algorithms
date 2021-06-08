'use strict';
const Node = require ('./fizz-buzz-tree.js').Node;
const Kary = require ('./fizz-buzz-tree.js').Kary;
const fizzBuzzTree = require ('./fizz-buzz-tree.js').fizzBuzzTree;

describe('K-ary Tree',()=>{
  it('should return a FizzBuzzTree',()=>{
    let tree = new Kary();

    let root =tree.root = new Node(1,3);

    let first = root.children[0]=new Node(2,3);
    let second = root.children[1]= new Node(3,1);
    let third = root.children[2]=new Node(4,3);

    first.children[0]=new Node(5,0);
    first.children[1]=new Node(6,0);
    first.children[2]=new Node(7,0);

    second.children[0]=new Node(8,0);

    third.children[0]=new Node(9,0);
    third.children[1]=new Node(10,0);
    third.children[2]=new Node(15,0);

    let result = tree.breadthFirst();
    expect(result).toEqual([1,2,3,4,5,6,7,8,9,10,15]);

    let result2 = fizzBuzzTree(tree).breadthFirst();
    expect(result2).toEqual(['1','2','Fizz','4','Buzz','Fizz','7','8','Fizz','Buzz','FizzBuzz']);
  });

  it('should return error when trying to return breadth first of an empty tree',()=>{
    let tree = new Kary();
    expect(tree.breadthFirst).toThrowError;
  });

  it('should return tree has no root when trying to invoke fizzbuzz on an empty tree',()=>{
    let tree = new Kary();
    let result = fizzBuzzTree (tree);
    expect(result).toBe('this tree has no root node');
  });
});
