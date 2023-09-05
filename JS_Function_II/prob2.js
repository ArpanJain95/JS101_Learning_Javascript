// Problem 2
// Write a custom function that has the same behavior of inbuilt Array Last Index Of Function
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf

function cusLastIndexOf(array, word){
  let index = -1;
  for(let i = 0; i < array.length; i++){
    if(array[i]===word){
      index = i;
    }
  }
  return index;
}

let arr = ["ji", "ko", "lp"];
let findIndex = "lp";
console.log(cusLastIndexOf(arr, findIndex));