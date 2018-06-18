//FOR ALL SCRIPTS
var canvasWidth = 1280;
var canvasHeight = 720;

var scanSpeed = 10;
var speedCounter = 0;
var scanTimes = 1;
var speedLimit = 1500/scanSpeed / scanTimes;
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var stage = "rebuildingShip";
//End of all variables thats global

//variables for images
//variables to store images
var backgroundAsteroid;
var alienAvatar;
var speechBubble;
var noButton;
var yesButton;
var scannedNoButton;
var scannedYesButton;
var dropDownMenu;
var scannedMenu;
var dropDown;
var plus;
var minus;
var scannedPlus;
var scannedMinus;

//variables of resources (images)
var fuel;
var iron;
var copper;
var stars;

//var for x positions of the resources
var xposOfResource = 770;
var xposOfResource2 = 870;
var xposOfResource3 = 990;

//Different Stages of scanning
var rebuildingShipScanningStage = 1;
var imageSelection = 0;
var pressedButton = false;

window.onload = function() {
    //loads images
    loadImage();
    loadResources();
    printGame ();
    ctx.font = "40pt Calibri";
    randResources();
    printNumOfResources();
    var id = setInterval(animation, scanSpeed);
};

function animation(){
    if(stage === "rebuildingShip"){
        printGame();
        printNumOfResources();
        speedCounter++;
        if(speedCounter >= speedLimit){
            imageSelection++;
            pressedButton = false;
            speedCounter = 0;
            if(imageSelection >= 3){
                imageSelection = 0;
            }
        }
        if(rebuildingShipScanningStage === 1){
            if(imageSelection === 0){
                ctx.drawImage(scannedYesButton, 50, 150, 200, 150);
            }
            if(imageSelection === 1){
                ctx.drawImage(scannedNoButton, 50, 350, 200, 150);
            }
            if(imageSelection === 2){
                ctx.drawImage(scannedMenu, 1220, 10, 50, 50);
            }
        }
        if(rebuildingShipScanningStage === 2){
            ctx.drawImage(dropDown, 0, 0, 1280, 300);
            ctx.drawImage (plus, 200, 150, 50,50);
            ctx.fillText (scanTimes.toFixed(2) + "x", 100, 150);
            ctx.drawImage (minus, 50, 150, 50, 50);
            ctx.drawImage (menu, 1200,200,50,50);
            if(imageSelection === 0){
                ctx.drawImage (scannedMinus, 50, 150, 50,50);
            }
            if(imageSelection === 1){
                ctx.drawImage (scannedPlus, 200, 150, 50,50);
            }
            if(imageSelection === 2){
                ctx.drawImage (scannedMenu, 1200,200,50,50);
            }
        }
    }
}