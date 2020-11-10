let headsCount = 0;
let tailsCount = 0;
let coinFlipCount = 0;

while (headsCount != 11 && tailsCount != 11) {
    coinFlipCount++;
    if (Math.random() < 0.5) {
        headsCount++;
        console.log('Outcome on '+ coinFlipCount + ' flip = Heads');
        console.log('Heads Count: ' + headsCount);
    } else {
        tailsCount++;
        console.log('Outcome on '+ coinFlipCount + ' flip = Tails');
        console.log('Tails Count: ' + tailsCount);
    }
} 