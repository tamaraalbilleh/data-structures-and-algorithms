'use strict';
const Node = require ('./node.js');
class LinkedList {
  constructor (){
    this.head = null;
    this.length = 0;
  }

  //   Define a method called insert which takes
  //   any value as an
  //   argument and adds
  //   a new node with
  //   that value to the
  //   head of the list
  //   with an O(1) Time
  //   performance.

  insert (value){

    try {

      let newNodePointer = new Node (value);
      if (!this.head){
        this.head = newNodePointer;
      }else {
        newNodePointer.next = this.head; // get the new pointer and make it the head pointer;
        this.head = newNodePointer; // take the head and make it the next pointer
        this.length = this.length +1;
      }

    } catch (error) {

      //   console.error ('Error in implementing the insert method =>' , error);
      return new Error;

    }

  }

  //   Define a method called includes which takes any value as an argument
  //   and returns a boolean
  //   result depending on whether
  //   that value exists as a Node’s
  //   value somewhere within the list.

  includes (value){

    try {

      if (!this.head){
        return false;
      } else {
        let pointer = this.head;
        while (pointer){
          if (pointer.value === value){
            return true;
          } else {
            pointer = pointer.next;
          }
        }
        return false;

      }

    } catch (error) {

      console.error ('Error in implementing the includes method =>' , error);

    }

  }

  //   Define a method called toString
  //   (or __str__ in Python) which takes in
  //   no arguments and
  //   returns a string representing
  //   all the values in the Linked List, formatted as:
  //   "{ a } -> { b } -> { c } -> NULL"

  toString () {
    try {

      let valArray = [];
      let pointer = this.head;
      if (!this.head){
        return 'NULL';
      } else {
        while (pointer){
          valArray.push (pointer.value);
          pointer = pointer.next;
        }
        let outputSting = '';
        valArray.forEach (item=>{
          outputSting = outputSting + `{ ${item} } -> `;
        });
        return outputSting + 'NULL';
      }

    } catch (error) {

      console.error ('Error in implementing the toString method =>' , error);

    }

  }
  append(value) {
    try {
      let node = new Node(value);
      if (!this.head) {
        this.head = node;
        this.length++;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = node;
        this.length++;
      }
    } catch (error) {
      console.log(`Something went error`, error);
    }

  }

  insertBefore(value, newVal){
    try {
      let current = this.head;
      let newNode = new Node (newVal);
      if (this.head.value === value){
        newNode.next = this.head;
        this.head = newNode;
        this.length =this.length +1;

      }else {
        while (current){ // current is pointing on a node not a null
          if (current.next.value === value){
            newNode.next = current.next;
            current.next = newNode;
            this.length =this.length +1;
            return;
          }else {
            current = current.next;
          }
        }
        // throw new Error ('Error in implementing the insertBefore method'); // the exception

      }
    } catch (error) {
      console.error ('Error in implementing the insertBefore method'); // the exception
      // throw new Error ('Error in implementing the insertBefore method'); // the exception

    }
  }

  insertAfter(value, newVal){
    try {
      let newNode = new Node (newVal);
      let current = this.head;
      while (current){
        if (current.value === value){
          newNode.next = current.next;
          current.next = newNode;
          this.length =this.length+1;
          return;
        }else {
          current = current.next;
        }
      }
      // throw new Error ('Error in implementing the insertAfter method'); // the exception

    } catch (error) {
      console.error ('Error in implementing the insertAfter method'); // the exception
      // console.error ('Error in implementing the insertAfter method'); // the exception


    }
  }
  kthFromEnd(k) {
    try {
      let current = this.head;
      let position =this.length;
      while(current){
        if( position === k){
          return current.value;
        }
        else{
          current = current.next;
          position = position -1;
        }
      }

    } catch (error) {
      throw new Error ('Error in implementing the kthFromEnd method', error);
    }
  }

}

module.exports = LinkedList ;
