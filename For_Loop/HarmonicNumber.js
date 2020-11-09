  
const prompt = require('prompt-sync')();

let n = parseInt(prompt("Enter the number: "));
let harmonicNumber = 0.0;
for (let index = 1; index <= n; index++) {
    harmonicNumber += 1/index;
}
console.log(harmonicNumber);