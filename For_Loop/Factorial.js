const prompt = require('prompt-sync')();

let number = parseInt(prompt("Enter the number: "));
let factorial = 1;
for (let index = 1; index <= number; index++) {
    factorial *= index;
}
console.log("Factorial of "+ number + " is: " + factorial);