const prompt = require('prompt-sync')();

let number = parseInt(prompt("Enter the number of elements in an array: "));
let numberList = new Array();
for (let i = 0; i < number; i++) {
    numberList.push(parseInt(prompt("Enter the number: ")));
}
var flag =  0;
for (let i = 0; i < numberList.length - 2; i++) {
    for (let j = i + 1; j < numberList.length - 1; j++) {
        for (let k = j + 1; k < numberList.length; k++) {
            if (numberList[i] + numberList[j] + numberList[k] == 0) {
                console.log("[" + numberList[i] + ", " + numberList[j] + ", " + numberList[k] +"]\n");
                flag=1; 
                break;
            }
        }
    }
}
if(flag==0){
    console.log("No 3 Digits Sum is Zero");
}