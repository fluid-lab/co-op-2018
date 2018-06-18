//NOTE: This is all the variables for the MAP stage
//selecting the x and y position of the circles and the amount of circles
var numberOfCircles = [0,1,2,1,0,1,1,1,1,0]; //number of circles in each row. If the number is 0, then it is a planet.
var radius = 15*ratioWidth; //the radius of the circle
var xPosOfCircle = []; //xposition of the circle
var yPosOfCircle = []; //the y position of the circle
var totalAmountOfCircles; //total amount of circles used to set the 2d array of y pos of circle
var randomX;
var extraX;
var leftOrRight; // this is to offset the map a bit so it doesnt look like a row
var typeOfPlanet; //takes what type of planet it is
var arrayCounterOfPlanets; //the sepcific array point of the planet
var planetNumber; //gives the value of type planet an integer
var numOfOptions;
var connectionsOfDots; //this is how the dots are connected with the number of options you have. NOTE: They can have a 2 digit number for 2 options
var imageHighlighted; //the image being highlighted (really just a line)
var imageLimit; //the number of image Highlighted maximum
var currentCircle; //What the current circle they are on
var currentX = 0; //the current circles X coordinate
var currentY = 0; //the current circles Y coordinate
var specificY = 0; //find the specific Y value its drawing to
var typeOfGameOnDot = [];
var numberOfEncounters = 1;
var completionOfGame = [];
var lastXValue;
var lastYValue;

