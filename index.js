const $buttonStonePlayer1 = document.querySelector('#button-stone-player-1')
const $buttonPaperPlayer1 = document.getElementById('button-paper-player-1')
const $buttonScissorsPlayer1 = document.querySelector('#button-scissors-player-1')

const $buttonStonePlayer2 = document.querySelector('#button-stone-player-2')
const $buttonPaperPlayer2 = document.querySelector('#button-paper-player-2')
const $buttonScissorsPlayer2 = document.querySelector('#button-scissors-player-2')

const $field1 = document.querySelector('#field-1')
const $field2 = document.querySelector('#field-2')

const $scorePlayer1 = document.querySelector('#score-player-1')
const $scorePlayer2 = document.querySelector('#score-player-2')

const $winnerField = document.querySelector('.winner-text')
const $resetButton = document.querySelector('.reset-button')
const $startButton = document.querySelector('.start-button')

let movePlayer1 = ''
let movePlayer2 = ''

let scorePlayer1 = 0
let scorePlayer2 = 0

let winner = ''

let gameStart = false

function player1Win() {
  scorePlayer1++
  $scorePlayer1.innerHTML = scorePlayer1
  winner = 'Jogador 1'
  printWinner()
  resetMoveVariables()
  setTimeout(resetBattlefield, 1000)
}

function player2Win() {
  scorePlayer2++
  $scorePlayer2.innerHTML = scorePlayer2
  winner = 'Jogador 2'
  printWinner()
  resetMoveVariables()
  setTimeout(resetBattlefield, 1000)
}

function draw() {
  winner = 'Ninguém'
  printWinner()
  resetMoveVariables()
  setTimeout(resetBattlefield, 1000)
}

function resetBattlefield() {
  $field1.innerHTML = ''
  $field2.innerHTML = ''
}

function resetMoveVariables() {
  movePlayer1 = ''
  movePlayer2 = ''
}

function resetScoreVariables() {
  scorePlayer1 = 0
  scorePlayer2 = 0
}

function verifyWinner() {
  if (movePlayer1 === 'stone' && movePlayer2 === 'paper') {
    player2Win()
  } else if (movePlayer1 === 'stone' && movePlayer2 === 'scissors') {
    player1Win()
  } else if (movePlayer1 === 'paper' && movePlayer2 === 'stone') {
    player1Win()
  } else if (movePlayer1 === 'paper' && movePlayer2 === 'scissors') {
    player2Win()
  } else if (movePlayer1 === 'scissors' && movePlayer2 === 'stone') {
    player2Win()
  } else if (movePlayer1 === 'scissors' && movePlayer2 === 'paper') {
    player1Win()
  } else if (movePlayer1 === movePlayer2) {
    draw()
  }
}

function printWinner() {
  $winnerField.textContent = `${winner} ganhou!`
}

function resetAll() {
  $winnerField.textContent = ''
  resetBattlefield()
  $scorePlayer1.textContent = '0'
  $scorePlayer2.textContent = '0'
  resetMoveVariables()
  resetScoreVariables()
}

$buttonStonePlayer1.addEventListener('click', function () {
  if (gameStart) {
    $field1.innerHTML = '<img src="images/stone.png">'
    movePlayer1 = 'stone'
    verifyWinner()
  }
})

$buttonPaperPlayer1.addEventListener('click', function () {
  if (gameStart) {
    $field1.innerHTML = '<img src="images/paper.png">'
    movePlayer1 = 'paper'
    verifyWinner()
  }
})

$buttonScissorsPlayer1.addEventListener('click', function () {
  if (gameStart) {
    $field1.innerHTML = '<img src="images/scissors.png">'
    movePlayer1 = 'scissors'
    verifyWinner()
  }
})


$buttonStonePlayer2.addEventListener('click', function () {
  if (gameStart) {
    $field2.innerHTML = '<img src="images/stone.png">'
    movePlayer2 = 'stone'
    verifyWinner()
  }
})

$buttonPaperPlayer2.addEventListener('click', function () {
  if (gameStart) {
    $field2.innerHTML = '<img src="images/paper.png">'
    movePlayer2 = 'paper'
    verifyWinner()
  }
})

$buttonScissorsPlayer2.addEventListener('click', function () {
  if (gameStart) {
    $field2.innerHTML = '<img src="images/scissors.png">'
    movePlayer2 = 'scissors'
    verifyWinner()
  }
})

$resetButton.addEventListener('click', function () {
  resetAll()
})

$startButton.addEventListener('click', function () {
  if (gameStart) {
    $startButton.textContent = 'Iniciar'
  } else {
    $startButton.textContent = 'Parar'
  }

  gameStart = !gameStart
})