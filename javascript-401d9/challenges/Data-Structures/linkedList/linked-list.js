'use strict';
const Node = require ('./node.js');
class LinkedList {
  constructor (){
    this.head = null;
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
        newNodePointer.next = this.head; // get the new pointer and make it th head pointer;
        this.head = newNodePointer; // take the head and make it the next pointer
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

}

module.exports = LinkedList;