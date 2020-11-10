const prompt = require('prompt-sync')();

let number = parseInt(prompt("Enter the index: "));
let index = 0;

while (index <= number) {
    console.log(2**index);
    index++;
} 