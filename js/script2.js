//Varibles

var onOffButton = false; //Function 1.
var start = false; //Function 2.
var strict = false; //Function 3.
var level = 0;
var color = ['red', 'blue', 'yellow', 'green'];
var sound = [
redSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
blueSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
yellowSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'),
greenSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3')
];

// Power Button to switch the game on and off. Function 1.
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

// Start Game Button to start the game or start a new game. Function 2.
$('#start').click(function() {
    start = (start === false);
    if (onOffButton) {
        start = true;
        if (start) {
            $('#start').css('background-color', 'white');
            $('#start').css('color', 'black');
            $('#counterBox').text('1');
            resetGame();
        }
    }
});

// Strict Game Button to play a strict game. Function 3.
$('#strict').click(function() {
    strict = (strict === false);
    if (onOffButton) {
       strict = true;
       if (strict) {
        $('#strict').css('background-color', 'red');
        $('#strict').css('color', 'black');
        resetGame();
       }
    } else {
       strict = false;
       $('#strict').css('background-color', 'black');
       $('#strict').css('color', 'white');
    }
});

// Reset game
function resetGame() {
    computerTurn = [];
    playerTurn = [];
    level = 1;
    $('#counterBox').text('1');
};

// Computer turn
function computerTurn() {
1. select random color.
2. play the sound of that color.
3. highlight the selected color.
};

// Player turn
function playerTurn() {
1. click on highlighted color
2. when the highlighted is clicked to highlight the color
3. play the sound of that color when clicked   
};

// Check function
function check() {
1. to check if the right color was clicked
2. if right color was click move to next sequence
3. if wrong color was clicked start sequence over
4. if in strict mode when wrong color is clicked the game ends
};

// random color selector
function random() {
1. to generate a random color sequence every time the game starts
};

// game ends
function gameEnds() {
1. when the sequence s completed the game ends
}