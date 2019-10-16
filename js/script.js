// Varibles

var onOffButton = false;
var start = false;
var strict = false;
var level = 0;
var simonSequence;
var startGame;
var computerTurn = [];
var playerTurn = [];
var brightColor = ['#ffb3b3', '#b3d9ff', '#ffffb3', '#b3ffb3'];
var red = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
var blue = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
var yellow = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
var green = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');

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
        resetGame()
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

// Generate random number between 1 and 4

function nextMove() {
    return Math.floor(Math.random() * 4) + 1;
};

// Add number to a computer sequence


// Light up all numbers in the computer sequence
function getNumber(number){
    switch (number) {
        case 1:
            return (redSound, redButton, color[0]);
            break;
        case 2:
            return (blueSound, blueButton, color[1]);
            break;
        case 3:
            return (yellowSound, yellowButton, color[2]);
            break;
        case 4:
            return (greenSound, greenButton, color[3]);
            break;
    }
}


// Pick a random number between 1 and 4

bright(nextMove)

function bright(number){
    let [sound, button, brightColor] = getNumber(number)
    button.style.backgroundColor = brightColor
    sound.play()
}



// function playerSequence


// function error
