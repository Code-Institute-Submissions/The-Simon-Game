//Varibles
var onOffButton = false; 
var start = false; 
var strict = false; 
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

// Power Button to switch the game on and off. 
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

// Start Game Button to start the game or start a new game. 
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
            playerTurn();
        }
    }
});

// Strict Game Button to play a strict game.
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

// Start game function
function startGame(){
    console.log("Game starts")
    computerSequence.push(generateRandom())
    computerTurn();
};

// Reset game
function resetGame() {
    computerSequence = [];
    userSequence = [];
    level = 1;
};

// Generate a random color sequence every time the game starts
function generateRandom() {
    return Math.floor(Math.random() * 4) + 1;
};

// Computer turn
// 1. Loop through computersequence and for each number, play sound and light
function computerTurn() {
    var counter = 0;
    var interval = setInterval (function(){
        playWith(computerSequence[counter]);
        counter++;
        if (counter >= computerSequence.length) {
            clearInterval(interval);
        };
    },900);
    
};


function playWith(number){
    console.log(`Playing with number ${number}`)
    buttons[number-1].classList.add('active')
    setTimeout (function() {
        sounds[number-1].play()
        buttons[number-1].classList.remove('active')
    },700);
}


function getNumberAttributes(number){
    var vali = [];
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
            playWith(actualNumber);
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
    var promise = new Promise((resolve, reject) => {
        if (userSequence[userSequence.length-1] == computerSequence[computerSequence.length-1]){
            resolve ('Great ');
            setTimeout (function() {
                $('#counterBox').text(level);
                clearTimeout();
            },750);
            if (level == 20) {
                alert ('You Win!!');
                startGame();
            };
            next(); 
            level++;
            $('#counterBox').text('Yeah!');
        }else if(userSequence[userSequence.length-1] != computerSequence[computerSequence.length-1]){
            reject ('Sucks ');
            if (strict = (strict === true)){
                alert('Game Over!');
                startGame();
            };
            setTimeout (function() {
                $('#counterBox').text(level);
                clearTimeout();
                },750);
                computerTurn();
                $('#counterBox').text('Oops!');         
            };
        });
    promise.then((message) => {
    console.log(message + 'correct button was pressed');
    }).catch((error) =>{
    console.log(error + 'wrong button is pressed');
    });
};



//Next function
//1. to move the game process one step futher.
//2. adding one more button press to the array.
function next(){
     computerSequence.push(generateRandom())
    for (var i = 0; i < 20; i++) {
        computerTurn();     
        return;
    };
    
}

// game ends
//1. when the sequence s completed the game ends
function gameEnds() {
   
};