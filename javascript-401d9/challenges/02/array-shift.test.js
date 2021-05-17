'use strict';
const insertShiftArray = require('../02/array-shift.js');



describe('Testing challenge 02', () => {
  it ('should return an array with the value inserted as middle index', ()=>{
    // arrange
    let value = 5;
    let value2 = 16;
    let value3 = 25;
    let array = [2,4,6,-8];
    let array2 = [42,8,15,23,42];
    let array3 = [];
    // act

    // assert
    expect(insertShiftArray (array , value)).toEqual([2,4,5,6,-8]);
    expect(insertShiftArray(array2 , value2)).toEqual([42,8,15,16,23,42]);
    expect(insertShiftArray(array3 , value3)).toEqual([25]);
  });

});

