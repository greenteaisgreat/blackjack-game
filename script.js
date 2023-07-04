let firstCard = Math.floor(Math.random() * (12 - 2) + 2)
let secondCard = Math.floor(Math.random() * (12 - 2) + 2)

let cards = [firstCard, secondCard]
let sum = firstCard + secondCard

let hasBlackJack = false
let isAlive = true
let isStarted = false

let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let resetEl = document.getElementById("reset-btn")

function startGame() {
    isStarted = true;
    renderGame()
}

function renderGame() {
    cardsEl.textContent = `Cards: ${cards}`
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
        messageEl.textContent = message
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        messageEl.textContent = message
        hasBlackJack = true
        resetEl.style.opacity = 1
        resetEl.style.visibility = visible
    } else {
        message = "You're out of the game!"
        messageEl.textContent = message
        isAlive = false
        resetEl.style.opacity = 1
        resetEl.style.visibility = visible
    }
}


function newCard() {
     if (isStarted === false) {
        messageEl.textContent = `Press 'Start Game' first!`
        return
     }
     else if (!isAlive) {
         messageEl.textContent = message
         return
     }
     else if (hasBlackJack) {
         messageEl.textContent = message
         return
     }
    let card = Math.floor(Math.random() * (12 - 2) + 2)
    sum += card
    cards.push(card)
    renderGame()
 }

 function resetGame () {

 }