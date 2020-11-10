const prompt = require('prompt-sync')();

let number = 0;
while (number < 1 || number > 100) {
  number = parseInt(prompt('Enter a number between 1 to 100: '));  
} 

let lower = 1;
let upper = 100;
let middle = Math.floor(( lower + upper ) / 2);

while (middle != number) {
    if (number < middle) {
        upper = middle;
        middle =  Math.floor(( lower + upper ) / 2);
    } else {
        lower = middle;
        middle =  Math.floor(( lower + upper ) / 2);
    }
}

console.log("Magic Number: " + middle); 