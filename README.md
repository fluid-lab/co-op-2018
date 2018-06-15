# Seize the stars
## Co-op 2018 / IDRC

Creators Of Game
* Rutvi!
* Janardan!
* Yehchan!

# Purpose
This game is built to be used for people with disabilities. In this case, we are programming this game for single switch users. We used a mouse click as the input for the game. It is a mouse realese so the user has to let go of the switch in order for the scanner to work. We made this game to pass the boundries of multiple choice, and let 6 - 9 year olds feel like there 6 - 9 rather than treated mentally as if they were 3. 

# Running
To run the code and the game, all you need to do is start by using the html page of SeizeTheStars. The game will start from the screen, and will have many options. There are settings in the top for anyone to configure, which includes scanner speed, and more. It needs a second person to control that aspect, but the game is fully functional with the switch.

# Developing the code
If you want to add any encounters that you think is good for the game, there is an easy way to code it and integrate it into the system. First is to make a seperate folder with all your assists for your scripts for that encounter. After youv'e done that, go to the html and implement those files in. Finally, for those encounters to play with the game, you can go to the map folder in scripts and into the map.js. Change the number of encounters by +1, for each encounter you have. After that, go to line 208. From around there, you see typeOfGameOnDot as an array being called in different as string values of events. Implement your event by putting an if statement for the number event you want it to be, and making a string value calling that event. Then, put that even in the animation folder with it's specific stage value, as well as your on key up folder as well. It will implement well with the code that way. 
