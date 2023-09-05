// Problem-3
// Write a function isOdd which returns a boolean value based on the number is odd or not
// Use this function to print the odd numbers from 0 to a given limit(included)

function isOdd(num){
  if(num%2!==0){
    return true;
  }
  else{
    return false;
  }
}

// let a = 5;
// console.log(isOdd(a))

function printOddTillLimit(odd){
  for(let i = 0; i <= odd; i++){
    if(isOdd(i) == true){
      console.log(i);
    }
  }
}

let num = 20;
printOddTillLimit(num);