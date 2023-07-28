'use strict';




// module.exports = function zipLists(headA, headB) {
//   let currentA = headA;
//   let currentB = headB;

//   while(currentA || currentB){
//     let tmpA = currentA.next;
//     currentA.next = currentB;
//     let tmpB = currentB.next;
//     currentB.next = tmpA;

//     currentA = currentA.next;
//     currentB = currentB.next;

//     currentA = tmpA;
//     currentB = tmpB;
//   }
//   console.log(headA);
//   return headA;
// };

module.exports = function zipLists(headA, headB) {
  if(!headA.value || !headB.value){
    return null;
  }
  let currentA = headA;
  let currentB = headB;
  let tmpA = headA;
  let tmpB = headB;

  while (currentA || currentB) {

    tmpA = currentA.next;
    if(!tmpB){return headA;}
    currentA.next = tmpB;

    // this is going to zip up to no node
    tmpB = currentB.next;
    if(!tmpA){return headA;}
    currentB.next = tmpA;

    currentA = tmpA;
    currentB = tmpB;
  }

  return headA;

};
