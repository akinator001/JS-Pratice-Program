const prompt = require('prompt-sync')();
var number = prompt('Enter the number {1,10,100,1000} :  ');
number = Number(number);
switch(number){
    case 1:{
        console.log("Unit");
        break;
    }case 10:{
        console.log("Tens");
        break;
    }case 100:{
        console.log("Hundereds");
        break;
    }case 1000:{
        console.log("Thousands");
        break;
    }default:{
        console.log("Invalid input");
    }
} 