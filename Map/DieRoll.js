let numberMap = new Map();
while(true){
    let numberOnDie = Math.floor(Math.random()*10)%6 +1;
    console.log(numberOnDie);
    let isThere = numberMap.has(numberOnDie);
    let val = 0;
    if(isThere){
        val = numberMap.get(numberOnDie);
        if(val == 10){
            break;
        }
    }
    numberMap.set(numberOnDie,++val);           
}
console.log(numberMap);