const rps = ["Rock", "Paper", "Scissors"]
let score = 0
let count = 5

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
            count--
            return "Draw"
        case 1:
            score++
            return "You win! " + rps[player] + " beats " + rps[computer]
        case 2:
            return "You lose! " + rps[computer] + " beats " + rps[player]
    }
}

function game() {
    score = 0
    count = 5
    for (let i = 0; i < 5; i++) {
        let p = prompt()
        console.log(playRound(p))
    }
    console.log("Final score: " + score + " - " + (count - score))
}

game()