// Varibles

var onOffButton = false;
var start = false;
var strict = false;
var level = 0;
var colorBoxes;
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

$('#power').click(function(event) {
    onOffButton = (onOffButton === false);
    if (onOffButton) {
        onOffButton = true;
        $('#power').css('background-color', 'green');
        $('#power').css('color', 'black');
        $('#counterBox').text('--');
    } else {
        onOffButton = false;
        start = false;
        $('#power').css('background-color', 'black');
        $('#power').css('color', 'white');
        $('#start').css('background-color', 'black');
        $('#start').css('color', 'white');
        $('#counterBox').text('');
    }
    start = false;
    strict = false;
    level = 0;
    level++;
    simonSequence();
});

// Start Game Button

$('#start').click(function(event) {
    start = (start === false);
    if (start) {
        start = true;
        $('#start').css('background-color', 'white');
        $('#start').css('color', 'black');
        $('#counterBox').text('1');
    }
    onOffButton = false;
    strict = false;
    level = 0;
    level++;
    simonSequence();
});

// Strict Game Button

$('#strict').click(function(event) {
    strict = (strict === false);
    if (strict) {
        strict = true;
        $('#strict').css('background-color', 'red');
        $('#strict').css('color', 'black');
    } else {
        strict = false;
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

// function playerSequence() {


// function error() {
