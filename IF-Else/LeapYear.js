const prompt = require('prompt-sync')();

let year = parseInt(prompt('Enter the year: '));
let result = false;
if(year % 4 == 0){
    if (year % 100 == 0) {
        if(year % 400 == 0){
            result = true;
        }
    } else {
        result = true;
    }
}

if (result) {
    console.log("A Leap Year");
}
else {
    console.log("Not A Leap Year");
}