let currentAmount = 100;
const bet = 1;
let numberOfBets = 0;
let winCount = 0;
let oddsOfWinning = 0.5;
let flag=0;
while (currentAmount > 0 && currentAmount < 200) { 
    numberOfBets++;
    if (Math.random() < oddsOfWinning) {
        winCount++;
        currentAmount += bet;
    } else {
    currentAmount -= bet;
    }
    if(currentAmount<=0)
    {
        flag=1;
        break;
    }
}
if(flag==1)
    console.log("Number of Times Bets Placed: " + numberOfBets + " Number of Times Won: " + winCount +" Game Lost as amount is: " + currentAmount);
else
    console.log( "Number of Times Bets Placed: " + numberOfBets + " Number of Times Won: " + winCount +
             " Amount After the Game: "+ currentAmount);