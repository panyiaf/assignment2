let randomNum = Math.round(Math.random());
let choice = prompt('Heads or Tails');
let coinFlipResults;

if (randomNum < 0.5) {
    coinFlipResults = 'Heads';
    document.write('The number is: ' + randomNum + '<br> and random coin flip is: ' + coinFlipResults + ' <br> and my choice is: ' + choice);
    if (choice === 'Heads' || choice === 'heads'){
        alert('The flip was heads and you chose heads...you win!');
    } else if (choice === 'Tails' || choice === 'tails'){
        alert('The flip was heads but you chose tails...you lose!');
    } else {
        alert('You typed incorrectly. Please try again!');
    }
} else {
    coinFlipResults = 'Tails';
    document.write('The number is: ' + randomNum + '<br> and random coin flip is: ' + coinFlipResults + ' <br> and my choice is: ' + choice);
    if (choice === 'Heads' || choice === 'heads'){
        alert('The flip was tails but you chose heads...you lose!');
    } else if (choice === 'Tails' || choice === 'tails'){
        alert('The flip was tails and you chose tails...you win!');
    } else {
        alert('You typed incorrectly. Please try again!');
    }
}