// Problem 3
// Write a custom function that has the same behavior of inbuilt Array Slice Function
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

function cusSlice(array, start, end){
  let array1 = [];
  if(start<0){
    start = Math.max(array.length+start, 0)
  }
  if(end<0){
    end = Math.max(array.length+end, 0)
  }
  else if(end>array.length){
    end=length;
  }
  for(let i = start; i<end; i++){
    array1.push(array[i])
  }
  return array1;
}

let arr = ["raj", "karan", "shankar", "ashish", "pasha", "chaman"];
let startIn = 1;
let endIn = 4;
console.log(cusSlice(arr, startIn, endIn));