'use strict';

let hashmap = require ('./repeatedWord.js');
const { expect } = require('@jest/globals');

describe('Repeated Words', () => {
  it ('should return the duplicated word in the string', ()=>{
    let str = 'Once upon a time, there was a brave princess who...';
    expect (hashmap (str)).toEqual (['a']);
  });

  it ('should return the duplicated word in the string', ()=>{
    let str = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';
    expect (hashmap (str)).toEqual (['it']);
  });

  it ('should return the duplicated word in the string', ()=>{
    let str = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';
    expect (hashmap (str)).toEqual (['summer']);
  });
  it ('should return please enter a string', ()=>{
    let str = 5;
    expect (hashmap (str)).toEqual ('please enter a string value');
  });

  it ('should return the duplicated word in the string', ()=>{
    let str = 'Once , there ';
    expect (hashmap (str)).toBeNull;
  });

});
