function printNumOfResources (){
    //prints the number of items the
    ctx.fillText(randAmount[0], (xposOfResource + 80), 260);
    if (randNum === 2 || randNum === 3) {
        ctx.fillText(randAmount[1], (xposOfResource2 + 80), 260);
    }
    if (randNum === 3) {
        ctx.fillText(randAmount[2], (xposOfResource3 + 80), 260);
    }
    for(var i = 0; i < randNum; i++){
        if(resourceUsed[i] === 1){
            ctx.drawImage(copper, xposOfResource, 210 , 100, 100);
        }
        if(resourceUsed[i] === 2){
            ctx.drawImage(fuel, xposOfResource2, 190, 100, 100);
        }
        if(resourceUsed[i] === 3){
            ctx.drawImage(iron, xposOfResource3, 200, 100, 100);
        }
    }
}
//function prints the number of resources the player currently has left
function printResources() {
    ctx.drawImage(fuel, 1000, -10, 100, 100);
    ctx.drawImage(copper, 750, 10, 100, 100);
    ctx.drawImage(stars, 400, -10, 100, 100);
    ctx.drawImage(iron, 50, -10, 100, 100);
}
//background plus alien thats always printed out
function printGame(){
    ctx.drawImage(backgroundAsteroid, 0, 0, 1280, 720); //draws the background
    printResources(); //print the resouces onto the screen
    //prints image of the alien that is asking for the resources, and a speech bubble
    ctx.drawImage(alienAvatar, 800, 350, 200, 200);
    ctx.drawImage(speechBubble, 750, 200, 500, 150);
    ctx.drawImage(yesButton, 50, 150, 200, 150);
    ctx.drawImage(noButton, 50, 350, 200, 150);
    ctx.drawImage (menu, 1220, 10, 50, 50);
}