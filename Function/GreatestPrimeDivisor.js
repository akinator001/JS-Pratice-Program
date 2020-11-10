const prompt = require('prompt-sync')();
let value = parseInt(prompt('Enter the Number : '));

function factorsOf(number) {
    var factors = [];
    for (var i = 1; i <= number; i++) {
        if (number % i === 0) {
        factors.push(i);
        }
    }
   return factors;
}

function isPrime(number) {
    for (var i=2; i < number; i++) {
    if (number % i === 0) {
        return false;
    }
  }
  return number > 1;
}

function primes(factors) {
    var primes = [];
    for (var i=1; i<factors.length; i++) {
    if (isPrime(factors[i])) {
        primes.push(factors[i]);
    }
  }
  return primes;
}
var factors = factorsOf(value);
var arr = primes(factors);
console.log(arr[arr.length-1]);