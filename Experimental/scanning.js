var canvasWidth = 1280;
var canvasHeight = 720;

var scanSpeed = 60; //Timer in
var speedCounter = 0;
var speedLimit = 1500 / scanSpeed;
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var stage = 1; //stage 1 is the first choice, stage 2 is the second choice
var stage1Choice = 0; //Choice chosen in stage 1
var stage2Choice = 0; //Choice chosen in stage 2
var imageSelection = 1; //What image is highlighted
var xPos = 50;

window.onload = function() {
    //loads images
    choice = this.document.getElementById("Choice");
    hChoice = this.document.getElementById("HChoice");
    background = this.document.getElementById("background");
    back = this.document.getElementById("back");
    hBack = this.document.getElementById("HBack");
    //draws imaages
    ctx.drawImage(background, 0, 0);
    ctx.drawImage(choice, 50, 50, 300, 300);
    ctx.drawImage(choice, 350, 50, 300, 300);
    ctx.drawImage(back, 650, 50, 300, 300);
    //repeats animation at a fixed rate
    var id = setInterval(animation, scanSpeed);
}
function animation() {
    if (stage == 1) {
        if (speedCounter === speedLimit) {
            imageSelection++;//If the counter reaches a point, it goes to the next image
            if (imageSelection >= 4) {//If the number is too high, it goes back to the beginning
                imageSelection = 1;
            }
            speedCounter = 0;
        }
        if (imageSelection === 1) {//Sets the position where something happens
            xPos = 50;
        } else if (imageSelection === 2) {
            xPos = 350;
        }
        speedCounter++;
    }
    ctx.drawImage(background, 0, 0);//refreshes the background
    if (stage == 1) {
        ctx.drawImage(choice, 50, 50, 300, 300);
        ctx.drawImage(choice, 350, 50, 300, 300);
        ctx.drawImage(back, 650, 50, 300, 300);
        if (imageSelection === 3) {
            ctx.drawImage(hBack, 650, 50, 300, 300);
        } else if (imageSelection <= 2) {
            ctx.drawImage(hChoice, xPos, 50, 300, 300);
        }
    }
    if (stage == 2) {//similar to stage 1
        ctx.drawImage(choice, 50, 450, 300, 300);
        ctx.drawImage(choice, 350, 450, 300, 300);
        ctx.drawImage(back, 650, 450, 300, 300);
        if (speedCounter === speedLimit) {
            imageSelection++;
            if (imageSelection >= 4) {
                imageSelection = 1;
            }
            speedCounter = 0;
        }
        if (imageSelection === 1) {
            xPos = 50;
        } else if (imageSelection === 2) {
            xPos = 350;
        } else if (imageSelection === 3) {
            xPos = 650;
        }
        speedCounter++;
        if (imageSelection === 3) {
            ctx.drawImage(hBack, 650, 450, 300, 300);
        } else {
            ctx.drawImage(hChoice, xPos, 450, 300, 300);
        }
    }
}
window.onkeyup = function(e) {
    if (e.key === " ") {//triggers when the space key is let go
        if (stage == 1) {
            if (imageSelection != 3) {
                if (imageSelection == 2) {
                    stage1Choice = 2;
                } else if (imageSelection == 1) {
                    stage1Choice = 1;
                }
                stage = 2;
                imageSelection = 1;
                speedCounter = 0;
            } else {
                stage = 0
            }
        } else if (stage == 2) {
            if (imageSelection != 3) {
                if (imageSelection == 2) {
                    stage2Choice = 2;
                } else if (imageSelection == 1) {
                    stage2Choice = 1;
                }
                stage = 3;
                imageSelection = 1;
                speedCounter = 0;
            } else {
                stage = 1
            }
        }
    }
}
