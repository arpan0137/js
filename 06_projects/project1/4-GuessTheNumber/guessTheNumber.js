let randNum = Math.floor(Math.random() * 100 + 1)

const submit = document.querySelector('#submitbtn')
const userInput = document.querySelector('#guessedNumber')
const prevGuesses = document.querySelector('#prevGuesses')
const remGuesses = document.querySelector('#remGuesses')
const lowOrHi = document.querySelector('.lowOrHi')
const resultParas = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = [];
let attempt = 1;

let playGame = true

if(playGame){
    submit.addEventListener('click',(e) => {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        randNum = Math.floor(Math.random() * 100 + 1)
        validateGuess(guess)
    })
}

let validateGuess = (guess) => {
    if(isNaN(guess)){
        alert("Please enter a valid number !")
    } else if(guess < 1) {
        alert("Please enter a number greater than 1 !")
    } else if( guess > 100) {
        alert("Please enter a number less than 100 !")
    } else {
        prevGuess.push(guess)
        if(attempt >= 10) {
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randNum}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

let checkGuess = (guess) => {
    if(guess === randNum){
        displayMessage(`You Guessed it right !!`)
        endGame()
    } else if(guess < randNum) {
        displayMessage(`Number is TOO low. Random number was ${randNum}`)
    } else if(guess > randNum) {
        displayMessage(`Number is TOO high. Random number was ${randNum}`)
    }
}

let displayGuess = (guess) => {
    userInput.value = ''
    prevGuesses.innerHTML += `${guess},`
    attempt++
    remGuesses.innerHTML = `${11 - attempt }`
}

let displayMessage = (message) => {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

const endGame = () => {
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id='newGame'>Start new Game</h2>`
    resultParas.appendChild(p)
    playGame = false
    newGame()
}

const newGame = () => {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.style.cursor = 'pointer'
    newGameButton.addEventListener('click', (e) => {
        randNum = Math.floor(Math.random() * 100 + 1)
        prevGuess = []
        attempt = 1
        prevGuesses.innerHTML = ''
        lowOrHi.innerHTML = ''
        remGuesses.innerHTML = `${11 - attempt }`
        userInput.removeAttribute('disabled')
        resultParas.removeChild(p)
        playGame = true
    })
}