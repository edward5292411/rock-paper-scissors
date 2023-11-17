/* Create variables for player selection and computer selection */
/* User inputs rock, paper or scissor via prompt () */
/* Return randomly computer selection of rock, paper pr scissor */
/* Write a playRound function to compare player selection with computer selection */
/* Return the results of playRound, not console.log() them */
/* Put previous playRound function inside a game function to play a 5 round game that keeps score and reports winner or loser at the end */


let game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;

    let playGame = () => {
        let playerSelection = prompt("What is your selection? Type either Rock, Paper or Scissors.", "");
        let computerSelection = getComputerChoice();
    }

    function getComputerChoice(){
        let arr = ["rock", "paper", "scissors"];
        return arr[Math.floor(Math.random() * arr.length)];
    }
    
    function playRound(playerSelection, computerSelection){
        if(playerSelection === computerSelection){
            return "A Tie!";
        } else if((playerSelection = "\rock\i") && (computerSelection = "scissors")){
            return "You Win!";
        } else if((playerSelection = "\paper\i") && (computerSelection = "rock")){
            return "You Win!";
        } else if((playerSelection = "\scissors\i") && (computerSelection = "paper")){
            return "You Win!";
        } else if((playerSelection = "\scissors\i") && (computerSelection = "rock")){
            return "You lose!";
        } else if((playerSelection = "\rock\i") && (computerSelection = "paper")){
            return "You lose!";
        } else {
            return "You lose!";
        }
    }

}
