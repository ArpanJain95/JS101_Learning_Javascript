// Problem 4: Print the average of even numbers from 1 to 100 (both included)

let start = 1;
let limit = 5;
let sum = 0;
let count = 0;

while(start<=limit)
  {
    if(start%2==0)
    {
      sum=sum+start
      count++
    }
    start++
  }
console.log(sum/count)