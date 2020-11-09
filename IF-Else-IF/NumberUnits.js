const prompt = require('prompt-sync')();
var number = prompt('Enter numbers {1,10,100,1000} :  ');
if(number == 1){
    console.log("Unit");
}else if(number == 10){
    console.log("Ten");
}else if(number == 100){
    console.log("Hundred");
}else if(number == 1000){
    console.log("Thousand");
}else{
    console.log("Undefined");
}