// Problem 3: Taking the following array into consideration get the output as given below:
// Output ==> 3 - 5 - 7
// Hint: You have to use forEach and conditional statement over here.

function funct1(array){
  let bag = ""
  array.forEach(ele => {
    if(ele%2!==0){
      bag+=ele+" - ";
    }
  });
    return bag.slice(0, -3)
}


let arr = [3,4,5,6,7]
console.log(funct1(arr));