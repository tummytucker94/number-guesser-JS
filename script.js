let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget(){
    return Math.floor(Math.random()*10);
}


function compareGuesses(
    userGuess,
    computerGuess,
    secretTarget
){
    //human winning (being closer)
    if(Math.abs(secretTarget - userGuess) < Math.abs(secretTarget-computerGuess)){
        return true
    }

    //computer wins (being closer)
    else if(Math.abs(secretTarget-computerGuess) < Math.abs(secretTarget-userGuess)){
        return false;
    }

    //tie game
    else{
        return true;
    }
}

const updateScore = (winner) =>{
    if(winner === 'human'){
         humanScore++;
    }else{
         computerScore++;
    }
}

function advanceRound(){
    currentRoundNumber++;
}
