// Problem 2: Create a new array from the given array such that each element of the new array is raised to a power of 5.
// Output = [32, 243, 1024, 7776, 16807]

function raisePower(num){
  let number = num ** 5;
  return number;
}

function createArray(array){
  return array.map(ele => raisePower(ele));
}

let input = [2, 3, 4, 6, 7]
console.log(createArray(input));
// console.log(raisePower(2))