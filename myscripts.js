let playScore = 0;
let comScore = 0;
let playThrow = "";
let comThrow = "";

const rock = document.querySelector(".rockButton");
const paper = document.querySelector(".paperButton");
const scissors = document.querySelector(".scissorsButton");
const results= document.querySelector(".results")
const currentRun= document.querySelector(".currentRun")

rock.addEventListener('click', onRockClick);
paper.addEventListener('click', onPaperClick);
scissors.addEventListener('click', onScissorsClick);

function onRockClick() {
    playThrow = "rock";
    console.log("rock")
    game();
}


function onPaperClick() {
    playThrow = "paper";
    console.log("paper")
    game();
}

function onScissorsClick() {
    playThrow = "scissors";
    console.log("s")
    game();
}

function game() {
    playRound();
    results.textContent =(`Score: Player ${playScore}, Computer ${comScore}`);
    if (comScore>=5){
        results.textContent="Computer Wins!"
        currentRun.textContent=""
    }
    if (playScore>=5){
        results.textContent="Player Wins!"
        currentRun.textContent=""
    }
    if (comScore > playScore) {
        console.log("Computer Wins!");
    } else if (comScore < playScore) {
        console.log("Player Wins!");
    } else {
        console.log("It's a tie!");
    }
}

function getComputerChoice() {
    let comPick = Math.floor(Math.random() * 3);

    if (comPick === 0) {
        return "rock";
    } else if (comPick === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound() {
    playThrow = playThrow.toLowerCase();
    comThrow = getComputerChoice();
    if (playThrow === "rock") {
        if (comThrow === "paper") {
            comScore += 1;
            currentRun.textContent=("You Lose! Paper beats Rock");
        } else if (comThrow === "scissors") {
            playScore += 1;
            currentRun.textContent=("You Win! Rock beats Scissors");
        } else {
            currentRun.textContent=("It's a tie! Rock ties Rock");
            playRound();
        }
    } else if (playThrow === "paper") {
        if (comThrow === "scissors") {
            comScore += 1;
            currentRun.textContent=("You Lose! Scissors beats Paper");
        } else if (comThrow === "rock") {
            playScore += 1;
            currentRun.textContent=("You Win! Paper beats Rock");
        } else {
            currentRun.textContent=("It's a tie! Paper ties Paper");
            playRound();
        }
    } else if (playThrow === "scissors") {
        if (comThrow === "rock") {
            comScore += 1;
            currentRun.textContent=("You Lose! Rock beats Scissors");
        } else if (comThrow === "paper") {
            playScore += 1;
            currentRun.textContent=("You Win! Scissors beats Paper");
        } else {
            comScore += 1;
            currentRun.textContent=("It's a tie! Scissors ties Scissors");
            playRound();
        }
    } else {
        currentRun.textContent=("Player Choice Invalid: Pick Rock, Paper, or Scissors");
        playRound();
    }
    // Rest of your game logic...
}

// Initial game call
// game();
