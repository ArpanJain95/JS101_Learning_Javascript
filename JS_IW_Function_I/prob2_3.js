// Problem 2: Use the above function to print the Primes from 2 to a given limit

function isPrime(num){
  if(num < 2){
    return false;
  }

  for(let i = 2; i * i <= num; i++){
    if(num % i === 0){
      return false;
    }
  }

  return true;
}

console.log("Prime:")
function printPrime(limit){
  for(let j = 2; j <= limit; j++){
    if(isPrime(j)){
      console.log(j);
    }
  }
}
printPrime(20);

console.log("")
console.log("---------------------------------------------")

// Problem 3: Use the same function to print Non-Primes from 2 to a given limit

console.log("Non Prime:")
function printNonPrime(limit2){
  for(let k = 2; k <= limit2; k++){
    if(isPrime(k)==false){
      console.log(k);
    }
  }
}
printNonPrime(20)