var canvasWidth = 1280; //the width of the canvas
var canvasHeight = 720; //the height of the canvas
var scanSpeed = 1000;
var canvas = document.getElementById("myCanvas"); //variable for canvas
var ctx = canvas.getContext("2d");
var selection = 1;
var scan = true; //if the options are being scanned then the value of scan will be true
//variables to store images
var background;
var avatar;
var speechBubble;
var noButton;
var yesButton;
var scannedNoButton;
var scannedYesButton;
var scrollDown;
var menu;
var scannedMenu;
var dropDown;
var plus;
var minus;
var scannedPlus;
var scannedMinus;
//variable for weather or not the menu was selected, if yes then the menu will be presented
var menuSelected = false; 
//variable tp store the imgaes in
var fuel;
var iron;
var copper;
var stars;

var xpos1 = 770;
var xpos2 = 870;
var xpos3 = 990;

var randNum = Math.floor(Math.random() * 3) + 1; //a number that determines how many items the alien will ask for
//a random numeber generator for the aliens request
var resourcePrinted = [];
for (var i = 0; i > randNum; i++) {
    resourcePrinted[i] = Math.floor(Math.random() * 3) + 1;
}
//stores the number of resrouces the alien asks for each category
var randAmount = [0, 0, 0]; //number of each item (will be between 1 - 7)
var rand = Math.floor(Math.random() * 3) + 1; //a random number generator that pick resource
var rand2 = Math.floor(Math.random() * 2) + 1;
var rand3 = Math.floor(Math.random() * 3) + 1;
//rand = 1 = iron
//rand = 2 = copper
//rand = 3 = fuel

var numOfFuel = 10;
var numOfIron = 10;
var numOfStars = 10;
var numOfCopper = 10;

var id = setInterval(animation, scanSpeed);

