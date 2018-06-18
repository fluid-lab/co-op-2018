//decalred variables for the images
var drill;
var scannedDrill;
var background;
var rightArrow;
var leftArrow;
var leftArrowScanner;
var rightArrowScanner;
var pointScreen;
//images of the differnt resources that the player collects
var fuel;
var iron;
var copper;
var stars;
//num of resouces collected
var numOfFuel = 0;
var numOfIron = 0;
var numOfCopper = 0;
var numOfStars = 0;


var stop; //if scanner for the drill is on or off
var down; //if the page is being scrolled out

var sideOfPlanet;

var slidingBorderY;


var imageSelection;
var xPosDrill;
var yPosDrill;
var yPos;

var miningPlanetHeight; //height of the planet
var miningPlanetWidth; //the width of the planet
//the coordinates that locate the bottom of the planet
//the player can't go past this point
var bottomOfPlanet;

var resourceX = []; //stores the x coodinates of the recouces
var resourceY = []; //stores he y coordinates of the resouces
var resourceHidden = [];
var resourcePrinted = []; //an array storing a random number from 1-4, and according to that number a cetian resoure will pint
var rand; //the planet will have between 2 - 15 resoure avalible

var scanningArrows;//if the arrows are being scanned

var showSign;
var finishedSign;

function restartDrill(){
  numOfFuel = 0;
  numOfIron = 0;
  numOfCopper = 0;
  numOfStars = 0;


  stop = false; //if scanner for the drill is on or off
  down = false; //if the page is being scrolled out

  sideOfPlanet = "";

  slidingBorderY = -360 * ratioWidth;


  imageSelection = 1;
  xPosDrill = 100 * ratioWidth;
  yPosDrill = 50 * ratioWidth;
  yPos = 0;

  miningPlanetHeight = (1280/1600) * 3000 * ratioWidth; //height of the planet
  miningPlanetWidth = 1280 * ratioWidth; //the width of the planet
  //the coordinates that locate the bottom of the planet
  //the player can't go past this point
  bottomOfPlanet = ((1280/1600) * 2100) * -1 * ratioWidth;

  resourceX = []; //stores the x coodinates of the recouces
  resourceY = []; //stores he y coordinates of the resouces
  resourceHidden = [];
  resourcePrinted = []; //an array storing a random number from 1-4, and according to that number a cetian resoure will pint
  rand = 45; //the planet will have between 2 - 15 resoure avalible

  scanningArrows = true; //if the arrows are being scanned

  showSign = false;
  finishedSign = false;

  //according to the rand number there will be a certian number of resources, and those resouces will have certian coordinates
  //this for loop is generating coordinates for each resoruce
  for (var i = 0; i < rand; i++){
   resourceX [i] = Math.floor(Math.random()*(canvasWidth - 130 * ratioWidth)) + 50 * ratioWidth; //generates a random x coordinate
   while(true){
     for(var b = 0; b < i; b++){
       if(resourceX[i] <= resourceX[b] + 10 && resourceX[i] >= resourceX[b] - 10){
         resourceX[i] = Math.floor(Math.random()*(canvasWidth - 80 * ratioWidth)) + 1 * ratioWidth;
         continue;
       }
     }
     break;
    }
    resourceY [i] = Math.floor(Math.random()*900 * ratioWidth) + 950 * ratioWidth; //generates a random y coodinate
    resourcePrinted[i] = Math.floor (Math.random() * 4) + 1; //generates a random number between 1 - 4
    if(resourcePrinted[i] === 4){
      resourcePrinted[i] = Math.floor (Math.random() * 4) + 1;
    }
    //resourcePrinted [i] = Math.random();
  }
}
 //function that locates the resource, and prints them onto the canvas
 function locateResource (){
   for (var i = 0; i < rand; i++){
     resourceY[i] = resourceY[i] - 3 * ratioWidth; //this is for when the resources overlap each other
     if(resourceHidden[i] === "false"){ //if the resrouce is not colledted (the drill has not gone over the object)
       if (resourcePrinted[i] == 1){ //if the resrouce is not colledted (the drill has not gone over the object)
         ctx.drawImage (iron, resourceX[i], resourceY[i], 100 * ratioWidth, 100 * ratioWidth);
       }
       else if (resourcePrinted [i] == 2){ //if the generated number is 2 then copper is printed in that certian position
         ctx.drawImage (copper, resourceX[i], resourceY[i], 100 * ratioWidth, 100 * ratioWidth);
       }
       else if (resourcePrinted[i] == 3){ //if the generated number is3 then fuel is printed in that certain position
         ctx.drawImage (fuel, resourceX[i], resourceY[i], 100 * ratioWidth, 100 * ratioWidth);
       }
       else if (resourcePrinted[i] == 4){ //if the generated number is 4 then stars are printed in that certian position
         ctx.drawImage (stars, resourceX[i], resourceY[i], 100 * ratioWidth, 100 * ratioWidth);
       }
       draw = false;
     }
   }
 }
 //this function checks for collision
 function hiddenImages(){
    for(var i = 0; i < rand; i++){
        if(sideOfPlanet === "left" && resourceX[i] >= 60 * ratioWidth && resourceX[i] <= 350 * ratioWidth){
            resourceHidden[i] = "false";
        }
        else if(sideOfPlanet === "middle" && resourceX[i] >= 300 * ratioWidth && resourceX[i] <= 750 * ratioWidth){
            resourceHidden[i] = "false";
        }
        else if(sideOfPlanet === "right" && resourceX[i] >= 750 * ratioWidth && resourceX[i] <= 1080 * ratioWidth){
            resourceHidden[i] = "false";
        }
        else{
            resourceHidden[i] = "true";
        }
    }
 }
