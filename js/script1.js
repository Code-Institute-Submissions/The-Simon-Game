
var onOffButton = false; //Function 1.
var start = false; //Function 2.
var strict = false; //Function 3.
var computerTurn = [];
var playerTurn = [];
var simonIsPlaying = false;
var color = ['red', 'blue', 'yellow', 'green'];
var sound = ['redSound', 'blueSound', 'yellowSound', 'greenSound'];
var redSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
var blueSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
var yellowSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
var greenSound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');

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
    computerTurn.push(color[random()-1]);
    simonIsPlaying = true;
    var i = 0;
    var intervalFunction = setInterval(function() {
        if (!computerTurn[0] == 'red'){
            play.red();
        }else if (!computerTurn[0] == 'blue'){
            play.blue();
        }else if (!computerTurn[0] == 'yellow'){
            play.yellow();
        }else if (!computerTurn[0] == 'green'){
            play.green();
        }
        i++
        if(i < 20){
            intervalFunction();
        }
    },100);

    simonIsPlaying = false;
    return false;
}

function random() {
    return Math.floor(Math.random() * 4) + 1;
}

//Players turn on click on the color buttons
$("#red").click(function(){
        if(!simonIsPlaying){
            playerTurn;
        }
});

$("#blue").click(function(){
        if(!simonIsPlaying){
            playerTurn;
        }
});

$("#yellow").click(function(){
        if(!simonIsPlaying){
            playerTurn;
        }
});

$("#green").click(function(){
        if(!simonIsPlaying){
            playerTurn;
        }
});

//after clicking color buttons
playerTurn = {
    "green" : function(){
        $("greenSound")[0].play();
            playerTurn.push("green");
            $("#green").addClass("active");
                            setTimeout(function(){
                                $("#green").removeClass("active");
                            },380);
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
    },
        "red" : function(){
                            $("redSound")[0].play();
                            playerTurn.push("#red");
                            $("#red").addClass("active");
                            setTimeout(function(){
                                $("#red").removeClass("active");
                            },380);
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
        },
        "yellow" : function(){
                            $("yellowSound")[0].play();
                            playerTurn.push("#yellow");
                            $("#yellow").addClass("active");
                            setTimeout(function(){
                                $("#yellow").removeClass("active");
                            },380);
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
                            },
        "blue" : function(){
                            $("blueSound")[0].play();
                            playerTurn.push("#blue");
                            $("#blue").addClass("active");
                            setTimeout(function(){
                                $("#blue").removeClass("active");
                            },380);
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
}

 //When computer plays, it calls functions from here
    play = {
        "green" : function(){
                            $("greenSound")[0].play();
                            $("#green").addClass("active");
                            setTimeout(function(){
                            $("#green").removeClass("active");
                            },500);
                            },
        "red" : function(){
                            $("redSound")[0].play();
                            $("#red").addClass("active");
                            setTimeout(function(){
                            $("#red").removeClass("active");
                            },500);
                            },
        "yellow" : function(){
                            $("yellowSound")[0].play();
                            $("#yellow").addClass("active");
                            setTimeout(function(){
                            $("#yellow").removeClass("active");
                            },500);
                            },
        "blue" : function(){
                            $("blueSound")[0].play();
                            $("#blue").addClass("active");
                            setTimeout(function(){
                            $("#blue").removeClass("active");
                            },500);
                            computerTurn = [];
                            playerTurn = [];
                            },
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

    }
})
//ready ends
/*

function resetGame() {
    computerTurn = [];
    playerTurn = [];
    level = 1;

    //simonSequence();
})*/
