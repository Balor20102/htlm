let sofieOne = 9.4;
let sofieTwo = 3.8 ; 
let sofieThree = 2.7;
let sofieFour = 6.7;
let sofieFive = 8.9;
let sofieGem;

let sarOne = 7.7;
let sarTwo = 7.6;
let sarThree = 7.3;
let sarFour = 5.8;
let sarFive = 6.9;
let sarGem;

sofieGem = (sofieOne + sofieTwo + sofieThree + sofieFour + sofieFive) /5;
console.log(sofieGem);

sofieGem = (sofieOne + sofieTwo + sofieThree + sofieFour + (sofieFive * 2)) / 6;
console.log(sofieGem);

sarGem = (sarOne + sarTwo + sarThree + sarFour + sarFive)/5;
console.log(sarGem)

if ( sarGem > sofieGem){
    console.log(`Sarah scoort het hoogste ${sarGem}`)
} else {
    console.log(`sofie scoort het hoogste ${sofieGem}`)
}

if (sarGem > 7 ){
    console.log("Goed gedaan, hoger dan een 7!")
}
else if (sofieGem > 7){
    console.log("Goed gedaan, hoger dan een 7!")
}