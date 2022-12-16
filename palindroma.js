// Ciclo per verificare se una parola è palindroma
function isPalindrome (word){
    let result = false;

    let reverseWord ='';
    for (let i = word.lenght - 1; i >= 0 ; i--){
        reverseWord += word[i];
    }
    
    if(word === reverseWord){
        result = true ;
    }

    return result;
}


// raccolgo gli elementi
const form = document.getElementById('form');
const wordElement = document.getElementById('word');
const resultElement = document.getElementById('result');


// event-listener
form.addEventListener('submit', function (event){
    // blocco invio del form
    event.preventDefault();

    // prendo valore input
    const wordValue = wordElement.value.trim();


    const message = isPalindrome(word) ? 'La parola è palindroma' : 'La parola non è Palindroma';

    resultElement.innerText = message;

})
