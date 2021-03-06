'use strict';

/* ------------------------------------------------------------------------------------------------

CHALLENGE 1 - Review

Use the characters data below for all of the challenges except challenge 2 and 3.

Write a function named sortByChildren that sorts the characters below by the number of children in each house (fewest to most). If a house has the same number of children, sort alphabetically by house name.

------------------------------------------------------------------------------------------------ */
let characters = [
  {
    name: 'Eddard',
    spouse: 'Catelyn',
    children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
    house: 'Stark'
  },
  {
    name: 'Jon A.',
    spouse: 'Lysa',
    children: ['Robin'],
    house: 'Arryn'
  },
  {
    name: 'Cersei',
    spouse: 'Robert',
    children: ['Joffrey', 'Myrcella', 'Tommen'],
    house: 'Lannister'
  },
  {
    name: 'Daenarys',
    spouse: 'Khal Drogo',
    children: ['Drogon', 'Rhaegal', 'Viserion'],
    house: 'Targaryen'
  },
  {
    name: 'Mace',
    spouse: 'Alerie',
    children: ['Margaery', 'Loras'],
    house: 'Tyrell'
  },
  {
    name: 'Euron',
    spouse: null,
    children: [],
    house: 'Greyjoy'
  },
  {
    name: 'Jon S.',
    spouse: null,
    children: [],
    house: 'Snow'
  }
];

