const prompt = require('prompt-sync')();

let number1 = parseInt(prompt("Enter a number: "));
let number2 = parseInt(prompt("Enter a number: "));

function checkPalindrome(number1, number2) {
    let palindrome = 0;
    while (number1 > 0) {
        palindrome = palindrome * 10 + (number1 % 10);
        number1 = Math.floor(number1 / 10);
    }
    return palindrome == number2;
}

if (checkPalindrome(number1, number2)) {
    console.log("Palindromes!");
} else {
    console.log("Not Palindromes!");
}
