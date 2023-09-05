// Problem-1
// Write a function named addNumbers which takes two numbers as input and return their sum

// Use the function to calculate the sum of given three numbers

function addNumbers(a, b){
  let sum = a+b;
  return sum;
}

let sum1=addNumbers(2, 4);
let sumOf3Integers=addNumbers(sum1, 6);

console.log(sumOf3Integers);