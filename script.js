function getComputerChoice() {
   
    var array = ['Rock', 'Paper', 'Scissors'];
    let random = Math.floor(Math.random()*array.length);
    let compChoice = "";

    switch(random) {
        case 0:
            compChoice = "Rock";
            break;
        case 1:
            compChoice = "Paper";
            break;
        case 2:
            compChoice = "Scissors";
            break;
    }
    return compChoice;

}
 
let userScore = 0
let compScore = 0
let round = 1

function playRound() {
    let input = prompt("Enter a selection: Rock, Paper, or Scissors.");
    let userChoice = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
    let compChoice = getComputerChoice();
    

    console.log(compChoice);

    if (userChoice == compChoice) {
        alert("Tie");
        round++;
    } else if ((( userChoice == 'Rock') && (compChoice == 'Scissors')) || 
              (( userChoice == 'Paper') && (compChoice == 'Rock')) ||
              (( userChoice == 'Scissors') && (compChoice == 'Paper'))) {
        alert(`${userChoice} beats ${compChoice}! YOU WIN!`);
        round++;
        userScore += 1;
    } else if ((( userChoice == 'Rock') && (compChoice == 'Paper')) ||
              (( userChoice == 'Paper') && (compChoice == 'Scissors')) ||
              (( userChoice == 'Scissors') && (compChoice == 'Rock'))) {
        alert(`${compChoice} beats ${userChoice}! YOU LOSE!`);
        round++;
        compScore++;
    } else if ( userChoice == "Dynamite" || userChoice == "Grenade") {
        alert("***FINISHER MOVE*** YOU WIN!");
        round++;
        userScore++;
    } else {
        alert("Invalid input")
    }
}

function game() {

    

    while ((userScore < 5) && (compScore < 5)) {

        playRound();
    
console.log(userScore);
console.log(compScore);
console.log(round);
}
}
game()