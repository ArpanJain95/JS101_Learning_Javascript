// Problem-6
// Given a string swap the case and print the output
// Sample Input - Test
// Sample Output - tEST
// NOTE: Use multiple functions to achieve the result, NOT one single code block

function isUpperCase(char){
  return char >= "A" && char <= "Z";
}

function swapCase(char){
  if(isUpperCase(char)){
    return char.toLowerCase();
  }
  else{
    return char.toUpperCase();
  }
}
function swapStringCase(string){
  let output = "";
  for(let i = 0; i < string.length; i++){
    output+=swapCase(string[i]);
  }
  console.log(output);
}

let str = "Test";
swapStringCase(str);