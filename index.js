let arr = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let player = {
    name: "Waleed",
    chips: 150,
}

document.querySelector("#player-el").textContent = player.name + ": $" + player.chips

function getRandomValue() {
    let randomValue = Math.floor(Math.random() * 13) + 1;
    if (randomValue == 1) {
        return 11
    } else if (randomValue > 10) {
        return 10
    } else {
        return randomValue
    }
}

function startGame() {

    arr = []
    sum = 0
    isAlive = true
    arr[0] = getRandomValue()
    arr[1] = getRandomValue()
    sum = arr[0] + arr[1]
    renderGame()
}


function renderGame() {
    if (sum < 21) {
        message = "Do u want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }

    document.querySelector("#message-el").textContent = message
    document.querySelector("#sum-el").textContent = "Sum: " + sum

    let messagesss = "Cards: "

    for (let i = 0; i < arr.length; i++) {
        messagesss += arr[i] + " "
    }
    document.querySelector("#cards-el").textContent = messagesss
}

function newCard() {
    if (isAlive && !hasBlackJack) {
        console.log("Drawing a new card from the deck!")

        arr.push(getRandomValue())
        sum += arr[arr.length - 1]
        renderGame()
    }
}
