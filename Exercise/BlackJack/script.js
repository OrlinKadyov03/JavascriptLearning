let player = {
    name: "Orlin",
    chips: 666
}


let cards = []
let sum = 0
let hasblackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEL = document.getElementById("sum-el")
let cardEl = document.querySelector("#cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {

    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
        return randomNumber
    }
}
function startgame() {
    let isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    rendergame()
}
function rendergame() {
    cardEl.textContent = "Cards:"
    for (let i = 0; i < cards.length; i ++) {
        cardEl.textContent += cards[i] + " "
    }
    sumEL.textContent = "Sum:" + " " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got blackjack!"
        hasblackJack = true
    } else {
        message = "You lost your money!"
        isAlive = false
    }
    messageEl.textContent = message
  
}
function newcard() {
    if (isAlive === true && hasblackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        rendergame()
    }
}



