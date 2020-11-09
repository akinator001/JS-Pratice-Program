let min = 1000;
let max = 0;

for (let index = 0; index < 5; index++) {
    var number = Math.floor(Math.random() * 900) + 100;
    if (number < min) {
        min = number;
    }

    if (number > max) {
        max = number;
    }
}

console.log("Minimum Number: " + min + " Maximum Number: " + max);