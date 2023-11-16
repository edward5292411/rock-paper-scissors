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
console.log(getComputerChoice());