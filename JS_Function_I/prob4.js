// Problem-4
// Write code to calculate the average of an array
// If there are no items in the array it should return 0
// NOTE: Create a function to find the sum of elements in an array and use that function to find out the average

function findAverage(arr){
  let sum = 0;
  let count = arr.length;
  for(i=0; i<arr.length; i++){
      sum+=arr[i];
  }
    let avg = sum/count;
    console.log(avg);
}

let array = [100, 90, 80, 70, 60];
findAverage(array);