function restart(){
  sizeOfBackgroundWidth = canvasWidth;
  sizeOfBackgroundHeight = canvasHeight;
  sizeOfPlanet = 150 * ratioWidth;//size of the planets
  randomCirclesSpawn();
  typeOfGameOnDot = new Array(numberOfCircles.length);
  completionOfGame = new Array(numberOfCircles.length);
  for(var i = 0; i < numberOfCircles.length; i++){
    var checkingCounter = numberOfCircles[i];
    if(numberOfCircles[i] === 0)
      checkingCounter = 1;
    typeOfGameOnDot[i] = new Array(checkingCounter);
    completionOfGame[i] = new Array(checkingCounter);
  }
  findDifferentGames();
  totalAmountOfCircles = 0;
  randomX = new Array(numberOfCircles.length);
  xPosOfCircle = [];
  yPosOfCircle = new Array(numberOfCircles.length);
  //for loop creating the number of circles
  for(var i = 0; i < numberOfCircles.length; i++){
    totalAmountOfCircles = numberOfCircles[i]; //it takes the number of circles
    if(totalAmountOfCircles === 0){
      totalAmountOfCircles = 1; //if the number of circles is a planet, then it changes it to a 1
    }
    yPosOfCircle[i] = new Array(totalAmountOfCircles); //it creates the array with that specific number of circle, creating the 2d array
    randomX[i] = new Array(totalAmountOfCircles); //it creates the array with that specific number of circle, creating the 2d array
  }

  //for loop in puting in specific x cordinates
  extraX =  40 * ratioWidth; //the start position of the circles
  for(var i = 0; i < numberOfCircles.length; i++){
    if(numberOfCircles[i] === 0){
      extraX = extraX + 40 * ratioWidth; //if the number of circles is 0, meaning a planet, then it would be an extra gap between the circles
      xPosOfCircle[i] = extraX; //the specific x pos of the circle
      if(lastXValue != undefined && i === 0){
        xPosOfCircle[i] = lastXValue;
      }
    } else {
      xPosOfCircle[i] = extraX; //moves a bit differently, so not all of it in a column
    }
    extraX += 120 * ratioWidth; //adds up to the spacing
  }

  //setting specific Y values to each one
  counter = 0; //sets a counter for the for loop
  for(var i = 0; i < numberOfCircles.length; i++){
    counter = numberOfCircles[i]; //gets the number of circles and makes it the counter for the next for loop
    if(counter === 0)
      counter = 1;//if its 0, changes to 1

    for(var b = 0; b < counter; b++){
      yPosOfCircle[i][b] = Math.floor(Math.random() * 580 * ratioWidth) + 30 * ratioWidth; //takes a random y position
      for(var a = 0; a < b; a++){
        if(yPosOfCircle[i][a] >= yPosOfCircle[i][b] - 100 * ratioWidth && yPosOfCircle[i][a] <= yPosOfCircle[i][b] + 100 * ratioWidth){
          yPosOfCircle[i][b] = Math.floor(Math.random() * 580 * ratioWidth) + 10 * ratioWidth; //this for loop is to check if theres any other that overlaps, creating gaps in the y position
          a = -1;
        }
      }
      if(numberOfCircles[i] === 0){
        yPosOfCircle[i][b] = Math.floor(Math.random()*100 * ratioWidth) + 310 * ratioWidth; //if its 0, then it takes another number closer to the center
        if(i === 0 && lastYValue != undefined){
          yPosOfCircle[i][b] = lastYValue;
        }
      }

      //for creating offsets in the x position
      leftOrRight = Math.floor(Math.random()*3);//gets values from 0 - 2. If 0, then left a bit, if 2 right a bit. if 1 then doesnt move
      if(numberOfCircles[i] === 0){
        leftOrRight = 1;
      }
      if(leftOrRight === 0){
        randomX[i][b] = Math.floor(Math.random()*-20 * ratioWidth) - 1;//moves -50 to - 1 space to the left
      }else if(leftOrRight === 1){
        randomX[i][b] = 0;//doesnt move period
      }else if(leftOrRight === 2){
        randomX[i][b] = Math.floor(Math.random()*20 * ratioWidth) + 1; //moves 50 to 1 spaces to the right
      }
    }
  }

  //specific planets
  typeOfPlanet = new Array(numberOfCircles.length); //takes what type of planet it is
  arrayCounterOfPlanets = 0; //the sepcific array point of the planet
  planetNumber = 0; //gives the value of type planet an integer
  for(var i = 0; i < numberOfCircles.length; i++){
    if(numberOfCircles[i] === 0){
      //if the number of circles is 0, so a planet, a random number of the amount of planets we have
      planetNumber = Math.floor(Math.random()*2);
      typeOfPlanet[arrayCounterOfPlanets] = planetNumber;
      arrayCounterOfPlanets++;
    }
  }

  //num of options and path ways in each circle
  numOfOptions = new Array(numberOfCircles.length); //how many times the path is split from the circle
  for(var i=0; i < numberOfCircles.length; i ++){
  	numOfOptions[i] = new Array(numberOfCircles[i]); //creates it as a 2d array
  	var amountOfCircles = numberOfCircles[i]; //amount of circles is a counter
  	if(amountOfCircles === 0){
  		amountOfCircles = 1;
  	}
  	for(var a = 0; a < amountOfCircles; a++){
      if(numberOfCircles[i] === 0 || numberOfCircles[i] === 1){
        // NOTE: this is only when you have one circle in that column
        numOfOptions[i][a] = numberOfCircles[i + 1]; // if its a planet or theres only one option, it will connect to however many circles there are
        if(numberOfCircles[i + 1] === 0){
          numOfOptions[i][a] = 1; //if the next one is a 0, then the number of options would be 1
        }
        if(numOfOptions[i][a] === undefined){
          numOfOptions[i][a] = 0; //if there is no circles after it, number of options doesnt exist so the code does not crash
        }
      }else{
        numOfOptions[i][a] = Math.floor(Math.random()*2) + 1; //either 1 or 2 options
        if(numberOfCircles[i + 1] === 1 || numberOfCircles[i + 1] === 0){
          numOfOptions[i][a] = 1; //if the next circle is 1 or a planet, then the options connect there.
        }
        if(numberOfCircles[i + 2] === 0){
          numOfOptions[i][a] = numberOfCircles[i + 1];
        }
      }
  	}
  }

  //connecting lines into dots using numOfOptions
  connectionsOfDots = new Array(numberOfCircles.length); //this is how the dots are connected with the number of options you have. NOTE: They can have a 2 digit number for 2 options
  for(var i = 0; i < numberOfCircles.length; i++){
    connectionsOfDots[i] = new Array(numberOfCircles[i]); //creates the array
  }
  numOfOptionsAvailable();

  //for the highlighted scanner
  yHighlited = []; //highlighted line array
  yHighlitedDirection = [];
  imageHighlighted = -1; //the image being highlighted (really just a line)
  imageLimit = 0; //the number of image Highlighted maximum
  currentCircle = new Array(numberOfCircles.length); //What the current circle they are on
  for(var i = 0; i < numberOfCircles.length; i++){
    var amount = numberOfCircles[i]; //counter
    if(amount === 0)
      amount = 1;
    currentCircle[i] = new Array(amount); //creates the array
  }
  currentCircle[0][0] = "current"; //sets the first planet as the current circle
}

