const prompt = require('prompt-sync')();

console.log('Enter\n1 for C -> F\n2 for F -> C');
let choice = parseInt(prompt('Enter your choice: '));
let value = parseFloat(prompt('Enter the temperature: '));

function celsiusToFahrenheit(temperature) {
    return (temperature * (9/5)) + 32;
}

function fahrenheitToCelsius(temperature) {
    return (temperature - 32) * (5/9);
}

switch (choice) {
    case 1:
        if (value < 0 || value > 100) 
            console.log("Invalid Input");
        else
            console.log("Temperature in degree fahrenheit = " + celsiusToFahrenheit(value));
        break;
    case 2:
        if (value < 32 || value > 212) 
            console.log("Invalid Input");
        else
            console.log("Temperature in degree celcius = " + fahrenheitToCelsius(value));
        break;
    default:
        console.log("Invalid Input!");
        break;
}