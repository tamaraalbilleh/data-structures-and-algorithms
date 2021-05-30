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
      this.top = this.top.next;
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
}
class PseudoQueue {
  constructor (){
    this.mainStack = new Stack ();
    this.temporaryStack = new Stack();
    this.length = 0;
  }

  enqueue (value) {
    this.mainStack.push (value);
  }

  dequeue (){

    if (!this.mainStack.top){
      throw new Error ('you cant dequeue from an empty queue');
    }else {
      while (this.mainStack.top ){
        this.temporaryStack.push(this.mainStack.pop());
      }
      let result = this.temporaryStack.pop();
      while (this.temporaryStack.top){
        this.mainStack.push (this.temporaryStack.pop());
      }
      return result;
    }

  }
}
module.exports = {
  Node : Node,
  Stack : Stack,
  PseudoQueue : PseudoQueue,
};