function findDifferentGames(){
  for(var i = 0; i < numberOfCircles.length; i ++){
    var checkingCounter = numberOfCircles[i];
    if(checkingCounter === 0)
      checkingCounter = 1;
    for(var a = 0; a < checkingCounter; a++){
      if(numberOfCircles[i] === 0){
        typeOfGameOnDot[i][a] = "planet";
      }else{
        var randomGameType = Math.floor(Math.random()*numberOfEncounters);
        if(randomGameType === 0){
          typeOfGameOnDot[i][a] = "drill";
        }
      }
      if(a === 0 && i === 0){
        completionOfGame[i][a] = "complete";
      }else{
        completionOfGame[i][a] = "incomplete";
      }
    }
  }
}

//makes the procedural generation of the map
function randomCirclesSpawn(){
  for(var i = 0; i < numberOfCircles.length; i ++){
      numberOfCircles[i] = 1;
  }
  numberOfCircles[0] = 0;
  numberOfCircles[numberOfCircles.length - 1] = 0;
  var randomPlanetSpawn = Math.floor(Math.random()*2) + 3;
  numberOfCircles[randomPlanetSpawn] = 0;
  for(var i = 0; i < numberOfCircles.length; i++){
    if(numberOfCircles[i] != 0){
      numberOfCircles[i] = Math.floor(Math.random()*2) + 1;
    }
  }

  //the code for linear paths not existing
  for(var i = 1; i < numberOfCircles.length;i++){
    var doubleCheckPath = numberOfCircles[i - 1];
    if(doubleCheckPath === numberOfCircles[i] && numberOfCircles[i] === 1){
      numberOfCircles[i] = 2;
    }
  }
}

function moveToLeft(){
  arrayCounterOfPlanets = 0;
  for(var x = 0; x < numberOfCircles.length; x++){
    xPosOfCircle[x] = xPosOfCircle[x] - 5*ratioWidth;
  }
  drawLines(); //draws the lines
  drawCircle();
}

window.onload = function() {
    setCanvasSize();
    //sets variables
    restart();
    //repeats animation at a fixed rate
    saveImages();
    stage = "map";
    var id = setInterval(animation, scanSpeed);
}

function setCanvasSize(){
  var canvasElement = document.getElementById("myCanvas");
  var rInnerW = Math.floor(window.innerWidth/16);//Rounds inner width ratio
  var rInnerH = Math.floor(window.innerHeight/9);//Round inner height ratio
  var ratio = 0;
  if (rInnerW>=rInnerH){//If the innerH is less, it should use the inner height
    ratio = rInnerH;
  } else if (rInnerW<=rInnerH){
    ratio = rInnerW;
  }
  canvasWidth = ratio*16;//Ratio by aspect ratio to create the canvas
  canvasHeight = ratio*9;
  ratioWidth = canvasWidth/1280;
  canvasElement.height = canvasHeight;
  canvasElement.width = canvasWidth;
}