const sortByChildren = (charArray) => {
  // Solution code here...
  charArray.sort((a,b)=>{
    if (a.children.length < b.children.length){
      return -1;
    } else if (a.children.length > b.children.length){
      return 1;
    }else if (a.children.length === b.children.length){
      if (a.house.toLowerCase () < b.house.toLowerCase ()){
        return -1;
      }else if (a.house.toLowerCase () > b.house.toLowerCase ()){
        return 1;
      }else if (a.house.toLowerCase () === b.house.toLowerCase ()){
        return 0;
      }
    }});
  return charArray;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named getCourseKeys that takes in the courseInfo object and returns an array containing the keys for the courseInfo object.

For example: (['name', 'duration', 'topics', 'finalExam']).
------------------------------------------------------------------------------------------------ */
const courseInfo = { name: 'Code 301', duration: { dayTrack: '4 weeks', eveningTrack: '8 weeks'},
  topics: ['SMACSS', 'APIs', 'NodeJS', 'SQL', 'jQuery', 'functional programming'],
  finalExam: true
};

const getCourseKeys = (obj) => {
  // Solution code here...
  let array = Object.keys (obj);
  return array;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named checkValues that takes in an object and a value and returns true if the value is in the object.


------------------------------------------------------------------------------------------------ */

const checkValues = (obj, value) => {
  // Solution code here...
  let array = Object.values (obj);
  if (array.includes (value)){
    return true;
  }else {
    return false;
  }
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

You are given an object with names and their coresponding phone numbers that looks like this:
{
  'Grace Hopper': '222-303-5938',
  'Ada Lovelace': '222-349-9842',
  'Alan Turing': '222-853-5933'
}

HR has asked you to change the data to make it easier to print so that it looks like this:
[
  'Grace Hopper: 222-303-5938',
  'Ada Lovelace: 222-349-9842',
  'Alan Turing: 222-853-5933'
]

------------------------------------------------------------------------------------------------ */

const updateNumbers = (obj) => {
  // Solution code here...
  let array = Object.entries (obj);
  let newArr = [];
  array.forEach(item => {
    let arr2 = item.join(': ');
    newArr.push (arr2);
  });
  return newArr;
};



/* ------------------------------------------------------------------------------------------------
CHALLENGE 5

Write a function named getHouses that returns a new array containing the names of all of the houses in the data set.
------------------------------------------------------------------------------------------------ */

const getHouses = (arr) => {
  let houses = [];
  // Solution code here...
  arr.forEach(item => {
    houses.push(item.house);
  });
  return houses;
};

/*------------------------------------------------------------------------------------------------
CHALLENGE 6

Write a function named hasChildrenValues that uses Object.values to determine if any given character in the data set has children.

This function should take in an array of data and a character name and return a Boolean.

For example:
hasChildrenValues(characters, 'Cersei') will return true
hasChildrenValues(characters, 'Sansa') will return false
------------------------------------------------------------------------------------------------ */

const hasChildrenValues = (arr, character) => {
  // Solution code here...
  let objectArray =Object.values(arr);
  let nameArray = [];
  objectArray.forEach (item=>{
    nameArray.push (item.name);
  });
  if (nameArray.includes (character)){
    return true;
  }else {
    return false;
  }
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 7 - Stretch Goal

Write a function named hasChildrenEntries that is similar to your hasChildrenValues function from challenge 4, but uses the data's entries instead of its values.

The input and output of this function are the same as the input and output from challenge 3.
------------------------------------------------------------------------------------------------ */

const hasChildrenEntries = (arr, character) => {
  // Solution code here...
  let val = false ;
  arr.forEach(item => {
    if (item.name === character){
      let arr2 = Object.entries(item);
      let arr22 = arr2[2];
      if (arr22[1].length === 0){
        val= false;
      }else {
        val= true;
      }
    }
  });
  return val;
};
/* ------------------------------------------------------------------------------------------------
CHALLENGE 8 - Stretch Goal

Write a function named totalCharacters that takes in an array and returns the number of characters in the array.
------------------------------------------------------------------------------------------------ */

const totalCharacters = (arr) => {
  // Solution code here...
  let num = 0;
  num = num +arr.length;
  arr.forEach(item=>{
    let arr2 = Object.values (item);
    if (arr2[1] !== null){
      num++;
    }
    let ch = arr2[2];
    if(ch.length !== 0){
      num = num + ch.length;
    }
  });
  return num;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 9 - Stretch Goal

Write a function named houseSize that takes in the array of characters and creates an object for each house containing the name of the house and the number of members.

All of these objects should be added to an array named "sizes". Return the "sizes" array from the function.

For example: [{ house: 'Stark', members: 7 }, { house: 'Arryn', members: 3 }, ... ].
------------------------------------------------------------------------------------------------ */

const houseSize = (arr) => {
  const sizes = [];
  // Solution code here...
  arr.forEach (item=>{
    let num = 1;
    let arr2 = Object.entries(item);
    let house = arr2[3];
    let spouse = arr2[1];
    let children = arr2[2];
    let ob = {'house' : house[1]};
    if (spouse[1] !== null){
      num++;
    }
    if (children[1].length !== 0){
      num = num + children[1].length;
    }
    ob.members = num;
    sizes.push (ob);
  });
  return sizes;
};


/* ------------------------------------------------------------------------------------------------
CHALLENGE 10 - Stretch Goal

As fans are well aware, "When you play the game of thrones, you win or you die. There is no middle ground."

We will assume that Alerie Tyrell is deceased. She missed her daughter's wedding. Twice.

Write a function named houseSurvivors. You may modify your houseSize function from challenge 6 to use as the basis of this function.

This function should create an object for each house containing the name of the house and the number of members. If the spouse is deceased, do not include him/her in the total number of family members.

All of these objects should be added to an array named "survivors". Return the "survivors" array from the function.

For example: [ { house: 'Stark', members: 6 }, { house: 'Arryn', members: 2 }, ... ].
------------------------------------------------------------------------------------------------ */

const deceasedSpouses = ['Catelyn', 'Lysa', 'Robert', 'Khal Drogo', 'Alerie'];

const houseSurvivors = (arr) => {
  const survivors = [];
  // Solution code here...
  arr.forEach (item=>{
    let num = 1;
    let arr2 = Object.entries(item);
    let house = arr2[3];
    let spouse = arr2[1];
    let children = arr2[2];
    let ob = {'house' : house[1]};
    if (spouse[1] !== null){
      if ( ! deceasedSpouses.includes (spouse[1])){
        num = num +1;
      }
    }
    if (children[1].length !== 0){
      num = num + children[1].length;
    }
    ob.members = num;
    survivors.push (ob);
  });
  return survivors;
};


/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenges-06.test.js

------------------------------------------------------------------------------------------------ */

describe('Testing challenge 1', () => {
  test('It should sort the characters by number of children', () => {
    expect(sortByChildren(characters)[0].name).toStrictEqual('Euron');
    expect(sortByChildren(characters)[0].children.length).toStrictEqual(0);
  });
});

describe('Testing challenge 2', () => {
  test('It should return the keys from an object', () => {
    expect(getCourseKeys(courseInfo)).toStrictEqual(['name', 'duration', 'topics', 'finalExam']);
  });
});

describe('Testing challenge 3', () => {
  test('It should return true if the value is in the object', () => {
    expect(checkValues({ class: '301' }, '301')).toBe(true);
  });

  test('It should return false if the value is not in the object', () => {
    expect(checkValues({ class: '301' }, '401')).toBe(false);
  });
});

describe('Testing challenge 4', () => {
  test('It should return an an array of names and numbers', () => {
    const startingObj = {
      'Grace Hopper': '222-303-5938',
      'Ada Lovelace': '222-349-9842',
      'Alan Turing': '222-853-5933'
    };

    expect(updateNumbers(startingObj).includes('Grace Hopper: 222-303-5938')).toBe(true);
  });
});

describe('Testing challenge 5', () => {
  test('It should return an array of the names of the houses', () => {
    expect(getHouses(characters)[0]).toStrictEqual('Greyjoy');
    expect(getHouses(characters).length).toStrictEqual(7);
  });
});


describe('Testing challenge 6', () => {
  test('It should return true for characters that have children', () => {
    expect(hasChildrenValues(characters, 'Daenarys')).toBeTruthy();
  });

  test('It should return false to characters who do not have children', () => {
    expect(hasChildrenValues(characters, 'Sansa')).toBeFalsy();
  });
});

describe('Testing challenge 7', () => {
  test('It should return true for characters that have children', () => {
    expect(hasChildrenEntries(characters, 'Eddard')).toBeTruthy();
  });

  test('It should return false to characters who do not have children', () => {
    expect(hasChildrenEntries(characters, 'Jon S.')).toBeFalsy();
  });
});

describe('Testing challenge 8', () => {
  test('It should return the number of characters in the array', () => {
    expect(totalCharacters(characters)).toStrictEqual(26);
  });
});

describe('Testing challenge 9', () => {
  test('It should return an object for each house containing the name and size', () => {
    expect(houseSize(characters)[1]).toStrictEqual({ house: 'Snow', members: 1 });
    expect(houseSize(characters).length).toStrictEqual(7);
  });
});

describe('Testing challenge 10', () => {
  test('It should not include any deceased spouses', () => {
    expect(houseSurvivors(characters)).toStrictEqual([{ house: 'Greyjoy', members: 1 }, { house: 'Snow', members: 1 }, { house: 'Arryn', members: 2 }, { house: 'Tyrell', members: 3 }, { house: 'Lannister', members: 4 }, { house: 'Targaryen', members: 4 }, { house: 'Stark', members: 6 }]);
  });
});
