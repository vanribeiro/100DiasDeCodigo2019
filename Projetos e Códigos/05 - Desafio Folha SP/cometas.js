var allColorGroup = ['AMARELO','VERMELHO', 'PRETO', 'AZUL'];
var allCometName = ['HALLEY', 'ENCKE', 'WOLF', 'KUSHIDA'];

function alphabetLetters(){
    let lettersMapping = new Map();
	let letters = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
    let alphabet = letters.split('');
	for(let i=1; i <= alphabet.length; i++){
        lettersMapping.set(alphabet[i-1], i);
    }
	return lettersMapping;
}

function countLetters(array){
    let gettingLettersValue = [];
    let word = array.split('');
    let product = 1;
    let letters = alphabetLetters();
	word.forEach(e => {
            gettingLettersValue[e] = letters.get(e);
            product *= gettingLettersValue[e];
        });
	return product % 45;
}

let AMARELO = countLetters(allColorGroup[0]);
let VERMELHO = countLetters(allColorGroup[1]);
let PRETO = countLetters(allColorGroup[2]);
let AZUL = countLetters(allColorGroup[3]);

let HALLEY = countLetters(allCometName[0]);
let ENCKE = countLetters(allCometName[1]);
let WOLF = countLetters(allCometName[2]);
let KUSHIDA = countLetters(allCometName[3]);

let whosNotGo = '';

if(AMARELO != HALLEY)  whoswhosNotGo += allColorGroup[0];
if(VERMELHO != ENCKE) whosNotGo += allColorGroup[1];
if(PRETO != WOLF) whosNotGo += allColorGroup[2];
if(AZUL != KUSHIDA) whosNotGo += allColorGroup[3];

console.log(whosNotGo);