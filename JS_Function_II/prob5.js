// Problem 5
// Write a custom function that has the same behavior of inbuilt Array Includes Function
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

function cusIncludes(array, element, start){
  start = 0;
  for(let i = start; i<array.length; i++){
    if(array[i] === element){
      return true;
    }
  }
  return false;
}

let arr = ["Ashish", "Arpan", "Ashwin", "Abhishek", "Mayur"];
let element = "Ashwin";
console.log(cusIncludes(arr, element));