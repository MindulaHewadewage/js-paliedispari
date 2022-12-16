// Metto gli elementi dal dom
const userNumberElement = document.getElementById('user-number');
const button = document.getElementById('button');
const oddOrEvenElement = document.getElementById('odd-or-even');
const winner = document.getElementById('winner');



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

    // prendo il numero scelto dall'utente
    userNumberValue = parseInt(userNumberElement.value.trim());
    console.log(userNumberValue);


    // faccio la somma
    const sum = userNumberValue + cpuNumber;
    console.log(sum);

    // si stabilisce se la somma è è pari o dispari (funzione)
    function isEven(number){
        return number % 2 === 0 ? true : false;
    }

    if (isEven(sum)) {
        console.log('Pari')
    }else {
        console.log('Dispari')
    }

    const rightChoice= isEven (sum) ? 'even' :'odd';
    const winner = oddOrEven === rightChoice ? 'user' : 'CPU';
    
    winner.innerText = 'winner : ' + winner;
})














