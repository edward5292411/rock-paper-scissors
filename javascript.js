/* Create variables for player selection and computer selection */
/* User inputs rock, paper or scissor via prompt () */
/* Return randomly computer selection of rock, paper pr scissor */
/* Write a playRound function to compare player selection with computer selection */
/* Return the results of playRound, not console.log() them */
/* Put previous playRound function inside a game function to play a 5 round game that keeps score and reports winner or loser at the end */



let playerScore = 0;
let computerScore = 0;
let moves = 0;

let rockBtn = document.querySelector('#rock');
let paperBtn = document.querySelector('#paper');
let scissorsBtn = document.querySelector('#scissors');

let div = document.querySelector('div');
let scorePara = document.createElement('p');
let msgPara = document.createElement('p');

div.document.body.appendChild(scorePara);
div.document.body.appendChild(msgPara);

let playerSelection = [rockBtn, paperBtn, scissorsBtn];
let computerSelection = getComputerChoice();

rockBtn.addEventListener('click', () => getPlayerChoice('rock'));
paperBtn.addEventListener('click', () => getPlayerChoice('paper'));
scissorsBtn.addEventListener('click', () => getPlayerChoice('scissors'));

function getPlayerChoice(playerSelection){
    playRound(playerSelection, computerSelection);
}

function getComputerChoice(){
        let arr = ["rock", "paper", "scissors"];
        return arr[Math.floor(Math.random() * arr.length)];
    }
    
function playRound(playerSelection, computerSelection){
        if(playerSelection === computerSelection){
            msgPara.textContent = "A Tie!";
        } else if((playerSelection === "\rock\i") && (computerSelection === "scissors")){
            msgPara.textContent = "You Win! Rock beats Scissors";
            playerScore++;
        } else if((playerSelection === "\paper\i") && (computerSelection === "rock")){
            msgPara.textContent = "You Win! Paper beats Rock";
            playerScore++;
        } else if((playerSelection === "\scissors\i") && (computerSelection === "paper")){
            msgPara.textContent = "You Win! Scissors beat paper";
            playerScore++;
        } else if((playerSelection === "\scissors\i") && (computerSelection === "rock")){
            msgPara.textContent = "You lose! Rock beats scissors";
            computerScore++;
        } else if((playerSelection === "\rock\i") && (computerSelection === "paper")){
            msgPara.textContent = "You lose! Paper beats rock";
            computerScore++;
        } else {
            msgPara.textContent = "You lose! Scissors beat paper";
            computerScore++;
        }
}

console.log(playRound(playerSelection, computerSelection));
