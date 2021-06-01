'use strict';
const { Stack }= require ('../stacksAndQueues /stacks-and-queues.js');
// const { Queue } = require ('../stacksAndQueues /stacks-and-queues.js');

// function multiBracketValidation(input) {
//   let starters = ['(','{','['];
//   let enders = [')','}',']'];
//   let stack1 =new Stack();
//   let queue = new Queue ();
//   let arr =[];
//   let strArray  = input.split ('');
//   strArray.map (item=>{
//     if (starters.includes (item)){
//       stack1.push (item);
//     }else if (enders.includes (item)){
//       queue.enqueue (item);
//     }
//   });
//   let currentS = stack1.top;
//   let currentQ = queue.front;
//   while (currentQ){
//     if (queue.front){
//       let val = stack1.pop ();
//       let result = queue.dequeue();
//       if (val === '{'){
//         if ( result === '}'){
//           arr.push (true);
//         }else {
//           arr.push (false);
//         }
//       }else if (val === '('){
//         if ( result === ')'){
//           arr.push (true);
//         }else {
//           arr.push (false);
//         }
//       }else if (val === '['){
//         if ( result === ']'){
//           arr.push (true);
//         }else {
//           arr.push (false);
//         }
//       }
//       currentQ =currentQ.next;
//     }
//     currentS = currentS.next;
//   }
//   const allVals = (currentValue) => currentValue === true;
//   let res = arr.every (allVals);
//   return res;
// }

function multiBracketValidation (input){
  if (input){
    let starters = ['{' , '[' , '('];
    let enders = ['}' , ']' , ')'];
    let stack = new Stack ();
    let strArray = input.split ('');
    let arr = [];
    let starterCount = 0;
    let enderCount = 0;

    for (let i = 0; i<strArray.length; i++){
      if (starters.includes (strArray[i]) || enders.includes (strArray[i])){
        if (starters.includes (strArray[i])){
          starterCount++;
          stack.push (strArray[i]);
        } else if (enders.includes (strArray[i]) && stack.top){
          let temp;
          if(input[i] === '}'){
            temp='{';
          }if(input[i] === ')'){
            temp='(';
          }if(input[i] === ']'){
            temp='[';
          }
          const val = stack.peek();
          if(temp=== val){
            stack.pop();
            enderCount++;
            arr.push (true);
          }
          else {
            arr.push (false);
          }
        }
      }
    }
    const all = (currentValue) => currentValue === true;
    let res = arr.every (all);
    return res && starterCount === enderCount;
  }else{
    throw new Error ();
  }
}
module.exports = multiBracketValidation;


