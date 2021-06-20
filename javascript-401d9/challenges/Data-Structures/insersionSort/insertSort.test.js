'use strict';
const insertionSort = require ('./insertSort.js');

describe ('Insertion Sort' ,()=>{
  it ('should sort a given array', ()=>{
    expect (insertionSort([8,4,23,42,16,15])).toEqual([ 4, 8, 15, 16, 23, 42 ]);
    expect (insertionSort([20,18,12,8,5,-2])).toEqual([ -2, 5, 8, 12, 18, 20 ]);
    expect (insertionSort([5,12,7,5,5,7])).toEqual([ 5, 5, 5, 7, 7, 12 ]);
    expect (insertionSort([2,3,5,7,13,11])).toEqual([ 2, 3, 5, 7, 11, 13 ]);

  });
  it ('edge cases', ()=>{
    expect (insertionSort([])).toEqual([]);
    expect (insertionSort(['a',18,'12',8,'5',-2])).toThrowError;
    expect (insertionSort(5)).toThrowError;


  });
});
