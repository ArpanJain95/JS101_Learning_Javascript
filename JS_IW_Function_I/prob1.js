// Problem 1: Create a function to check if a number is Prime or Not

function isPrime(number){
  if(number < 2){
    return false;
  }

  for(let i = 2; i * i <= number; i++){
    if(number % i === 0){
      return false;
    }
  }

  return true;
}

console.log(isPrime(9))