function generateNumber() {
  // generate a random integer(hint : Math.random)
  const randomNum = Math.floor(Math.random() * 100) + 1;
  document.getElementById("number").textContent = randomNum;
  checkOddEven(randomNum);
}

function checkOddEven(num) {
  // logic for even / odd
  const result = num % 2 === 0 ? "Even" : "Odd";
  document.getElementById("odd-even").textContent = `The number is ${result}`;
}

window.onload = function () {
  // add event listeners to the button here
  const generateButton = document.getElementById("generate-number");
  generateButton.addEventListener("click", generateNumber);
};

// donot change the following export statement

if (typeof exports !== "undefined") {
  module.exports = {
    generateNumber,
    checkOddEven,
  };
}
