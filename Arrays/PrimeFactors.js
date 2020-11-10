const prompt = require('prompt-sync')();
let number = prompt('Enter the number : ');
number = Number(number) ;
let primeArr = new Array() ;
let j=0 ;
while(number % 2 == 0){
    primeArr[j++] = 2;
    number = number/2;
}
for(let i=3;i*i<=number;i=i+2){
    while(number%i == 0){
        primeArr[j++] = i;
        number = number/i;
    }
}
if(number > 2){
    primeArr[j] = number;
}

for(let i=0;i < primeArr.length;i++){
    console.log(primeArr[i]);
}