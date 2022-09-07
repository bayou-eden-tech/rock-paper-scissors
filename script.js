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
    } else if ((userChoice == 'rock') && (compChoice == 'Scissors')) {
        alert("Rock beats Scissors! YOU WIN!")
    } else if ((userChoice == 'rock') && (compChoice == 'Paper')) {
        alert("Paper beats Rock! YOU LOSE!")
    } else if ((userChoice == 'paper') && (compChoice == 'rock')) {
        alert("Paper beats Rock! YOU WIN!")
    } else if ((userChoice == 'paper') && (compChoice == 'scissors')) {
        alert("Scissors beats Paper! YOU LOSE!")
    } else if ((userChoice == 'scissors') && (compChoice == 'rock')) {
        alert("Rock beats Scissors! YOU LOSE!")
    }else if ((userChoice == 'scissors') && (compChoice == 'paper')) {
        alert("Scissor beat Paper! YOU WIN!") 
    }
}

getComputerChoice()