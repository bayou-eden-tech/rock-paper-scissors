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
 

    let input = prompt("Enter a selection: Rock, Paper, or Scissors.");
    let userChoice = input.charAt(0).toUpperCase() + input.slice(1);
    

    if (userChoice == compChoice) {
        alert("Tie")
    } else if (( userChoice == 'Rock') && (compChoice == 'Scissors')) {
        alert("Rock beats Scissors! YOU WIN!")
    } else if (( userChoice == 'Rock') && (compChoice == 'Paper')) {
        alert("Paper beats Rock! YOU LOSE!")
    } else if (( userChoice == 'Paper') && (compChoice == 'Rock')) {
        alert("Paper beats Rock! YOU WIN!")
    } else if (( userChoice == 'Paper') && (compChoice == 'Scissors')) {
        alert("Scissors beats Paper! YOU LOSE!")
    } else if (( userChoice == 'Scissors') && (compChoice == 'Rock')) {
        alert("Rock beats Scissors! YOU LOSE!")
    } else if (( userChoice == 'Scissors') && (compChoice == 'Paper')) {
        alert("Scissors beats Paper! YOU WIN!") 
    }
}

getComputerChoice()