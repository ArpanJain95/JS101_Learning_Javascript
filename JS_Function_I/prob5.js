// Problem-5
// Write a function to convert a character to lower case
// Use this function to convert a given word to lower case
// Use that function to convert an array of strings to array of lower case strings
// Sample Input ["MA", "SA", "I", "SCH", "OOL"]
// Sample Output ["ma", "sa", "i", "sch", "ool"]

function toLowerCase(char){
  let upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let lowerCaseChar = "abcdefghijklmnopqrstuvwxyz"
  for(let i = 0; i < upperCaseChar.length; i++){
    if(char === upperCaseChar[i]){
      return lowerCaseChar[i];
    }
  }
  return char;
}

// let character = "G";
// console.log(toLowerCase(character));

function wordInLowerCase(word){
  let lowerCaseWord = "";
  for(let i = 0; i <word.length; i++){
    lowerCaseWord+=toLowerCase(word[i]);
  }
  return lowerCaseWord
}

// let word1 = "HELLO";
// wordInLowerCase(word1);

function arrStrToLowerCase(arr){
  let lowerCaseArr = [];
  for(let j = 0; j < arr.length; j++){
    lowerCaseArr.push(wordInLowerCase(arr[j]))
  }
  console.log(lowerCaseArr);
}

let array = ["MA", "SA", "I", "SCH", "OOL"];
arrStrToLowerCase(array);