var canvasWidth = 1280; //the width of the canvas
var canvasHeight = 720; //the height of the canvas
var stage = "drill";
var canvas = document.getElementById("myCanvas"); //variable for canvas
var ctx = canvas.getContext("2d");

var inventoryMaterials = {
    fuel: 0,
    copper: 0,
    star: 0,
    iron: 0
};


//animation
var stop = false; //if scanner for the drill is on or off
var down = false; //if the page is being scrolled out
var scanSpeed = 60; //the timer
var speedCounter = 0;
var speedLimit = 1500/scanSpeed;
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

var sideOfPlanet = "";

var slidingBorderY = -360;


var imageSelection = 1;
var xPosDrill = 100;
var yPosDrill = 50;
var yPos = 0;

var miningPlanetHeight = (1280/1600) * 3000; //height of the planet
var miningPlanetWidth = 1280; //the width of the planet
//the coordinates that locate the bottom of the planet
//the player can't go past this point
var bottomOfPlanet = ((1280/1600) * 2100) * -1;

var resourceX = []; //stores the x coodinates of the recouces
var resourceY = []; //stores he y coordinates of the resouces
var resourceHidden = [];
var resourcePrinted = []; //an array storing a random number from 1-4, and according to that number a cetian resoure will pint
var rand = 45; //the planet will have between 2 - 15 resoure avalible
//according to the rand number there will be a certian number of resources, and those resouces will have certian coordinates
//this for loop is generating coordinates for each resoruce
var scanningArrows = true; //if the arrows are being scanned

var showSign = false;

var id;

