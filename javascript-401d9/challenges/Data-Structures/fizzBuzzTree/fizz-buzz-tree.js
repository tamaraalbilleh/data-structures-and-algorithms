'use strict';
const Queue = require ('../stacksAndQueues /stacks-and-queues.js').Queue;

class Node{
  constructor( value , k ){
    this.value = value;
    this.children = new Array ( k );
  }
}

class Kary{
  constructor( root = null , k ){
    this.root = root;
    this.k = k;
  }

  breadthFirst(){
    let result = [];
    let queue = new Queue();
    let current;
    if (this.root) {
      current = this.root;
      queue.enqueue(current);
    } else throw new Error ('this tree has no root node');

    while (queue.front) {
      current = queue.dequeue();
      result.push(current.value);
      for (let i = 0; i < current.children.length; i++)
        if (current.children[i]) {
          queue.enqueue(current.children[i]);
        }
    }
    return result;

  }


}


function fizzBuzzTree(tree){
  if(!tree.root){
    return ('this tree has no root node');
  }

  let newTree = tree;
  let traverse = (node)=> {
    if ( node.value % 3 === 0 && node.value % 5 === 0) {
      node.value = 'FizzBuzz';
    }
    if (node.value % 5 === 0) {
      node.value = 'Buzz';
    }
    else if (node.value % 3 === 0) {
      node.value = 'Fizz';
    }
    else node.value= `${node.value}`;
    for (let i = 0; i < node.children.length; i++) {
      traverse(node.children[i]);
    }
  };
  if (tree.root){
    traverse(newTree.root);
    return newTree;
  }
}



module.exports={ Node, Kary, fizzBuzzTree };
