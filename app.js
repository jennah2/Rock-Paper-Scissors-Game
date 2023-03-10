// Show How To Play
const howToFunc = function(e){
    const howTo = document.querySelector(".how-to");
    if(howTo.style.display === "block"){
        howTo.style.display = "none";
    } else {
        howTo.style.display = "block";
    } 
};

// Random Computer Choice
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// 0 = rock, 1 = paper, 2 = scissors
let playerScore = 0, compScore = 0;
const compChoice = function(choice){
    console.log(choice)
    let results = []
    let comp = getRandomInt(3);
    const playerDisp = document.querySelector('#player');
    const compDisp = document.querySelector('#computer');
    console.log(comp);
    if (comp === 0){
        if (choice === "btn-paper") {
            results = ['win','rock','paper'];
            playerScore++;
        } else if (choice === "btn-scissors"){
            results = ['lose','rock','scissors'];
            compScore++;
        } else {
            results = ['tie','rock','rock'];
        }
    } else if (comp === 1){
        if (choice === "btn-scissors") {
            results = ['win','paper','scissors'];
            playerScore++;
        } else if (choice === "btn-rock"){
            results = ['lose','paper','rock'];
            compScore++;
        } else {
            results = ['tie','paper','paper'];
        }
    } else if (comp === 2){
        if (choice === "btn-rock") {
            results = ['win','scissors','rock'];
            playerScore++;
        } else if (choice === "btn-paper"){
            results = ['lose','scissors','paper'];
            compScore++;
        } else {
            results = ['tie','scissors','scissors'];
        }
    } else {
        alert('There was a problem!');
    }
    console.log(playerScore, compScore)
    playerDisp.innerHTML = playerScore;
    compDisp.innerHTML = compScore;
    console.log(results);
    return results;
};

const resultsMessage = function(results){
    // const winMessage = document.querySelector("#win-text");
    // const loseMessage = document.querySelector("#lose-text");
    // const tieMessage = document.querySelector("#tie-text");

    // if (results === 'win'){
    //     winMessage.style.display = "block";
    //     loseMessage.style.display = "none";
    //     tieMessage.style.display = "none";
    //     console.log(winMessage)
    // } else if (results === 'lose'){
    //     winMessage.style.display = "none";
    //     loseMessage.style.display = "block";
    //     tieMessage.style.display = "none";
    //     console.log(loseMessage)
    // } else if (results === 'tie'){
    //     winMessage.style.display = "none";
    //     loseMessage.style.display = "none";
    //     tieMessage.style.display = "block";
    //     console.log(tieMessage)
    // }

    const resultMsg = document.querySelector("#result");
    document.querySelector("#playerChoice").innerHTML = `You chose ${results[2]}`;
    document.querySelector("#compChoice").innerHTML = `Computer chose ${results[1]}`;

    if (results[0] === 'win'){
        resultMsg.innerHTML = 'You Win!';
        console.log(resultMsg);
    } else if (results[0] === 'lose'){
        resultMsg.innerHTML = 'You Lose...';
        console.log(resultMsg);
    } else if (results[0] === 'tie'){
        resultMsg.innerHTML = "It's A Tie";
        console.log(resultMsg);
    }
};

// Player Chooses
const clickedRock = function(e){
    let choice = document.querySelector("#btn-rock");
    choice = choice.getAttribute('id')
    let results = compChoice(choice);
    resultsMessage(results);
};
const clickedPaper = function(e){
    let choice = document.querySelector("#btn-paper");
    choice = choice.getAttribute('id')
    let results = compChoice(choice);
    resultsMessage(results);
};
const clickedScissors = function(e){
    let choice = document.querySelector("#btn-scissors");
    choice = choice.getAttribute('id')
    let results = compChoice(choice);
    resultsMessage(results);
};



