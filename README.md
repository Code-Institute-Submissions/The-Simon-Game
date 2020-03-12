The Simon Game

The Simon Game is designed as a memory game. The Simon game will play a sequnce of color buttons that lights up and plays
a sound for the player to follow. The game will start when the player clicks on the start button and the game will start
with a single color button that will light up and play a sound, the player has to click on that color button. If the player
clicks on the correct button the game will add one more color button to the sequence,that the player remember to follow. 
When the player clicks on the wrong button the sequence will start again and the player can try again. From example if the
Simon Game sequence plays a red and green button, the player needs to click on the red and green button, if the player
clicks on a red and yellow button the game will play the same red and green button agian.

The Simon game has two different game Modes, the Normal game Mode and a Strict Mode. The Normal Mode is where the Simon
game will play a sequence and the player has to the click on the same sequence, if the player clicks the wrong button the
sequence will start from the beginning of that sequence. The Strict Mode is where the Simon Game will play a sequence and 
the player has to click on the same sequence, if the player clicks the wrong button in the sequence the game is over. 

                                       --------------------------------

User Excperience

User Story: I am presented with a random series of button presses.

User Story: Each time I input a series of button presses correctly, I see the same series of button presses but with an
additional step.

User Story: I hear a sound that corresponds to each button both when the series of button presses plays, and when I 
personally press a button.

User Story: If I press the wrong button, I am notified that I have done so, and that series of button presses starts again
to remind me of the pattern so I can try again.

User Story: I can see how many steps are in the current series of button presses.

User Story: If I want to restart, I can hit a button to do so, and the game will return to a single step.

User Story: I can play in strict mode where if I get a button press wrong, it notifies me that I have done so, and the game
restarts at a new random series of button presses.

User Story: I can win the game by getting a series of 20 steps correct. I am notified of my victory, then the game starts
over.

                                       --------------------------------


Features

In this project the buttons flash and the user is to copy the sequence and click the correct button.

You can change the mode from 'medium' to 'hard'.

You can reset the game throughout the game.

I have a counter so the user knows what level they are on throughout the game.

The coloured buttons change positions when you move on the next level in hard mode.

I have used a random function which will allow the game to use a unique sequence each time.

I have used 'start' and 'reset' buttons to let the user have control of the game.

                                       --------------------------------


Technologies Used

JQuery - I have used jQuery to simplify DOM manipulation Bootsrap - I have used bootsrap for icons and effects Font 
Awesome - I have used font awesome to add some different font onto my website. CSS - For styling the game HTML - For the
elements of the game

                                       --------------------------------


Testing

Does the game start when pressed the start button?
Does the levels section go up each time your on a new level?
Does the game play the random sequence for you to then press the correct button?
Does the game move on to the next level when completed last level correctly?
Does the game show an alert when failed the game?
Does the game show an alert when the game is won?
Does the game allow you to restart once you have either won or lost the game?
Does the sound effects work when a button is pressed?
Do the buttons flash when pressed or called by the sequence?
Does the hard mode differ to the medium mode?
Does the coloured buttons move positions when you move on to the next level in hard mode?
Does only one button flash at a time?

                                   --------------------------------


Credits

I have used the website 'https://codereview.stackexchange.com/questions/162096/simon-game-in-javascript' for research in
creating the game. I needed an understanding of what to expect my game too look like and how it would work. After looking
at this persons game, i decided that mine was going to be similar but with different functions and a complete new design.