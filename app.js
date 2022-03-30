const computer = document.getElementById("computer-area")
const player = document.getElementById("player-area")
const result = document.getElementById("result")
const playerScoreElement = document.getElementById('playerScore')
const computerScoreElement = document.getElementById('computerScore')
const possibleChoices = document.querySelectorAll('button')
const allChoices = {
    'rock': './assets/rock.jpg',
    'paper': './assets/paper.png',
    'scissor': './assets/scissor.png'
}

let playerScore = 0;
let computerScore = 0;
let computerChoice;
let playerChoice;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    playerChoice = {
        'name': e.target.id,
        'img': allChoices[e.target.id]
    }
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    let choiceArray = Object.keys(allChoices)
    const randomNumber = Math.floor(Math.random() * choiceArray.length)
    let choice = choiceArray[randomNumber]
    computerChoice = {
        'name': choice,
        'img': allChoices[choice]
    }
}

function getResult() {
    if (computerChoice['name'] == playerChoice['name'])
        resultString = 'It is a Draw'
    else if (playerChoice['name'] == 'rock' && computerChoice['name'] == 'scissor') {
        resultString = 'Player Wins!!'
        playerScore++;
    }
    else if (playerChoice['name'] == 'paper' && computerChoice['name'] == 'rock') {
        resultString = 'Player Wins!!'
        playerScore++;
    }
    else if (playerChoice['name'] == 'scissor' && computerChoice['name'] == 'paper') {
        resultString = 'Player Wins!!'
        playerScore++;
    }
    else {
        resultString = 'Computer Wins!!'
        computerScore++;
    }
    
    player.style.backgroundImage = `url(${playerChoice['img']})`
    computer.style.backgroundImage = `url(${computerChoice['img']})`

    result.innerText = resultString;
    playerScoreElement.innerText = playerScore;
    computerScoreElement.innerText = computerScore;
}