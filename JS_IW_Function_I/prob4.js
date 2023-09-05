// Problem 4: Write a function to check if the char is a small case or not.

function isCharSmallCase(char){
  return char >= 'a' && char <= 'z';
}
console.log(isCharSmallCase("a"))

let n = "Masai School";
for(let i in n){
  if(isCharSmallCase(n[i])){
    console.log("'"+n[i]+"'"+" is small case")
  }
  else{
    console.log("'"+n[i]+"'"+" is not small case")
  }
}