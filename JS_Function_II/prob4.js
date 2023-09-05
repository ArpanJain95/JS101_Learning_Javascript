// Problem 4
// Write a custom function that has the same behavior of inbuilt String Substring Function
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring

function cusSubString(str, start, end){
  if(str === undefined || str === null){
    return "";
  }
  if(start === undefined){
    start = 0;
  }
  else if(start < 0){
    start = 0;
  }
  if(end === undefined){
    end = str.length;
  }
  else if(end<0){
    end = 0;
  }
  else if(end>str.length){
    end = length;
  }
  if(start>end){
    let temp = start;
    start = end;
    end = temp;
  }
  return str.substring(start, end);
}

let string = "Hello";
let startIn = 1;
let endIn = 4;
console.log(cusSubString(string, startIn, endIn))