// Metto gli elementi dal dom
const userNumberElement = document.getElementById('user-number');
const button = document.getElementById('button');
const oddOrEvenElement = document.getElementById('odd-or-even');


// genero un numero casuale da 1 a 5 (funzione)
function getRandomNumber(min = 1 , max = 5){
    const randomNumber = Math.floor(Math.random()*max +1);
    return randomNumber;
}
const cpuNumber = parseInt(getRandomNumber());
console.log('Cpu Number: '+ cpuNumber );



// prendo le value dal dom conl'event listener
button.addEventListener('click' , function(){
    // prendo il value di pari dispari
    oddOrEven = oddOrEvenElement.value;
    console.log(oddOrEven);

    // prendo il numero scelto dall'utente
    userNumberValue = parseInt(userNumberElement.value.trim());
    console.log(userNumberValue);

    // faccio la somma
    sum = userNumberValue + cpuNumber;
    console.log(sum);


})






// si dichiara il vincitore







// // si stabilisce se la somma è è pari o dispari (funzione)
// let result = odd;
// function isEven(number){
//     if(number % 2 ===0){
//         result = even;
//     }
//     return result;
// }