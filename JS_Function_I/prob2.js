// Problem-2
// Write code to find the absolute difference of two numbers

// Sample Input-1 12,4
// Sample Output-1 8
// Sample Input-2 4,18
// Sample Output-2 14
// NOTE: It must consist of two functions 1. To find the difference 2. To find the absolute value https://en.wikipedia.org/wiki/Absolute_value

function findDifference(a, b){
  return a-b;
}

function findAbsoluteValue(num){
  if(num < 0){
    return -num;
  }
  else{
    return num;
  }
}

function findAbsoluteDifference(a, b){
  let dif = findDifference(a, b);
  let absoluteDifference = findAbsoluteValue(dif);
  console.log("AbsoluteDifference:", absoluteDifference)
}

let a = 5
let b = 15
findAbsoluteDifference(a, b);