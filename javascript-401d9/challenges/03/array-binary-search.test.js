'use strict';
const insertShiftArray = require('../03/array-binary-search.js');



describe('Testing challenge 03', () => {
  it ('should return the index of the search key in the sorted array or -1 if it did not exist', ()=>{
    // arrange
    let arr1 = [4, 8, 15, 16, 23, 42];
    let val1 =  15;

    let arr2 = [-131, -82, 0, 27, 42, 68, 179];
    let val2 = 42;

    let arr3 = [11, 22, 33, 44, 55, 66, 77];
    let val3 = 90;

    let arr4 = [1, 2, 3, 5, 6, 7];
    let val4 = 4;
    // act

    // assert
    expect(insertShiftArray(arr1 , val1)).toEqual(2);
    expect(insertShiftArray(arr2 , val2)).toEqual(4);
    expect(insertShiftArray(arr3 , val3)).toEqual(-1);
    expect(insertShiftArray(arr4 , val4)).toEqual(-1);

  });

});
