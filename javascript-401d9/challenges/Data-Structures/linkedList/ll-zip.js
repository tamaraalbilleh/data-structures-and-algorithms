
'use strict';
const LinkedList  = require ('./linked-list.js');
// function zipLists(list1, list2) {
//   let zipped = new LinkedList ();
//   let current1 = list1.head;
//   let current2 = list2.head;
//   while (current1 || current2){
//     if (current1) {
//       zipped.append(current1.value);
//       current1 = current1.next;
//     }
//     if (current2){
//       zipped.append (current2.value);
//       current2 = current2.next;
//     }
//   }
//   return zipped;
// }


function zipLists (list1 , list2){
  let current1 = list1.head;
  let current2 = list2.head;

  let list1Length = list1.length;
  let list2Length = list2.length;

  while (current1 && current2.next){

    list1.insertAfter(current1.value, current2.value);

    current1 = current1.next.next;
    current2 = current2.next;
  }
  if (list1Length === list2Length) {
    list1.append (current2.value);

  }else if (list1Length < list2Length){
    list1.append (current2.value);

  }else if (list1Length > list2Length){
    list1.insertAfter (current1.value, current2.value);
  }
  return list1;
}
module.exports = zipLists;
