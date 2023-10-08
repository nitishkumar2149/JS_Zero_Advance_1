let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

// First we check that user is ready to play or not :-
if(playGame){
    submit.addEventListener('click', function (e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    // validating the "guess" that it is in proper formate or not.
    if(isNaN(guess)){
        alert('Please enter a valid number')
    } else if(guess < 1){
        alert('Please enter number more then 1')
    }
    else if(guess > 100){
    alert('Please enter number less then 100')
    } else {
        prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over, Random number is ${randomNumber}`)
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    // here we check the guess that they are equal/less/more and do next step as required.
    if(guess === randomNumber){
        displayMessage(`You guess is Right.`)
        endGame()
    } else if(guess < randomNumber){
        displayMessage(`You guess is too Low.`)
    } else{
        displayMessage(`You guess is too High.`)
    }
}

function displayGuess(guess){
    // clean user input and increases the count.
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
    // display message
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    // game -> end and input field reset and new game -> call kar rhe hai
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p)
    playGame = false
    newGame();


}

function newGame(){
    // here we removing and reseting everything like starting value.
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function (e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p);

        playGame = true;
    })
}