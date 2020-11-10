let numberList = [];

for(let i=0;i<10;i++)
{
    let temp = Math.floor(Math.random() * 900) + 100;
    numberList[i] = temp;
}

let max = numberList[0];
let secondMax = numberList[1];
let min = numberList[0];
let secondMin = numberList[1];

for(let i=0;i<10;i++){

    if(numberList[i]<min){
        secondMin = min;
        min = numberList[i];
    }
    else {
        if(numberList[i]<secondMin)
            secondMin = numberList[i];
    }

    if(numberList[i]>max){
        secondMax = max;
        max = numberList[i];
    }
    else {
        if(numberList[i]>secondMax)
            secondMax = numberList[i];
    }
}
for(let i=0;i<10;i++)
    console.log(numberList[i]);
console.log("Second last maximum number is: "+secondMax);
console.log("Second last minimum number is: "+secondMin);