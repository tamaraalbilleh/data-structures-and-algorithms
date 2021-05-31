'use strict';
const AnimalShelter = require ('./fifo-animal-shelter');
const { expect } = require('@jest/globals');

describe ('Animal Shelter for cats and dogs' , ()=>{
  it ('Happy Path : enqueue into the shelter' , ()=>{
    //arrange
    let pet = { name : 'tama' , type : 'cat'};
    let petsShelter = new AnimalShelter ();
    //act
    petsShelter.enqueue(pet);
    //assert
    expect (petsShelter.cat.front.value.name).toBe ('tama');
    expect (petsShelter.dog.front).toBeNull;
  });
  it ('Happy Path : enqueue multiple animals into the shelter' , ()=>{
    //arrange
    let pet = { name : 'tama' , type : 'cat'};
    let pet2 = { name : 'zui' , type : 'dog'};
    let pet3 = { name : 'gumball' , type : 'cat'};
    let petsShelter = new AnimalShelter ();
    //act
    petsShelter.enqueue(pet);
    petsShelter.enqueue(pet2);
    petsShelter.enqueue(pet3);
    //assert
    expect(petsShelter.cat.front.value.name).toBe ('tama');
    expect(petsShelter.dog.front).toBeTruthy();
  });
  it ('EdgeCases Path : enqueue without a value' , ()=>{
    //arrange
    let petsShelter = new AnimalShelter ();
    //act
    //assert
    expect( petsShelter.enqueue).toThrowError;
  });

  it ('Failure Path : enqueue an animal other then a dog or cat' , ()=>{
    //arrange
    let pet = { name : 'snowball' , type : 'bunny'};
    let petsShelter = new AnimalShelter ();
    //act
    let test = petsShelter.enqueue(pet);
    //assert
    expect(test).toBe ('sorry , this shelter only takes dogs or cats');
  });

  //// dequeue ////
  it ('Happy Path : dequeue a dog from the shelter' , ()=>{
    //arrange
    let pref = 'dog';
    let petsShelter = new AnimalShelter ();
    let pet = { name : 'tama' , type : 'cat'};
    let pet2 = { name : 'zui' , type : 'dog'};
    let pet3 = { name : 'gumball' , type : 'cat'};
    petsShelter.enqueue(pet);
    petsShelter.enqueue(pet2);
    petsShelter.enqueue(pet3);
    //act
    let result = petsShelter.dequeue(pref);
    //assert
    expect (result.type).toBe ('dog');
  });
  it ('Happy Path : dequeue a cat from the shelter' , ()=>{
    //arrange
    let pref = 'cat';
    let petsShelter = new AnimalShelter ();
    let pet = { name : 'tama' , type : 'cat'};
    let pet2 = { name : 'zui' , type : 'dog'};
    let pet3 = { name : 'gumball' , type : 'cat'};
    petsShelter.enqueue(pet);
    petsShelter.enqueue(pet2);
    petsShelter.enqueue(pet3);
    //act
    let result = petsShelter.dequeue(pref);
    //assert
    expect (result.type).toBe ('cat');
  });
  it ('EdgeCases Path : dequeue without a value' , ()=>{
    //arrange
    let petsShelter = new AnimalShelter ();
    //act
    let result = petsShelter.dequeue();
    //assert
    expect( result).toBeNull;
  });

  it ('Failure Path : dequeue an animal other then a dog or cat' , ()=>{
    //arrange
    let pref =  'bunny';
    let petsShelter = new AnimalShelter ();
    //act
    let result = petsShelter.dequeue(pref);
    //assert
    expect(result).toBeNull;
  });
});
