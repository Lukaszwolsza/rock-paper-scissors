const userInputChoice = prompt("ROCK, PAPER OR SCISSORS ?", "").toUpperCase();
const startGame = document.getElementById("btnSender");
let pcChoice;

const SCISSORS = "SCISSORS";
const PAPER = "PAPER";
const ROCK = "ROCK";


const USER_WIN = "You WIN !";
const PC_WIN = "You lose :c ";
const DRAW = "It's a draw ! ";

startGame.addEventListener("click", () => {
    const pcRandomChoice = Math.random();
    if (pcRandomChoice < 0.34) {
        pcChoice = SCISSORS;
    } else if (pcRandomChoice < 0.66) {
        pcChoice = PAPER;
    } else if (pcRandomChoice <= 1) {
        pcChoice = ROCK;
    }

    if (userInputChoice === SCISSORS || userInputChoice === PAPER || userInputChoice === ROCK) {
        if ((userInputChoice === PAPER && pcChoice === ROCK) || (userInputChoice === SCISSORS && pcChoice === PAPER) || (userInputChoice === ROCK && pcChoice === SCISSORS)) {
            console.log(`You picked ${userInputChoice}, pc picked ${pcChoice}`);
            console.log(USER_WIN);
        } else if ((userInputChoice === PAPER && pcChoice === PAPER) || (userInputChoice === SCISSORS && pcChoice === SCISSORS) || (userInputChoice === ROCK && pcChoice === ROCK)) {
            console.log(`You picked ${userInputChoice}, pc picked ${pcChoice}`);
            console.log(DRAW);
        } else {
            console.log(`You picked ${userInputChoice}, pc picked ${pcChoice}`);
            console.log(PC_WIN);
        }
    } else {
        console.log("You've inputed valid type.");
    }
});