class Node {
  constructor (value){
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor(){
    this.top = null;
    this.length = 0;
  }

  push (value){
    let newNode = new Node (value);
    newNode.next = this.top;
    this.top = newNode;
    this.length = this.length +1;
  }

  pop (){
    if (this.top){
      let popped = this.top;
      popped.next = null;
      this.length = this.length -1;
      return popped.value;
    }else {
      throw new Error ('This is an empty stack');
    }
  }

  peek (){
    if (this.top){
      let top = this.top.value;
      return top;
    }else {
      throw new Error ('This is an empty stack');
    }

  }

  isEmpty (){
    if (this.top){
      return false;
    }else {
      return true;
    }
  }
}


class Queue {
  constructor(){
    this.front = null;
    this.rear = null;
    this.length = 0;
  }

  enqueue (value){
    let newNode = new Node (value);
    this.length = this.length + 1 ;
    if (this.front){
      if (!this.rear){
        this.rear = newNode;
        this.front.next = this.rear;
      }else {
        this.rear.next = newNode;
        this.rear = newNode;
      }
    }else {
      this.front = newNode;
      this.rear = this.front.next;
    }
  }

  dequeue (){
    if (this.front){
      this.length = this.length -1;

      let current = this.front;
      this.front = this.front.next;
      current.next = null;
      return current.value;
    }else {
      throw new Error ('This is an empty queue');
    }
  }

  peek (){
    if (this.front){
      return this.front.value;
    }else {
      throw new Error ('This is an empty queue');
    }
  }
  isEmpty (){
    if (this.front){
      return true;
    }else{
      return false;
    }
  }
}

module.exports = {
  Node : Node,
  Stack : Stack,
  Queue : Queue
};
