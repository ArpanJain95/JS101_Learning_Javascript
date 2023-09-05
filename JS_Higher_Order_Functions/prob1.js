// Problem 1: Find the average of elements present at odd index of the following array.

function findSum(array){
  let sum = 0;
  for(let i=0; i<array.length; i++){
    sum+=array[i];
  }
  return sum;
}

function findCount(array){
  return array.length;
}

function avgOfOddIndexEle(array){
  let oddIndex = array.filter((_, index) => index%2!==0);
  let oddIndexSum = findSum(oddIndex);
  let oddIndexCount = findCount(oddIndex);
  return oddIndexSum/oddIndexCount;
}

let arr = [10, 24, 56, 72, -10, -88, 100, 564];
console.log(avgOfOddIndexEle(arr));