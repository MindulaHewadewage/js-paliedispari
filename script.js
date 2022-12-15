// Metto gli elementi dal dom
const even = document.getElementById('even');
const odd = document.getElementById('odd');
const userNumberElement = document.getElementById('user-number');
const button = document.getElementById('button');


// genero un numero casuale da 1 a 5 (funzione)
function getRandomNumber(min = 1 , max = 5){
    const randomNumber = Math.floor(Math.random()*max +1);
    return randomNumber;
}
const cpuNumber = getRandomNumber();
console.log('Cpu Number: '+ cpuNumber );


// prendo la value dal dom conl'event listener
button.addEventListener('click' , function(){
    userNumberValue = userNumberElement.value.trim();
    console.log(userNumberValue);
})


// faccio scegliere all'utente se vuole pari o dispari

// faccio la somma

// si dichiara il vincitore







// // si stabilisce se la somma è è pari o dispari (funzione)
// let result = odd;
// function isEven(number){
//     if(number % 2 ===0){
//         result = even;
//     }
//     return result;
// }