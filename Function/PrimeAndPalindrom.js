const prompt = require('prompt-sync')();
let number = prompt('Enter the number : ');
function isPrime(number){
    let flag = 0;
    for(let i=2;i<=number/2;i++){
        if(number%i == 0){
            flag++;
            break;
        }
    }
    if(flag == 0){
        return true;
    }else{
        return false;
    }
}
function isPalindrome(number){
    let rev = 0;
    let temp = number;
    while(temp >= 1){
        rev = rev*10+ Math.floor(temp%10);
        temp = Math.floor(temp/10);
    }
    if(rev == number)
        return true;
    else
        return false;
}
let palindromeCheck = isPalindrome(number);
if(palindromeCheck){
    let primeCheck = isPrime(number);
    if(primeCheck){
        console.log(number+" is a palindrome and a prime number");
    }
    else{
        console.log(number+" is a palindrome but not a prime number");
    }
}else{
    console.log(number+" is not a palindrome number");
}