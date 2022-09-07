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
            compChoice = "Scissors"
    }

console.log(compChoice)
 

    let userChoice = prompt("Enter a selection: Rock, Paper, or Scissors.");

    if (userChoice == compChoice) {
        alert("Tie")
    } else if ((userChoice == 'rock' || 'Rock') && (compChoice == 'Scissors')) {
        alert("Rock beats Scissors! YOU WIN!")
    } else if ((userChoice == 'rock' || 'Rock') && (compChoice == 'Paper')) {
        alert("Paper beats Rock! YOU LOSE!")
    } else if ((userChoice == 'paper' || 'Paper') && (compChoice == 'Rock')) {
        alert("Paper beats Rock! YOU WIN!")
    } else if ((userChoice == 'paper' || 'Paper') && (compChoice == 'Scissors')) {
        alert("Scissors beats Paper! YOU LOSE!")
    } else if ((userChoice == 'scissors' || 'Scissors') && (compChoice == 'Rock')) {
        alert("Rock beats Scissors! YOU LOSE!")
    } else if ((userChoice == 'scissors' || 'Scissors') && (compChoice == 'Paper')) {
        alert("Scissors beats Paper! YOU WIN!") 
    }
}

getComputerChoice()