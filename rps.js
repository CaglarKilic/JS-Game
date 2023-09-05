const rps = ["Rock", "Paper", "Scissors"]
let score = 0
let pc = 0

function getComputerChoice() {
    let index = Math.floor(Math.random() * 3)

    return rps[index]
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
}

function playRound(playerSelection) {
    let player = capitalize(playerSelection)
    let computer = capitalize(getComputerChoice())

    let playerIndex = rps.indexOf(player)
    let computerIndex = rps.indexOf(computer)

    return resultMessage(playerIndex, computerIndex)
}

function resultMessage(player, computer) {
    let diff = (player - computer + 3) % 3

    switch (diff) {
        case 0:
            return "Draw"
        case 1:
            score++
            return "You win! " + rps[player] + " beats " + rps[computer]
        case 2:
            pc++
            return "You lose! " + rps[computer] + " beats " + rps[player]
    }
}

function game() {
    score = 0
    pc = 0
    while (score < 5 && pc < 5) {
        playRound(prompt())
        console.log(score, pc)
    }
    console.log("Final score: " + score + " - " + pc)
}

function clickEvent() {
    const selection = this.textContent
    const msg = playRound(selection)
    const res = document.querySelector(".result")
    res.textContent = msg + ".\nScore: " + score + " - " + pc
    if (pc == 5 || score == 5) {
        res.textContent += "\n Game over."
        pc = 0
        score = 0
    }
}

// game()

const buttons = document.querySelectorAll("button")
buttons.forEach((button) => button.addEventListener('click', clickEvent))