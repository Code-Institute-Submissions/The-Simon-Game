
var onOffButton = false; //Function 1.
var start = false; //Function 2.
var strict = false; //Function 3.
var computerTurn = [];
var playerTurn = [];
var color = ['red', 'blue', 'yellow', 'green'];
var sound = [
redSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
blueSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
yellowSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'),
greenSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3')
];
var brightColor = ['#ffb3b3', '#b3d9ff', '#ffffb3', '#b3ffb3'];

var redButton = document.getElementById('red');
var blueButton = document.getElementById('blue');
var yellowButton = document.getElementById('yellow');
var greenButton = document.getElementById('green');


$("document").ready(function(){
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
    }
    computerTurn();
    playerTurn();
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

/*function resetGame() {
    computerTurn = [];
    playerTurn = [];
    level = 1;
};

// simonSequence for random selection of colors.
function computerTurn() {
    start = true;
    for (var i = 0; i < computerTurn.length; i++) {
        setInterval(function() {
            if (!computerTurn[i] == 'red'){
                play.red();
            }else if (!computerTurn[i] == 'blue'){
                play.blue();
            }else if (!computerTurn[i] == 'yellow'){
                play.yellow();
            }else if (!computerTurn[i] == 'green'){
                play.green();
            }
        },100);
    };
};

function random() {
    return Math.floor(Math.random() * 4) + 1;
}
/*
function randomMoves (num) {
 for(let i = 0; i < num; i++){
  let moves = game.colors[Math.floor(Math.random() * game.colors.length)]
  game.computerMoves.push(moves);
  console.log(game.computerMoves);
}
return game.computerMoves;
}
*/
//Players turn on click on the color buttons
$("red").click(function(){
    if(!simonIsPlaying){
        playerTurn.red();
    }
});

$("blue").click(function(){
    if(!simonIsPlaying){
        playerTurn.blue();
    }
});

$("yellow").click(function(){
    if(!simonIsPlaying){
        playerTurn.yellow();
    }
});

$("green").click(function(){
    if('#green'){
        playerTurn.green();
    }
});

//after clicking color buttons
function computerTurn(color) {
    start = true;
    random();
    if (start) {
        sound[color.id].play();
        $('#' + color).addClass('active');
        setTimeout(function(){
            $('#' + color).removeClass('active');
        },450);
        if(playerTurn != computerTurn){
            setTimeout(function(){
            },750);
        }else if(playerTurn[playerTurn.length] == computerTurn[playerTurn.length]){
            setTimeout(function(){
            },800);
        }
    }
};

function computerTurn() {
    start = true;
    if (start) {
    redSound.play();
        $('#red').addClass('active');
        setTimeout(function(){
            $('#red').removeClass('active');
        },450);
        if(playerTurn != computerTurn){
            setTimeout(function(){
            },750);
        }else if(playerTurn == computerTurn){
            setTimeout(function(){
            },800);
        }
    }random();
};

function computerTurn() {
    start = true;
    if (start) {
        yellowSound.play();
        $('#yellow').addClass('active');
        setTimeout(function(){
            $('#yellow').removeClass('active');
        },450);
        if(playerTurn != computerTurn){    
            setTimeout(function(){    
            },750);
        }else if(playerTurn == computerTurn){
            setTimeout(function(){     
            },800);
        }
    }random();
};

function computerTurn() {
    start = true;
    if (start) {
        blueSound.play();
        $('#blue').addClass('active');
        setTimeout(function(){
            $('#blue').removeClass('active');
        },450);
        if(playerTurn != computerTurn){
            setTimeout(function(){
            },100);
        }else if(playerTurn == computerTurn){
            setTimeout(function(){
            },100);
        }
    }random();
};


//When computer plays, it calls functions from here

function playerTurn(){
    start = true;
    if (start) {
        greenSound.play();
    $('#green').addClass("active");
            setTimeout(function(){
                $('#green').removeClass("active");
            },1000);
        computerTurn();
    };
};
      
function playerTurn(){
    start = true;
    if (start) {
        redSound.play();
        $('#red').addClass("active");
            setTimeout(function(){
                $('#red').removeClass("active");
            },1000);
        computerTurn();
    };
};   

function playerTurn(){
    start = true;
    if (start) {
        yellowSound.play();
        $('#yellow').addClass("active");
            setTimeout(function(){
                ('#yellow').removeClass("active");
            },1000);
        computerTurn();                          
    };
};

function playerTurn() {
    start = true;
    if (start) {
        blueSound.play();
        $('#blue').addClass("active");
            setTimeout(function(){
                $('#blue').removeClass("active");
            },1000);
        computerTurn();
    };
};

/*
"error" : function(){
    $("body").addClass("onErrorClass");
        setTimeout(function(){
            $("body").removeClass("onErrorClass");
        },500);
    sequenceC = [];
    sequenceH = [];
    score = 0;
};
*/
//ready ends


});