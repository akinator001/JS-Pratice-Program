const prompt = require('prompt-sync')();

let startNumber = parseInt(prompt("Enter the start number: "));
let endNumber = parseInt(prompt("Enter the end number: "));
for (let i = startNumber; i <= endNumber; i++) {
    let isPrimeNumber = true;
    if (i == 2) {
        console.log(2);
        continue;
    }
    if (i == 1 || i % 2 == 0) {
        continue;
    }
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            isPrimeNumber = false;
            break;
        }
        
    }
    if (isPrimeNumber) console.log(i);
    
}