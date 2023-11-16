/* Create variables for player selection and computer selection */
/* User inputs rock, paper or scissor via prompt () */
/* Return randomly computer selection of rock, paper pr scissor */
/* Write a playRound function to compare player selection with computer selection */
/* Return the results of playRound, not console.log() them */
/* Put previous playRound function inside a game function to play 5 round game that keeps score and reports winner or loser at the end */

let arr = ["rock", "paper", "scissors"];
function getComputerChoice(){
    return arr[Math.floor(Math.random() * arr.length)];
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return "A Tie!";
    } else if((playerSelection = "\rock\i") && (computerSelection = "scissors")){
        return "You Win! Rock beats Scissors";
    } else if((playerSelection = "\paper\i") && (computerSelection = "rock")){
        return "You Win! Paper beats Rock";
    } else if((playerSelection = "\scissor\i") && (computerSelection = "paper")){
        return "You Win! Scissors beat Paper";
    } else if((playerSelection = "\scissor\i") && (computerSelection = "rock")){
        return "You lose! Rock beats Scissors";
    } else if((playerSelection = "\rock\i") && (computerSelection = "paper")){
        return "You lose! Paper beats Rock";
    } else {
        return "You lose! Scissors beat Paper";
    }
}

let playerSelection = "rock";
let computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));