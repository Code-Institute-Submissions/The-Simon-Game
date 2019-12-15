//Varibles
var onOffButton = false; //Function 1.
var start = false; //Function 2.
var strict = false; //Function 3.
var computerSequence = [];
var userSequence = []
var level = 0;
var redSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
var blueSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3')
var yellowSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3')
var greenSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3')
var sounds = [redSound, blueSound, yellowSound, greenSound];
var redButton = document.getElementById('red');
var blueButton = document.getElementById('blue');
var yellowButton = document.getElementById('yellow');
var greenButton = document.getElementById('green');
var buttons = [redButton, blueButton, yellowButton, greenButton];
var colors = ['red', 'blue', 'yellow', 'green'];

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
            startGame();
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
       }
    } else {
       strict = false;
       $('#strict').css('background-color', 'black');
       $('#strict').css('color', 'white');
    }
});
// Reset game
function resetGame() {
    computerSequence = [];
    level = 1;
};

// Generate a random color sequence every time the game starts
function generateRandom() {
    return Math.floor(Math.random() * 4) + 1;
};

function playWith(number){
    console.log(`Playing with number ${number}`)
    let [sound, button, color] = getNumberAttributes(number)
    button.classList.add('active')
    setTimeout(function(){
        sound.play()
        button.classList.remove('active')
    }, 700)

}

// Computer turn
// Loop through computersequence and for each number, play sound and light
function computerTurn() {
    computerSequence.forEach(function (number, index) {
        playWith(number, index);
    })
    nextTurn();
};


function startGame(){
    console.log("Game starts")
    computerSequence.push(generateRandom())
    computerTurn()
    playerTurn()
};

function getNumberAttributes(number){
    switch (number) {
        case 1:
            return [sounds[0], buttons[0], colors[0]];
        case 2:
            return [sounds[1], buttons[1], colors[1]];
        case 3:
            return [sounds[2], buttons[2], colors[2]];
        case 4:
            return [sounds[3], buttons[3], colors[3]];
    }
};

// Player turn
// 1. click on highlighted color
// 2. when the highlighted is clicked to highlight the color
// 3. play the sound of that color when clicked
function playerTurn() {
    buttons.forEach(function(button){
        button.addEventListener('click', function(event){
            let id = event.target.id;
            console.log(`ID clicked ${id}`)
            let number = colors.indexOf(id)
            let actualNumber = number + 1
            userSequence.push(actualNumber)
            playWith(actualNumber)
            check();
        })
    })
};

// Check function
//1. to check if the right color was clicked
//2. if right color was click move to next sequence
//3. if wrong color was clicked start sequence over
//4. if in strict mode when wrong color is clicked the game ends
function check() {
    if (userSequence[userSequence.length-1] == computerSequence[computerSequence.length-1]){
        nextTurn();
        console.log('correct button was pressed');
    }else if(userSequence[userSequence.length-1] != computerSequence[computerSequence.length-1]){
        console.log('wrong button is pressed');
    };
     
}

//Next function
//1. to move the game process one step futher.
//2. adding one more button press to the array.
function nextTurn() {
for (var i = 0; i < computerSequence; i++) {
    computerSequence[i];
    level++;
    }
    console.log(computerSequence.length);
    console.log(userSequence.length);
}

// game ends
function gameEnds() {
//1. when the sequence s completed the game ends
};