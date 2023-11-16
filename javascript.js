/* Create variables for player selection and computer selection */
/* User inputs rock, paper or scissor via prompt () */
/* Return randomly computer selection of rock, paper pr scissor */
/* Write a playRound function to compare player selection with computer selection */
/* Return the results of playRound, not console.log() them */
/* Put previous playRound function inside a game function to play 5 round game that keeps score and reports winner or loser at the end */

let arr = ["rock", "paper", "scissor"];
function getComputerChoice(){
    return arr[Math.floor(Math.random() * arr.length)];
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return "A Tie!";
    } else if((playerSelection = "\rock\i") && (computerSelection = "scissor")){
        return "You Win! Rock beats Scissor";
    } else if((playerSelection = "\paper\i") && (computerSelection = "rock")){
        return "You Win! Paper beats Rock";
    } else if((playerSelection = "\scissor\i") && (computerSelection = "paper")){
        return "You Win! Scissor beats Paper";
    } else if((playerSelection = "\scissor\i") && (computerSelection = "rock")){
        return "You lose! Rock beats Scissor";
    } else if((playerSelection = "\rock\i") && (computerSelection = "paper")){
        return "You lose! Paper beats Rock";
    } else {
        return "You lose! Scissor beats Paper";
}

let playerSelection = prompt("What's your selection? Enter either Paper, Rock or Scissors", "");
let computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));