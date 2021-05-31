'use strict';
const {Queue} = require ('../stacksAndQueues /stacks-and-queues');

class AnimalShelter {
  constructor (){
    this.cat = new Queue ();
    this.dog = new Queue ();
  }

  enqueue(animal) {
    if (animal){
      if (animal.type.toLowerCase() === 'cat'){
        this.cat.enqueue (animal);
      }else if (animal.type.toLowerCase() === 'dog'){
        this.dog.enqueue (animal);
      }else {
        return 'sorry , this shelter only takes dogs or cats' ;
      }
    }else {
      throw new Error('please enter the type');
    }
  }

  dequeue(pref) {
    if(pref){
      if (pref === 'dog'){
        let result = this.dog.dequeue();
        return result;
      }else if (pref === 'cat'){
        let result = this.cat.dequeue ();
        return result;
      }else {
        return null;
      }
    }else {
      return null;
    }
  }

}
module.exports = AnimalShelter;
