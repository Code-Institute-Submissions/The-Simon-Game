// Varibles

var onOffButton = false;
var start = false;
var strict = false;
var level = 0;
var color = ['red', 'blue', 'yellow', 'green'];
var counterBox;
var simonSequence;
var startGame;
var $;


var red = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
var blue = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
var yellow = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
var green = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');

// Power Button

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
        $('#counterBox').text('');
    }
    start = false;
});

// Start Game Button

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

// Strict Game Button

$('#strict').click(function() {
    strict = (strict === false);
    if (strict) {
        strict = true;
        $('#strict').css('background-color', 'red');
        $('#strict').css('color', 'black');
    } else {
        $('#strict').css('background-color', 'black');
        $('#strict').css('color', 'white');
    }
    onOffButton = false;
    start = alse;
    level = 0;
    level++;
    simonSequence();
});



// Simon Sequence

function simonSequence() {
    for (var i = 0; i < 20; i++);
    level = (i + 1);
    var colorBoxes = Math.floor(Math.random() * 4) + 1;
    color[colorBoxes];
    console.log();
}

// function playerSequence


// function error
