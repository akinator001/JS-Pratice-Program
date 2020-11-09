const prompt = require('prompt-sync')();

let n = parseInt(prompt("Enter the index: "));

for (let index = 0; index <= n; index++) {
    console.log(2**index);
}