// Varibles

let onOffButton = false;
let start = false;
let strict = false;
let level = 1;
let colorBoxes;
let color = ['red', 'blue', 'yellow', 'green'];
let counterBox;

let red = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
let blue = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
let yellow = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
let green = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');

// Power Button

$('#power').click(function() {
  onOffButton = (onOffButton == false);
  if (onOffButton) {
    onOffButton = true;
    $('#counterBox').text('--');
  }
  else {
    onOffButton = false;
    $('#counterBox').text('');
  }
  start = false;
  strict = false;
  console.log('counterBox');
});

// Start Game Button

$('#start').click(function() {
  start = (start == false);
  if (start) {
    start = true;
    $('#start').css('background-color', 'white');
    $('#start').css('color', 'black');
    $('#counterBox').text('1');
  }
  else {
    start = false;
    $('#start').css('background-color', 'black');
    $('#start').css('color', 'white');
    $('#counterBox').text('--');
  }
  strict = false;
  level = 1;
  level++;
  simonSequence();
  startGame();
});

// Strict Game Button

$('#strict').click(function() {
  strict = (strict == false);
  if (strict) {
    strict = true;
    $('#strict').css('background-color', 'red');
    $('#strict').css('color', 'black');
  }
  else {
    strict = false;
    $('#strict').css('background-color', 'black');
    $('#strict').css('color', 'white');
  }
  level = 1;
  level++;
  simonSequence();
  startGame();
  console.log('strict');
});


function startGame() {
  $('#start').click(function() {
    for (var i = 0; i < 20; i++) { 
    color.push(Math.floor(Math.random() * 4) + 1);
    console.log('color');
    }
  });
}

// Simon Sequence

function simonSequence() {
  level = 1;
  level++;
  color;
  startGame();
  $('#counterBox').text('1');
}