//the folowung is done when the widow is being loaded
window.onload = function() {
    //loads images
    loadImage();
    loadResources();
    ctx.drawImage(background, 0, 0, 1280, 720); //draws the background
    printResources(); //print the resouces onto the screen
    //prints image of the alien that is asking for the resources, and a speech bubble
    ctx.drawImage(avatar, 800, 350, 200, 200);
    ctx.drawImage(speechBubble, 750, 200, 500, 150);

    ctx.font = "40pt Calibri";
    for (var i = 0; i < randNum; i++) {
        if (randNum === 1) { //if only one item will be printed
            if (rand === 1) { //if rand is 1 then the item displayed is iron
                randAmount[0] = Math.floor(Math.random() * 7) + 3;
                ctx.drawImage(iron, xpos1, 200, 100, 100);
            } else if (rand == 2) { //if rand is 2 then the item displayed is copper
                randAmount[0] = Math.floor(Math.random() * 7) + 3;
                ctx.drawImage(copper, xpos1, 200, 100, 100);
            } else if (rand == 3) { //if rand is 3 then the item displayed is fuel
                randAmount[0] = Math.floor(Math.random() * 7) + 3;
                ctx.drawImage(fuel, xpos1, 200, 100, 100);
            }
        } else if (randNum === 2) { //2 items will be printed
            if (rand === 1) { //if the first resource is iron
                randAmount[0] = Math.floor(Math.random() * 7) + 3;
                ctx.drawImage(iron, xpos1, 200, 100, 100);
                if (rand2 === 1) { //if rand2 is 1 then the second item is copper
                    randAmount[1] = Math.floor(Math.random() * 7) + 3;
                    ctx.drawImage(copper, xpos2, 200, 100, 100);
                } else if (rand2 === 2) { //if rand2 is 2 then the second item is fuel
                    randAmount[1] = Math.floor(Math.random() * 7) + 3;
                    ctx.drawImage(fuel, xpos2, 200, 100, 100);
                }
            } else if (rand === 2) { //the first item is copper
                randAmount[0] = Math.floor(Math.random() * 7) + 3;
                ctx.drawImage(copper, xpos1, 200, 100, 100);
                if (rand2 === 1) { // if rand2 2 is 1 then the second resoruce is iron
                    randAmount[1] = Math.floor(Math.random() * 7) + 3;
                    ctx.drawImage(iron, xpos2, 200, 100, 100);
                } else if (rand2 === 2) { // if rnad2 is 2 is the second item is fuel
                    randAmount[1] = Math.floor(Math.random() * 7) + 3;
                    ctx.drawImage(fuel, xpos2, 200, 100, 100);
                }
            } else if (rand == 3) { // the fisrt item is fuel
                randAmount[0] = Math.floor(Math.random() * 7) + 3;
                ctx.drawImage(fuel, xpos1, 200, 100, 100);
                if (rand2 == 1) { //if rand2 is 1 then the seocnd item is copper
                    randAmount[1] = Math.floor(Math.random() * 7) + 3;
                    ctx.drawImage(copper, xpos2, 200, 100, 100);
                } else if (rand2 == 2) { //if rand2 is 2 then the second item is iron
                    randAmount[1] = Math.floor(Math.random() * 7) + 3;
                    ctx.drawImage(iron, xpos2, 200, 100, 100);
                }
            }
        } else if (randNum === 3) { //if 3 items will be printed
            if (rand == 1) { //if the first item is iron
                randAmount[0] = Math.floor(Math.random() * 7) + 3;
                ctx.drawImage(iron, xpos1, 200, 100, 100);
                if (rand2 == 1) { //if rand2 is 2 then the second item is copper and the third is fuel
                    randAmount[1] = Math.floor(Math.random() * 7) + 3;
                    ctx.drawImage(copper, xpos2, 200, 100, 100);
                    ctx.drawImage(fuel, xpos3, 200, 100, 100);
                } else if (rand2 == 2) { //if rand2 is 2 then the second item is fule and the third is copper
                    randAmount[1] = Math.floor(Math.random() * 7) + 3;
                    ctx.drawImage(fuel, xpos2, 200, 100, 100);
                    randAmount[2] = Math.floor(Math.random() * 7) + 3;
                    ctx.drawImage(copper, xpos3, 200, 100, 100);
                }
            } else if (rand == 2) { //if the fisrt item is copper
                randAmount[0] = Math.floor(Math.random() * 7) + 3;
                ctx.drawImage(copper, xpos1, 200, 100, 100);
                if (rand2 == 1) { //if rand2 is 1 then the second item is iron and third is fuel
                    randAmount[1] = Math.floor(Math.random() * 7) + 3;
                    ctx.drawImage(iron, xpos2, 200, 100, 100);
                    randAmount[2] = Math.floor(Math.random() * 7) + 3;
                    ctx.drawImage(fuel, xpos3, 200, 100, 100);
                } else if (rand2 == 2) { //if rand2 is 2 then second item is fuel and the third is iron
                    randAmount[1] = Math.floor(Math.random() * 7) + 3;
                    ctx.drawImage(fuel, xpos2, 200, 100, 100);
                    randAmount[2] = Math.floor(Math.random() * 7) + 3;
                    ctx.drawImage(iron, xpos3, 200, 100, 100);
                }
            } else if (rand == 3) { // if the first resource is fuel
                randAmount[0] = Math.floor(Math.random() * 7) + 3;
                ctx.drawImage(fuel, xpos1, 200, 100, 100);
                if (rand2 == 1) { // then if rand2 is 1 then the second resource is iron and the third is copper
                    randAmount[1] = Math.floor(Math.random() * 7) + 3;
                    ctx.drawImage(iron, xpos2, 200, 100, 100);
                    randAmount[2] = Math.floor(Math.random() * 7) + 3;
                    ctx.drawImage(copper, xpos3, 200, 100, 100);
                } else if (rand2 == 2) { //if rand2 is 2 then the second encounter is copper and the third is iron
                    randAmount[1] = Math.floor(Math.random() * 7) + 3;
                    ctx.drawImage(copper, xpos2, 200, 100, 100);
                    randAmount[2] = Math.floor(Math.random() * 7) + 3;
                    ctx.drawImage(iron, xpos3, 200, 100, 100);
                }
            }
            if (randAmount[2] === 0) { // if the second resource is 0 while 3 resources are being printed re calculate the ammount asked for
                randAmount[2] = Math.floor(Math.random() * 7) + 3;
            }
        }
    }
    //prints the number of items the
    ctx.fillText(randAmount[0], (xpos1 + 80), 260);
    if (randNum === 2 || randNum === 3) {
        ctx.fillText(randAmount[1], (xpos2 + 80), 260);
    }
    if (randNum === 3) {
        ctx.fillText(randAmount[2], (xpos3 + 80), 260);
    }
    console.log(randNum);
    console.log(randAmount);
};

function loadImage() {
    background = this.document.getElementById("background");
    avatar = this.document.getElementById("alien");
    speechBubble = this.document.getElementById("speechBubble");
    yesButton = this.document.getElementById("yes");
    noButton = this.document.getElementById("no");
    scannedNoButton = this.document.getElementById("scannedNo");
    scannedYesButton = this.document.getElementById("scannedYes");
    menu = this.document.getElementById("menu");
    scannedMenu = this.document.getElementById("scannedMenu");
    dropDown = this.document.getElementById ("dropDown");
    plus = this.document.getElementById ("plus"); 
    minus = this.document.getElementById("minus");
    scannedPlus = this.document.getElementById ("scannedPlus"); 
    scannedMinus = this.document.getElementById ("scannedMinus");
}

function loadResources() {
    fuel = this.document.getElementById("fuel");
    copper = this.document.getElementById("copper");
    iron = this.document.getElementById("iron");
    stars = this.document.getElementById("stars");
}

//function prints the number of resources the player currently has left
function printResources() {
    ctx.drawImage(fuel, 1000, -10, 100, 100);
    ctx.drawImage(copper, 750, 10, 100, 100);
    ctx.drawImage(stars, 400, -10, 100, 100);
    ctx.drawImage(iron, 50, -10, 100, 100);
}

