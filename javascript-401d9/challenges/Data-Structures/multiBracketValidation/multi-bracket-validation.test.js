'use strict';
const multiBracketValidation = require ('./multi-bracket-validation.js');
const { expect } = require('@jest/globals');

describe ('Happy paths' , ()=>{
  it ('should return true',()=>{
    expect (multiBracketValidation ('{}')).toBeTruthy();
  });

  it ('should return true',()=>{
    expect (multiBracketValidation('()[[Extra Characters]]')).toBeTruthy();
  });

  it ('should return true',()=>{
    expect (multiBracketValidation('(){}[[]]')).toBeTruthy();
  });

  it ('should return true',()=>{
    expect (multiBracketValidation('{}{Code}[Fellows](())')).toBeTruthy();
  });

  it ('should return true',()=>{
    expect (multiBracketValidation('{}(){}')).toBeTruthy();
  });
});

describe ('failure paths' , ()=>{
  it ('should return false',()=>{
    expect (multiBracketValidation ('[({}]')).toBeFalsy();
  });

  it ('should return false',()=>{
    expect (multiBracketValidation('(](')).toBeFalsy();
  });

  it ('should return false',()=>{
    expect (multiBracketValidation('{(})')).toBeFalsy();
  });

  it ('should return false',()=>{
    expect (multiBracketValidation('[}')).toBeFalsy();
  });

  it ('should return false',()=>{
    expect(multiBracketValidation('{')).toBeFalsy();
  });
});


