
'use strict';
const LinkedList  = require ('./linked-list.js');
function zipLists(list1, list2) {
  let zipped = new LinkedList ();
  let current1 = list1.head;
  let current2 = list2.head;
  while (current1 || current2){
    if (current1) {
      zipped.append(current1.value);
      current1 = current1.next;
    }
    if (current2){
      zipped.append (current2.value);
      current2 = current2.next;
    }
  }
  return zipped;
}

module.exports = zipLists;
