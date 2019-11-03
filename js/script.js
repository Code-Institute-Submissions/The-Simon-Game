// Varibles

var onOffButton = false;
var start = false;
var strict = false;
var level = 0;
var simonSequence;
var startGame;
var computerTurn = [];
var playerTurn = [];
var button = ['redButton', 'blueButton', 'yellowButton', 'greenButton'];
var color = ['red', 'blue', 'yellow', 'green'];
var brightColor = ['#ffb3b3', '#b3d9ff', '#ffffb3', '#b3ffb3'];
var sound = ['redSound', 'blueSound', 'yellowSound', 'greenSound'];
var redSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
var blueSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
var yellowSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
var greenSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');

var redButton = document.getElementById('red');
var blueButton = document.getElementById('blue');
var yellowButton = document.getElementById('yellow');
var greenButton = document.getElementById('green');

// Power Button to switch the game on and off

$('#power').click(function() {
    onOffButton = (onOffButton === false);
    if (onOffButton) {
        $('#power').css('background-color', 'green');
        $('#power').css('color', 'black');
        $('#counterBox').text('--');
    } else {
        $('#power').css('background-color', 'black');
        $('#power').css('color', 'white');
        $('#start').css('background-color', 'black');
        $('#start').css('color', 'white');
        $('#strict').css('background-color', 'black');
        $('#strict').css('color', 'white');
        $('#counterBox').text('');
    }
    start = false;
    strict = false;
});

// Start Game Button to start the game or start a new game

$('#start').click(function() {
    if (onOffButton) {
        start = true;
        if (start) {
        $('#start').css('background-color', 'white');
        $('#start').css('color', 'black');
        resetGame();
        simonSequence();
    }
    }
});

// Strict Game Button to play a strict game

$('#strict').click(function() {
    strict = (strict === false);
   if (onOffButton) {
       strict = true;
       if (strict) {
        $('#strict').css('background-color', 'red');
        $('#strict').css('color', 'black');
        resetGame()
       } else {
       strict = false;
       $('#strict').css('background-color', 'black');
       $('#strict').css('color', 'white');
   }
   }
});

function resetGame() {
    computerTurn = [];
    playerTurn = [];
    level = 1;
    $('#counterBox').text('1');
    simonSequence();
}

// Simon Sequence

function simonSequence() {
    let random = nextMove()
    computerTurn.push(random)
    for (let i = 0; i < computerTurn.length, i++;){
        bright(computerTurn[i])
    }
};
/*
// Generate random number between 1 and 4

function nextMove() {
    return Math.floor(Math.random() * 4) + 1;
};

// Light up all numbers in the computer sequence
function getNumber(number){
    switch (number) {
        case 1:
            return (redSound, redButton, color[0]);
            setInterval(500);
            break;
        case 2:
            return (blueSound, blueButton, color[1]);
            setInterval(500);
            break;
        case 3:
            return (yellowSound, yellowButton, color[2]);
            setInterval(500);
            break;
        case 4:
            return (greenSound, greenButton, color[3]);
            setInterval(500);
            break;
    }
}

// Pick a random number between 1 and 4

bright(nextMove)

function bright(number){
    sound, button, brightColor = getNumber(number);
    button, color = brightColor;
    //sound.play();
}

// Add number to a computer sequence
function computerTurn() {

// computerTurn needs to light up the next button to the sequence
     computerTurn = nextMove;
     computerTurn = 20;

// needs the check if player has clicked on the correct button
    if (playerTurn == computerTurn){
        level++;
    } else (playerTurn != computerTurn)
    }


// if player has clicked the correct button computerTurn needs to add on more to the sequence

// if player has clicked the wrong button the computeTurn needs to replay the sequence

// if in strict mode if player clicked the wrong button the game is over.


// function playerSequence
//function playerTurn() {}

// Player needs to click on the correct button that light up


// function error
//function error() {}

// if player clicked the wrong button the computerSequence needs to replay last sequence

// if in strict mode if player clicked on wrong button the game is over and restarts from the beginning
*/