// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


// genera numero random tra 1 e 6 (quindi no 0 e 6+1)
// genera un secondo numero randomico per il computer
// if per estrarre il vincitore in base al numero piu alto uscito

// 1 input collegato con id
const startButton = document.getElementById('startButton');
// 2 collegare cardBoard 
let cardBoard = document.getElementById('cardBoard');
// 3 eventlistener
startButton.addEventListener('click', function() {
    // cambia il testo del pulsante quando viene creato
    startButton.value = 'Thanks!';

    function getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    // variabile per dado1 e dado2
    let diceOne = getRandomArbitrary(1, 6);
    let diceTwo = getRandomArbitrary(1, 6);

    // creo due elementi dove printare i risultati
    let windowElementOne = document.createElement('p');
    windowElementOne.textContent = 'Player A score: ' + diceOne;
    windowElementOne.style.fontSize = '1rem';
    windowElementOne.style.margin = '15px';
    windowElementOne.style.width = '10rem';
    windowElementOne.style.height = '2rem';
    windowElementOne.style.border = '2px solid white';
    windowElementOne.style.borderRadius = '5px';
    windowElementOne.style.background = 'linear-gradient(135deg, #153677, #4e085f)'
    windowElementOne.style.textAlign = 'center';

    let windowElementTwo = document.createElement('p');
    windowElementTwo.textContent = 'Player B score: ' + diceTwo; 
    windowElementTwo.style.fontSize = '1rem';
    windowElementTwo.style.margin = '15px';
    windowElementTwo.style.width = '10rem';
    windowElementTwo.style.height = '2rem';
    windowElementTwo.style.border = '2px solid white';
    windowElementTwo.style.borderRadius = '5px';
    windowElementTwo.style.background = 'linear-gradient(135deg, rgb(57, 192, 16), #4e085f)'
    windowElementTwo.style.textAlign = 'center';

    cardBoard.appendChild(windowElementOne);
    cardBoard.appendChild(windowElementTwo);
});