// How to merge two array then remove duplicates using javascript

const array1=[1,2,3,4,5];
const array2=[4,5,6];

function mergeTwoArray(args1,args2){
  let  mergedValue=[...args1,...args2];
  let removeDuplicate=[...new Set(mergedValue)];
  console.log(removeDuplicate);
}
mergeTwoArray(array1,array2);