//letibles
let onOffButton = false; 
let start = false; 
let strict = false;
let win = false; 
let computerSequence = [];
let userSequence = [];
let level = 0;
let redSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
let blueSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
let yellowSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
let greenSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
let sounds = [redSound, blueSound, yellowSound, greenSound];
let redButton = document.getElementById('red');
let blueButton = document.getElementById('blue');
let yellowButton = document.getElementById('yellow');
let greenButton = document.getElementById('green');
let buttons = [redButton, blueButton, yellowButton, greenButton];
let colors = ['red', 'blue', 'yellow', 'green'];

/* Power Button.
   Clicking on the power button will enable you to click on the start and strict buttons.
*/
 $('#power').click(function() {
    onOffButton = (onOffButton === false);
    if (onOffButton) {
        $('#power').css('background-color', 'green');
        $('#power').css('color', 'white');
        $('#counterBox').text('--');
    } else {
        $('#power').css('background-color', 'red');
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

/* Start Game Button.
   To start the game or resets the game to start a new game. 
*/
   $('#start').click(function() {
    if (onOffButton) {
        start = true;
        if (start) {
            $('#start').css('background-color', 'white');
            $('#start').css('color', 'black');
            $('#counterBox').text('1');
            reset();
        }
    }
});

/* Strict Game Button
   To play a strict game.
*/
   $('#strict').click(function() {
    strict = (strict === false);
    if (onOffButton && start) {
       strict = true;
       if (strict) {
        $('#strict').css('background-color', 'red');
        $('#strict').css('color', 'black');
       }
    } else {
       $('#strict').css('background-color', 'black');
       $('#strict').css('color', 'white');
    }
});

/* Start game.
   Start to run the computerSequence at a random sequence.
*/
function startGame() {
    computerSequence.push(generateRandom());
    computerTurn();
}

/* Reset.
  Reset function that is placed in the start function to reset the game.
*/
function reset() {
    resetGame();
    startGame();
    playerTurn();
}

/* Reset game.
   ResetGame will clear both Sequences and start the level at level 1.
*/
function resetGame() {
    computerSequence = [];
    userSequence = [];
    win = false;
    level = 1;
    counter = 1;
}

// Generate a random color sequence every time the game starts
function generateRandom() {
    return Math.floor(Math.random() * 4) + 1;
}

/* Computer turn.
   Loop through computersequence and for each number, play sound and light
*/
function computerTurn() {
    let counter = 0;
    let interval = setInterval (function() {
        playWith(computerSequence[counter]);
        counter++;
        if (counter >= computerSequence.length) {
            clearInterval(interval);
        }
    },1700);
    console.log('computerTurn');
}

function playWith(number) {
    buttons[number-1].classList.add('active');
    setTimeout (function() {
        sounds[number-1].play();
        buttons[number-1].classList.remove('active');
    },750);
    console.log('playwith');
}

function getNumberAttributes(number) {
    let vali = [];
    switch (number) {
        case 1:
            vali = [sounds[0], buttons[0], colors[0]];
        case 2:
            vali =  [sounds[1], buttons[1], colors[1]];
        case 3:
            vali =  [sounds[2], buttons[2], colors[2]];
        case 4:
            vali =  [sounds[3], buttons[3], colors[3]];
    }
    return vali;
}

/* Player turn.
   Click on highlighted color.
   When the highlighted is clicked to highlight the color.
   Play the sound of that color when clicked.
   Checks what buttons the player has clicked and moves to the next step.
*/
function playerTurn() {
    buttons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            let id = event.target.id;
            let number = colors.indexOf(id);
            let actualNumber = number + 1;
            userSequence.push(actualNumber);
            playWith(actualNumber);
            check();
            nextStep();
        });
    });
    console.log('playerTurn');
}

/* Next step.
   Compares the players length of the array to the computers length, if the same than adds another button to the sequence
   Adds one level.
*/
function nextStep() {
    if (userSequence.length == computerSequence.length) {
        userSequence = [];
        next(); 
        level++;
    }
}

/* Check function.
   To check if the right color was clicked.
   If right color was click move to next sequence.
   If wrong color was clicked start sequence over.
   If in strict mode when wrong color is clicked the game ends.
*/
function check() {
    let userStage = userSequence.length-1;
    if (userSequence[userStage] == computerSequence[userStage]) {
        setTimeout (function() {
            $('#counterBox').text(level);
            clearTimeout();
        },750);
        $('#counterBox').text('Yeah!');
        if (level == 5) {
            winner();
        }
    }else {
        setTimeout (function() {
            $('#counterBox').text(level);
            clearTimeout();
        },750); 
        $('#counterBox').text('Oops!');
        if (strict === true) {
            setTimeout (function() {
                alert('Game Over!');
                clearTimeout();
            },800);
            reset();
        }
        computerTurn();
        userSequence = [];   
    }
}

/* Next function
   To move the game process one step futher.
   Adding one more button press to the array.
*/
function next() {
    computerSequence.push(generateRandom());
    computerTurn();        
}

/*Winner function
  Checks if the userSequence.length is the same as the level to
  make them a winner and resets the game.
*/
function winner() {
    if (userSequence.length === level) {
        win = true;
        setTimeout (function() {
            alert ('You Win!!');
            clearTimeout();
        },800);
        reset();
    }
}