function animation() {
    if (scan === true) {
        ctx.drawImage(yesButton, 50, 150, 200, 150);
        ctx.drawImage(noButton, 50, 350, 200, 150);
        ctx.drawImage (menu, 1220, 10, 50, 50);
        request();

        if (menuSelected === true){
          prefrenceBar();
          changeScanSpeed();
        }
    }
}

var button;
function request() {
    if (scan === true) {
        if (selection === 1) {
            ctx.drawImage(noButton, 50, 350, 200, 150);
            ctx.drawImage(scannedYesButton, 50, 150, 200, 150);
            selection = 2;
            button = 'yes';
        }
        else if (selection === 2) {
            ctx.drawImage(yesButton, 50, 150, 200, 150);
            ctx.drawImage(scannedNoButton, 50, 350, 200, 150);
            selection = 3;
            button = 'no';
        }
        else if (selection === 3)  {
          ctx.drawImage (scannedMenu, 1220, 10, 50, 50);
          selection = 1;
          button = 'menu';
        }
    }
}

ctx.font = "40pt Calibri";
function prefrenceBar(){
  var x  = 0;
  var y = -10;

  ctx.drawImage (dropDown, 0, (y + 10), 1280, 300); 
  ctx.drawImage (plus, 200, 150, 50,50); 
  ctx.fillText (scanSpeed, 80, 150); 
  ctx.drawImage (minus, 50, 150, 50, 50);
}

function changeScanSpeed(){
  if (selection === 1){
    ctx.drawImage (minus, 50, 150, 50, 50);
    ctx.drawImage (scannedPlus, 200, 150, 50,50); 
  }
  else {
    ctx.drawImage (plus, 200, 150, 50,50); 
    ctx.drawImage (scannedMinus, 50, 150, 50, 50);
  }
}

window.onkeyup = function(e) { //takes the spacebar as a key input
    if (scan === true) {
        if (e.key === " ") {
            if (button === 'yes') { //when the selection of the image is on the yes button then the scanning will stop
                scan = false;
                for (var i = 0; i < randNum; i++) {
                    if (randNum === 1) { //if only one item will be printed
                        if (rand === 1) {
                            numOfIron -= randAmount[0];
                        } else if (rand == 2) {
                            numOfCopper -= randAmount[0];
                        } else if (rand == 3) {
                            numOfFuel -= randAmount[0];
                        }
                    } else if (randNum === 2) { //2 items will be printed
                        if (rand === 1) {
                            numOfIron -= randAmount[0];
                            if (rand2 === 1) {
                                numOfCopper -= randAmount[1];
                                break;
                            } else if (rand2 === 2) {
                                numOfFuel -= randAmount[1];
                                break;
                            }
                        } else if (rand === 2) {
                            numOfCopper -= randAmount[0];
                            if (rand2 === 1) {
                                numOfIron -= randAmount[1];
                                break;
                            } else if (rand2 === 2) {
                                numOfFuel -= randAmount[1];
                                break;
                            }
                        } else if (rand == 3) {
                            numOfFuel -= randAmount[0];
                            if (rand2 == 1) {
                                numOfIron -= randAmount[1];
                                break;
                            } else if (rand2 == 2) {
                                numOfCopper -= randAmount[1];
                                break;
                            }
                        }
                    } else if (randNum === 3) { //if 3 items will be printed
                        if (rand === 1) {
                            numOfIron -= randAmount[0];
                            if (rand2 === 1) {
                                numOfCopper -= randAmount[1];
                                numOfFuel -= randAmount[2];
                                break;
                            } else if (rand2 === 2) {
                                numOfFuel -= randAmount[1];
                                numOfCopper -= randAmount[2];
                                break;
                            }
                        } else if (rand === 2) {
                            numOfCopper -= randAmount[0];
                            if (rand2 === 1) {
                                numOfIron -= randAmount[1];
                                numOfFuel -= randAmount[2];
                                break;
                            } else if (rand2 === 2) {
                                numOfFuel -= randAmount[1];
                                numOfIron -= randAmount[2];
                                break;
                            }
                        } else if (rand == 3) {
                            numOfFuel -= randAmount[0];
                            if (rand2 == 1) {
                                numOfIron -= randAmount[1];
                                numOfCopper -= randAmount[1];
                                break;
                            } else if (rand2 == 2) {
                                numOfCopper -= randAmount[1];
                                numOfIron -= randAmount[2];
                                break;
                            }
                        }
                    }
                }
            }
            else {
              scan = false;
              if (button === 'menu'){
                menuSelected = true;
                scan = true;
              }
            }
            console.log(numOfIron);
            console.log(numOfCopper)
            console.log(numOfFuel);
            if (menuSelected === true){
              if (selection === 1) {
                scanSpeed += 10;
              }
              else {
                scanSpeed -= 10; 
              }
            }
        }
    }
}

console.log(numOfIron);
console.log(numOfCopper);
console.log(numOfFuel);