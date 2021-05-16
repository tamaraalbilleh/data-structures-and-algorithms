let numbers1 = [1, 2, 3, 4, 5, 6];
let numbers2 = [89, 2354, 3546, 23, 10, -923, 823, -12];
let numbers3 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199];



function reverseArray (array){
  let reversed = [];
  for (let i= 0 ; i< array.length +1 ; i ++){
    reversed.push (array[array.length -i- 1]);
  }
  reversed.pop ();
  return reversed;
}

console.log (reverseArray (numbers1));
console.log (reverseArray (numbers2));
console.log (reverseArray (numbers3));


// streatch
function reverseArray2 (array){
  array.sort (item =>{
    return -1;
  });
  return array;

}
console.log (reverseArray2 (numbers1));
console.log (reverseArray2 (numbers2));
console.log (reverseArray2 (numbers3));
