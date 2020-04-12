The Simon Game

The Simon Game is designed as a memory game. The Simon game will play a sequnce of colored buttons that lights up and plays
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

User Story: If I want to restart, I can push the start button to do so, and the game will return to a single step.

User Story: I can play in strict mode where if I get a button press wrong, it notifies me that I have done so, and the game
restarts at a new random series of button presses.

User Story: I can win the game by getting a series of 20 steps correct. I am notified of my victory, then the game starts
over.

                                       --------------------------------


Features

In this project the buttons flash and the user is to copy the sequence and click the correct button.

You can change the mode from 'Normal' to 'Strict'.

You can reset the game throughout the game.

I have a counter so the user knows what level they are on throughout the game.

I have used a random function which will allow the game to use a unique sequence each time.

I have used 'Start' and 'Strict' buttons to let the user have control of the game.

                                       --------------------------------

Technologies Used

HTML: The layout of the elements of the Simon Game.
CSS: The styling of the elements of the Simon Game.
JQuery: To simplify DOM manipulation.
Google Apis: The font styles in the Simon Game. 

                                       --------------------------------

Testing

Does the game start when pressed the start button?

Once I have clicked on the the start button, the game start playing the first colored button.
The color button lights up and plays the sound assigned to the button.

Does the levels section go up each time your on a new level?

Everytime the I played the correct sequence of colored button the counter in the center goes up by one. 

Does the game play the random sequence for you to then press the correct button?

The sequence starts and plays one colored button for me to press and informs me that it was correct.

Does the game move on to the next level when completed last level correctly?

The game indicates that I have played the correct button and adds one more to the sequence and shows the level has
increased on the counter.

Does the game show an alert when failed the game?

The game will indicate that II have played the wrong button by displaying 'Oops' on the counter and starts the
sequence again.

Does the game show an alert when the game is won?

Once you have reached a level of 20 on the counter and you have correctly played the sequence, the game will alert
you that you have won.

Does the game allow you to restart once you have either won or lost the game?

Either way winning or losing the game will restart with a new sequence.

Does the sound effects work when a button is pressed?

Every colored button has a sound assigned to them and everytime the game or I play the colored buttons the sound
beeps for a few seconds.

Do the buttons flash when pressed or called by the sequence?

Every colored button does flash when when the sequence plays or when I press on the colored button.

Does the Strict mode differ to the Normal mode?

When I played the strict mode everytime I played the wrong colored button the game stop and alerts me that I have
lost the game and restarts with a new game.
WHen I played the normal mode everytime I played the wrong colored button the game started the sequence over for 
e to try again.

Does only one button flash at a time?

With the sequence everytime a colored button flashes only one flashes at once and then the next one colored button
will flash.



While doing the testing of playing the game, I have noticed that when I reset the game by pushing the Start button
the does not work correctly. I have noticed that the first colored button in the sequence starts to play and
I play the first colored button the game moves on to the next sequence, once the sequence has played. I tried
to play the next first colored button in the next sequence. the computer starts to play the sequence again, before 
I played the next colored button in the sequence. 



                                   --------------------------------


Credits

A Big Thanks to my Mentor and all the tutors with all the assistance and advise that they have given me over the time.
