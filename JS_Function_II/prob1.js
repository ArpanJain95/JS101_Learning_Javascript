// Problem 1. Write a custom function that has the same behavior of inbuilt Array Join Function - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

function cusArrayJoin(array, separator){
  let join = "";
  let sum = 0;
  for(let i = 0; i < array.length; i++){
    join+=array[i];
    if(i<array-1){
    join+=separator;
    }
  }
  return join;
}

let arr = ["ji", "ko", "lp"];
console.log(cusArrayJoin(arr));