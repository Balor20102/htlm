//8

day = "Monday"

console.log(day === "Monday" ? `Patat`: `pancakes`);

//9

const car = 'Audi';

if (car === 'Audi'){
    console.log('Great!');
} else {
    console.log('Meh');
}

//10
if (5 > 12){
    console.log(`Whiee`);
} else{
    console.log(`Whaaaa`);
}

//11
let sentence ;
    
if(sentence === false){
    console.log(`Whieee`);
}
else{
    console.log(`Whaaaa`);
}

//12


sentence = (false) ? 'Whieee' : 'Whaaaa';
console.log(`Hello, i shout out the sentence ${sentence} and I am ${sentence.length > 5 ? 'happy' : 'not so happy'}
`);

if(sentence === false){
    sentence = "Whieee";
    console.log(`hello, i shout out the sentence ${sentence} and I am happy`);
}
else{
    sentence = `Whaaaa`;
    console.log(`hello, i shout out the sentence ${sentence} and I am happy`);
}

const city = 'Amsterdam';

console.log( city === 'Amsterdam' ? `Koetjekoe` : `Deze prachtige stad is het niet: ${city}`);

console.log( city === 'Amsterdam' ? `Koetjekoe`: `Koetjekoe`)

console.log( city === 'Amsterdam' && true ? `Koetjekoe` : `Koetjeboeboe`)