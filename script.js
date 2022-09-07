function getComputerChoice() {
   
    var array = ['Rock', 'Paper', 'Scissors'];
    let random = Math.floor(Math.random()*array.length);
    let choice = "";



    switch(random) {
        case 0:
            choice = "Rock";
            break;
        case 1:
            choice = "Paper";
            break;
        case 2:
            choice = "Scissors"
    }


console.log(choice)
 
}

getComputerChoice()