function resetDrill(){
    scanningArrows = true;
    showSign = false;
    resourceX = [];
    resourceY = [];
    resourceHidden = [];
    resourcePrinted = [];
    imageSelection = 1;
    xPosDrill = 100;
    yPosDrill = 50;
    yPos = 0;
    numOfFuel = 0;
    numOfIron = 0;
    numOfCopper = 0;
    numOfStars = 0;

    sideOfPlanet = "";

    slidingBorderY = -360;

    stop = false; //if scanner for the drill is on or off
    down = false; //if the page is being scrolled out

    miningPlanetHeight = (1280/1600) * 3000; //height of the planet
    miningPlanetWidth = 1280; //the width of the planet
    //the coordinates that locate the bottom of the planet
    //the player can't go past this point
    bottomOfPlanet = ((1280/1600) * 2100) * -1;

    for (var i = 0; i < rand; i++){
        resourceX [i] = Math.floor(Math.random()*(canvasWidth - 130)) + 50; //generates a random x coordinate
        while(true){
          for(var b = 0; b < i; b++){
                if(resourceX[i] <= resourceX[b] + 10 && resourceX[i] >= resourceX[b] - 10){
                resourceX[i] = Math.floor(Math.random()*(canvasWidth - 80)) + 1;
                continue;
                }
            }
            break;
        }
        resourceY [i] = Math.floor(Math.random()*900) + 950; //generates a random y coodinate
        resourcePrinted[i] = Math.floor (Math.random() * 4) + 1; //generates a random number between 1 - 4
        if(resourcePrinted[i] === 4){
           resourcePrinted[i] = Math.floor (Math.random() * 4) + 1;
        }
        //resourcePrinted [i] = Math.random();
    }
}

 window.onload = function (){
   //gets images from their id from the html doc
   getImagesMaterials();
   resetDrill();
   if(stage === "drill"){
    id = setInterval(animation,scanSpeed);
    getImagesDrill();
   }
 };
 function getImagesMaterials(){
    fuel = this.document.getElementById ("fuel");
    iron = this.document.getElementById ("iron");
    copper = this.document.getElementById ("copper");
    stars = this.document.getElementById ("stars");
 }
 function getImagesDrill(){
    drill = this.document.getElementById ("drill");
    scannedDrill = this.document.getElementById ("ScannedDrill");
    background = this.document.getElementById("background");
    rightArrow = this.document.getElementById ("rightArrow");
    leftArrow = this.document.getElementById ("leftArrow");
    leftArrowScanner = this.document.getElementById("leftArrowScanner");
    rightArrowScanner = this.document.getElementById ("rightArrowScanner");
    pointScreen = this.document.getElementById("pointScreen");
 }
 function animation(){
    if(stage === "drill"){
        if(stop === false){ //if the scanner for the drill is false then the image selection will scan a ceritan drill
            if(imageSelection === 1){ //if image scan is 1 then the first drill will be selected
                xPosDrill = 100;//the first still is at a x position of 100ox
            }
            else if(imageSelection === 2){ //if the image scan is 2 then the second image will be selected
                xPosDrill = 400; //the second drill is at a x position of 400px
            }
            else if(imageSelection === 3){ //if the image scan is 3 then the third image will be selected
                xPosDrill = 700; //the third drill is at a x position of 700px
            }
            else if(imageSelection >= 4){ //if the image selection is greater then 3 then the selection will go back to 1
                imageSelection = 1;
            }
            if(speedCounter === speedLimit){
                imageSelection++;
                speedCounter = 0;
            }
            speedCounter++;
        }
        if(down === true){ //if down is true
            //as long as the y position of the dills is less then or equal to the bottom of the planet then the drill will be going down at a constant speed of 10px per interval
            if(!(yPos <= bottomOfPlanet)){
                yPos -= 10;
            }
            //if the position of the drill is at the bottom of the planet then scanning of the arrows stops
            else{
                scanningArrows = false;
                showSign = true;
            }
            if(scanningArrows === false && showSign === false){ //if scanning arrows and showSigns equals false this is executed
                if(imageSelection === 1){ //if the image selected is 1 then the player can only explore the left side of the planet
                    if(sideOfPlanet === "left" && xPosDrill <= 250){
                        xPosDrill = xPosDrill + 10;
                    }
                    else if(sideOfPlanet === "middle" && xPosDrill <= 650){
                        xPosDrill = xPosDrill + 10;
                    }
                    else if(sideOfPlanet === "right" && xPosDrill <= 980){
                        xPosDrill = xPosDrill + 10;
                    }
                }
                if(imageSelection === 2){
                    if(sideOfPlanet === "left" && xPosDrill >= 0){
                        xPosDrill = xPosDrill - 10;
                    }
                    else if(sideOfPlanet === "middle" && xPosDrill >= 250){
                        xPosDrill = xPosDrill - 10;
                    }
                    else if(sideOfPlanet === "right" && xPosDrill >= 650){
                        xPosDrill = xPosDrill - 10;
                    }
                }
            }
            if(speedCounter === speedLimit && scanningArrows === true){
                imageSelection++;
                speedCounter = 0;
                if(imageSelection === 3){
                    imageSelection = 1;
                }
            }
            speedCounter++;
        }
        //draws background to the encouter
        ctx.drawImage(background,0,yPos,miningPlanetWidth,miningPlanetHeight);
        //as long as down is true, and the y position of the drill is not less then or equal to the bottom of the planet the following is executed
        if(down === true && !(yPos <= bottomOfPlanet)){
            checkResource(); //checks if there was any colision that took place
        }
        if(stop === false){ //if is scanner is off then
            //print on all the drill onto the canvas
            ctx.drawImage(drill, 100, yPosDrill, 300, 300);
            ctx.drawImage(drill, 400, yPosDrill, 300, 300);
            ctx.drawImage(drill, 700, yPosDrill, 300, 300);
            ctx.drawImage(scannedDrill, xPosDrill-6, 68, 300, 300);
        }
        if(down === true){ //if down is true
            ctx.drawImage(drill,xPosDrill,yPosDrill,300,300); //draw the drill animation onto the canvas

            ctx.drawImage (rightArrow, (xPosDrill + 200), 200, 100, 50); //if down is true then print the arrow images onto the canvas
            ctx.drawImage (leftArrow, (xPosDrill - 25), 200, 100, 50); //if down is true then print the left arrow images onto the canvas

            if(imageSelection === 2){ // if image selection is 2 then the following will be executed
                ctx.drawImage (leftArrowScanner, (xPosDrill - 25), 200, 100 ,50); //draw the scanned left arrow onto the canvas
            }
            if(imageSelection === 1){ //if image selection is 1 then the following will be executed
                ctx.drawImage (rightArrowScanner, (xPosDrill + 200), 200, 100, 50); //draw the scanned right arrow onto the canvas
            }
        }
        //if the player has reached the bottam of the planet then the point screen will show with th points printed on it
        if(showSign === true){ //150,200
            ctx.drawImage (pointScreen, 0, slidingBorderY, 1280, 1220);
            ctx.drawImage (fuel, 600, (slidingBorderY + 30), 100, 100);
            ctx.fillText (numOfFuel, 700, (slidingBorderY + 100)); //number of fuels collected by player
            ctx.drawImage (copper, 350, (slidingBorderY + 50), 100, 100);
            ctx.fillText (numOfCopper, 450, (slidingBorderY + 100));//number of coppers collected by player
            ctx.drawImage (stars, 600, (slidingBorderY + 130), 100, 100);
            ctx.fillText (numOfStars, 700, (slidingBorderY + 200)); //number of stars collected by player
            ctx.drawImage (iron, 350, (slidingBorderY + 130), 100, 100);
            ctx.fillText (numOfIron, 450, (slidingBorderY + 200)); //number of irons collected by player
            if(slidingBorderY <= -10){
                slidingBorderY += 10;
            }
        }
        //put all the points in the right corner of the canvas
        ctx.font = "40pt Calibri";
        //this statement prints the points the player has collected
        if(showSign === false){
            ctx.drawImage (fuel, 1000, -10, 100, 100);
            ctx.fillText (numOfFuel, 1100,60);
            ctx.drawImage (copper, 750, 10, 100, 100);
            ctx.fillText (numOfCopper, 850, 60);
            ctx.drawImage (stars, 400, -10, 100, 100);
            ctx.fillText (numOfStars, 500, 60);
            ctx.drawImage (iron, 50, -10, 100, 100);
            ctx.fillText (numOfIron, 150, 60);
        }
    }   
}
 //function that locates the resource, and prints them onto the canvas
 function locateResource (){
   for (var i = 0; i < rand; i++){
     resourceY[i] = resourceY[i] - 10; //this is for when the resources overlap each other
     if(resourceHidden[i] === "false"){ //if the resrouce is not colledted (the drill has not gone over the object)
       if (resourcePrinted[i] == 1){ //if the resrouce is not colledted (the drill has not gone over the object)
         ctx.drawImage (iron, resourceX[i], resourceY[i], 100, 100);
       }
       else if (resourcePrinted [i] == 2){ //if the generated number is 2 then copper is printed in that certian position
         ctx.drawImage (copper, resourceX[i], resourceY[i], 100, 100);
       }
       else if (resourcePrinted[i] == 3){ //if the generated number is 3 then fuel is printed in that certain position
         ctx.drawImage (fuel, resourceX[i], resourceY[i], 100, 100);
       }
       else if (resourcePrinted[i] == 4){ //if the generated number is 4 then stars are printed in that certian position
         ctx.drawImage (stars, resourceX[i], resourceY[i], 100, 100);
       }
       draw = false;
     }
   }
 }
 //this function checks for collision
 function checkResource(){
   for (var i = 0; i < rand; i++){ //goes through every index in the array
     if(resourceX[i] >= xPosDrill - 50 && resourceX[i] <= xPosDrill + 120){ //if the any of these conditions are true (the drill has encountered the object)
        var xTriangle = resourceX[i] - xPosDrill;
        var yTriangle;
        if(xTriangle <= 100){
            yTriangle = 2/(1/xTriangle);
        }else{
            xTriangle = 170 - xTriangle;
            yTriangle = 20/(7/xTriangle);
        }
        if(yTriangle + 150 >= resourceY[i] && resourceY[i] >= 150){
            if(resourceHidden[i] === "false"){
                if(resourcePrinted[i] === 1){ //if the resource number is 1 it adds to the number of iron collected
                    numOfIron++;
                }
                else if(resourcePrinted[i] === 2){ //if the resource number is 2 it adds to the number of copper collected
                    numOfCopper++;
                }
               else if(resourcePrinted[i] === 3){ //if the resource number is 3 it adds to the number of fuel collected
                    numOfFuel++;
                }
                else if(resourcePrinted[i] === 4){ //if the resource number is 1 it adds to the number of stars collected
                    numOfStars++;
                }
                    resourceHidden[i] = "true"; //chages the value of resourceHidden to true to the image is not prints when the interval is done
            }
        }
     }
   }
   locateResource(); //goes back to locateResource to make sure the proper iamges are being printed
 }
 function hiddenImages(){
    for(var i = 0; i < rand; i++){
        if(sideOfPlanet === "left" && resourceX[i] >= 60 && resourceX[i] <= 350){
            resourceHidden[i] = "false";
        }
        else if(sideOfPlanet === "middle" && resourceX[i] >= 300 && resourceX[i] <= 750){
            resourceHidden[i] = "false";
        }
        else if(sideOfPlanet === "right" && resourceX[i] >= 750 && resourceX[i] <= 1080){
            resourceHidden[i] = "false";
        }
        else{
            resourceHidden[i] = "true";
        }
    }
 }
 window.onkeyup = function(e){ //takes the spacebar as a key input
    if(e.key === " "){
        if(stage === "drill"){
             if(stop === false){ //if the drills aren't being scanned then the following is executed
                 stop = true; //the drills will begin to scan
             if(imageSelection === 1){ //if the selection is 1
                 sideOfPlanet = "left"; //the player can only expore the left side of the planet
             }
             else if(imageSelection === 2){ //if the selection is 2
                 sideOfPlanet = "middle"; //the player can only explore the middle of the planet
             }
             else{ //else if selection is 3 
                 sideOfPlanet = "right"; //the player can only explore the right side of the planet
             }
             //all the resources will be printed according to what drill is choosen
             hiddenImages();
             imageSelection = 1;
             speedCounter = 0;
             scanningArrows = true;
             }
             if(stop === true && showSign === false){
                 if(down === false){
                     down = true;
                 }
                 else if(scanningArrows === true){
                     scanningArrows = false;
                 }
                 else if(scanningArrows === false){
                     scanningArrows = true;
                     speedCounter = speedLimit - 1;
                 }
             }
         }
         if(showSign === true){
            inventoryMaterials.fuel = numOfFuel + inventoryMaterials.fuel;
            inventoryMaterials.star = numOfStars + inventoryMaterials.star;
            inventoryMaterials.copper = numOfCopper + inventoryMaterials.copper;
            inventoryMaterials.iron = numOfIron + inventoryMaterials.iron;
            console.log(inventoryMaterials);
            resetDrill();
         }   
     }
  }