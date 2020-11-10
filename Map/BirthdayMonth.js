let birthMap = new Map();
for(let i=0;i<50;i++){
    let birthMonth = Math.floor(Math.random()*100)%12 +1;
    let isThere = birthMap.has(birthMonth);
    let val = 0
    if(isThere){
        val = birthMap.get(birthMonth);
    }
    birthMap.set(birthMonth,++val);
}
console.log(birthMap)