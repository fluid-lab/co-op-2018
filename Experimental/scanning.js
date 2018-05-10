var canvasWidth = 1280;
var canvasHeight = 720;

var selected = false;
var scanSpeed = 60;
var speedCounter = 0;
var speedLimit = 1500/scanSpeed;
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var stage = 1; //stage 1 is the first choice, stage 2 is the second choice

//var drill;
//var scannedDrill;
//var background;
//var rightArrow;
//var leftArrow;
//var leftArrowScanner;
//var rightArrowScanner;

var imageSelection = 1;
var xPos = 50;
var yPos = 0;

//var miningPlanetHeight = (1280/1600) * 3000;
//var miningPlanetWidth = 1280;
//var bottomOfPlanet = ((1280/1600) * 2100) * -1;

 window.onload = function (){
    choice = this.document.getElementById ("Choice");
    hChoice = this.document.getElementById ("HChoice");
    background = this.document.getElementById ("background");
    back = this.document.getElementById ("back");
    hBack = this.document.getElementById ("HBack");

    ctx.drawImage(background,0, 0,);
    ctx.drawImage(choice, 50, 50, 300, 300);
    ctx.drawImage(choice,350, 50, 300, 300);
    ctx.drawImage(back,650, 50, 300, 300);

    var id = setInterval(animation,scanSpeed);
 };
 function animation(){
    if(stage == 1){
        if(imageSelection === 1){
            xPos = 50;
        }
        else if(imageSelection === 2){
           xPos = 350;
        }
        else if(imageSelection === 3){
           xPos = 650;
        }
        else if(imageSelection >= 4){
            imageSelection = 1;
        }
        if(speedCounter === speedLimit){
           imageSelection++;
           speedCounter = 0;
        }
        speedCounter++;
    }
    if(selected === true){
//        if(!(yPos <= bottomOfPlanet)){
//            yPos = yPos - 10;
//        }
        if(speedCounter === speedLimit){
            imageSelection++;
            speedCounter = 0;
            if(imageSelection === 3){
                imageSelection = 1;
            }
         }
         speedCounter++;
    }
    ctx.drawImage(background,0,yPos);
    if(stage == 1){
        ctx.drawImage(choice, 50, 50, 300, 300);
        ctx.drawImage(choice,350, 50, 300, 300);
        ctx.drawImage(back,650, 50, 300, 300);
        if (xPos >= 650){
          ctx.drawImage(hBack,650, 50, 300, 300);
        }else{
          ctx.drawImage(hChoice, xPos, 50, 300, 300);
        }
    }
    if(stage == 2){
      if (xPos >= 650){
        ctx.drawImage(hBack,650, 50, 300, 300);
      }else{
        ctx.drawImage(hChoice, xPos, 50, 300, 300);
      }
    }
//    if(selected === true){
//        ctx.drawImage (leftArrow, (xPos - 25), 200, 100, 50);
//            ctx.drawImage (leftArrowScanner, (xPos - 25), 200, 100 ,50);
//        if(imageSelection === 1){
//            ctx.drawImage (rightArrowScanner, (xPos + 200), 200, 100, 50);
//        }
//    }
}
 window.onkeyup = function(e){
     if(e.key === " "){
         if(stage == 1){
           if (imageSelection!=3) {
             stage = 2;
             imageSelection = 1;
             speedCounter = 0;
           }else {
             stage = 0
           }

         }
         if(stage == 2){
            if(selected === false){
                selected = true;
            }
         }
     }
 }
