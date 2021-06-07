'use strict';

const Queue = require ('../stacksAndQueues /stacks-and-queues.js').Queue;
/// node class ///
class Node {
  constructor (value ){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor (root = null){
    this.root = root;
  }

  // root >> left >> right
  preOrder(){
    let array = [];
    function traverse (node){
      array.push (node.value);
      if (node.left){
        traverse (node.left);
      }
      if (node.right){
        traverse (node.right);
      }
    }
    if (this.root){
      traverse (this.root);
      return array;
    }else {
      throw new Error ('this tree has no root node');
    }

  }

  // left >> root >> right
  inOrder (){
    let array = [];
    function traverse (node){
      if (node.left){
        traverse (node.left);
      }
      array.push (node.value);
      if (node.right){
        traverse (node.right);
      }
    }
    if (this.root){
      traverse (this.root);
      return array;
    }else {
      throw new Error ('this tree has no root node');
    }
  }

  // left >> right >> root
  postOrder (){
    let array =[];
    function traverse (node){
      if (node.left){
        traverse (node.left);
      }
      if (node.right){
        traverse (node.right);
      }
      array.push (node.value);
    }
    if (this.root){
      traverse (this.root);
      return array;
    }else {
      throw new Error ('this tree has no root node');
    }
  }
  findMaximumValue (){
    let result = this.root.value;
    function traverse (node){
      if (node.left){
        traverse (node.left);
      }
      if (node.value > result){
        result = node.value;
      }
      if (node.right){
        traverse (node.right);
      }
    }
    if (this.root){
      traverse (this.root);
      return result;
    }else {
      throw new Error('this tree has no root node');
    }
  }

  breadthFirst() {
    if (!this.root){
      throw new Error('this tree has no root node');
    }
    let result = [];
    let queue = new Queue ();
    queue.enqueue (this.root);

    while (queue.front){
      let current = queue.dequeue ();
      result.push(current.value);
      if (current.left){
        queue.enqueue (current.left);
      }
      if (current.right){
        queue.enqueue (current.right);
      }

    }
    return result;

  }

}

class BinarySearchTree {
  constructor (root = null){
    this.root = root;
  }
  add(value) {
    if (!(typeof(value) === 'number')) {
      throw new Error ('you can only add numerical values');
    }
    let node = new Node(value);
    if (!this.root) {
      this.root = node;
    }
    let current = this.root;
    while (current) {
      if (node.value === current.value) return 'you cant add a node with a value that already exists';
      if (node.value < current.value) {
        if (current.left === null) {
          current.left = node;
        } else {
          current = current.left;
        }
      }
      if (node.value > current.value) {
        if (current.right === null) {
          current.right = node;
        } else {
          current = current.right;
        }
      }
    }
  }

  contains (value){
    let boolean = false;
    function traverse (node){
      if (node.value === value){
        boolean = true;
      }
      if (node.left){
        traverse (node.left);
      }
      if (node.right){
        traverse (node.right);
      }
    }
    if (this.root){
      traverse (this.root);
      return boolean;
    }else {
      throw new Error ('this tree has no root node');
    }
  }

}


module.exports = {
  Node : Node,
  BinaryTree : BinaryTree,
  BinarySearchTree : BinarySearchTree ,
};
