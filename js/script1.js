
var onOffButton = false; //Function 1.
var start = false; //Function 2.
var strict = false; //Function 3.
var computerTurn = [];
var playerTurn = [];
var simonIsPlaying = false;
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
    simonIsPlaying = false;
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

// simonSequence for random selection of colors.
function computerTurn() {
    start = true;
    simonIsPlaying = true;
    for (var i = 0; i < computerTurn.length; i++)
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
        clearInterval();
    },100);

    simonIsPlaying = false;
    return false;
}

function random() {
    return Math.floor(Math.random() * 4) + 1;
}

simonIsPlaying(random);
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
        if(!simonIsPlaying){
            playerTurn.green();
        }
});

//after clicking color buttons
function playerTurn(green) {
            start = true;
        if (start) {
    greenSound.play();
            $(green).addClass('brightColorGreen');
            setTimeout(function(){
                $(green).removeClass('brightColorGreen');
                },1000);
                if(playerTurn[playerTurn.length-1] != computerTurn[playerTurn.length-1]){
                play.error();
                setTimeout(function(){
                start();
                },2000);
                }else if(playerTurn[playerTurn.length] == computerTurn[playerTurn.length]){
                setTimeout(function(){
                start();
            },1000);
        }
    }
};


function playerTurn(red) {
            start = true;
        if (start) {
redSound.play();
            $('#red').addClass('brightColorRed');
             setTimeout(function(){
                $('#red').removeClass('brightColorRed');
                },1000);
                if(playerTurn[playerTurn.length-1] != computerTurn[playerTurn.length-1]){
                play.error();
                setTimeout(function(){
                start();
                },2000);
                }else if(playerTurn[playerTurn.length] == computerTurn[playerTurn.length]){
                setTimeout(function(){
                },1000);
            }
        }
    }
});

function playerTurn(yellow) {
            start = true;
        if (start) {
        yellowSound.play();
                $(yellow).addClass('brightColorYellow');
            setTimeout(function(){
                $(yellow).removeClass('brightColorYellow');
            },1000);
                if(playerTurn[playerTurn.length-1] != computerTurn[playerTurn.length-1]){
                play.error();
                setTimeout(function(){
                start();
           },2000);
           }else if(playerTurn[playerTurn.length] == computerTurn[playerTurn.length]){
                setTimeout(function(){
                start();
           },1000);
        }
    }
};

function playerTurn(blue) {
            start = true;
        if (start) {
blueSound.play();
            $(blue).addClass('brightColorBlue');
             setTimeout(function(){
                $(blue).removeClass('brightColorBlue');
                },1000);
                if(playerTurn[playerTurn.length-1] != computerTurn[playerTurn.length-1]){
                play.error();
                setTimeout(function(){
                start();
                },2000);
                }else if(playerTurn[playerTurn.length] == computerTurn[playerTurn.length]){
                setTimeout(function(){
                    start();
                },1000);
            }
        }
   };

 //When computer plays, it calls functions from here



       function simonIsPlaying(green){
                            start = true;
                            if (start) {
                            greenSound.play();
                            $(green).addClass("brightColorGreen");
                            setTimeout(function(){
                            $(green).removeClass("brightColorGreen");
                            },1000);
                            computerTurn();
                            playerTurn();
                            };
       };
        function simonIsPlaying(red){
                    start = true;
        if (start) {
                           redSound.play();
                           $('#red').addClass("brightColorRed");
                            setTimeout(function(){
                            $('#red').removeClass("brightColorRed");
                            },1000);
                            }
                            computerTurn();
                            playerTurn();
                            };

        function simonIsPlaying(yellow){
                    start = true;
        if (start) {
                            yellowSound.play();
                            $(yellow).addClass("brightColorYellow");
                            setTimeout(function(){
                            $(yellow).removeClass("brightColorYellow");
                            },1000);
                            computerTurn();
                            playerTurn();
                            };
        };
        function simonIsPlaying(blue){
                    start = true;
        if (start) {
                            blueSound.play();
                            $(blue).addClass("brightColorBlue");
                            setTimeout(function(){
                            $(blue).removeClass("brightColorBlue");
                            },1000);
                            computerTurn();
                            playerTurn();
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
                            }*/



//ready ends
/*

function resetGame() {
    computerTurn = [];
    playerTurn = [];
    level = 1;

    //simonSequence();
*/
