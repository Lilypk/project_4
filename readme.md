# Simon 

Simon is a game of memory where you will be challenged to repeat a beat in order of sequence. 

## Description 

To start the game, press the start button in the middle of the wheel. You will begin at level 1. Simon will start off with lighting one color/sound panel. You will then have to click on that same panel. Simon will repeate the sequence, adding one new panel to the end each time. You will repeate that sequence each time. If you miss a panel, the game is over. 

## Layout 

My variables are the four panels. GetRandomPanel is a function for getting a random panel for the sequence. I have another function that starts off the sequence with a random panel and an array that keeps track of what we need to guessed. The flash function loops through that sequence and has each panel on a timeout. During flash I add the class active then remove it. PanelClicked is a callback function so we can check if you clicked on the right panel then remove it from the sequence. Then check if you're done with the current round. If you click on the wrong panel, you'll get an alert that the game has ended. StartFlashing is a function that loops through the current sequence and flashes each panel one by one. 


## Authors 

Lilypk
lilyklopcic@gmail.com 


Web Dev Junkie- Live Coding Simon Game 
https://www.youtube.com/watch?v=W0MxUHlZo6U


