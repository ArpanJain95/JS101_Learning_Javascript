// Problem 5: Write a function to replace spaces in a given string with - .

function replaceSpaces(str){
  return str.replace(/ /g, '*');
}

let string = "Function to replace spaces in a given string."
console.log(replaceSpaces(string));