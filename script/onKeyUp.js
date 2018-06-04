function mouseUp(){
    if(stage === "map"){
      if(yHighlited[imageHighlighted] != undefined){
        if(imageHighlighted >= 0){
          currentCircle[currentX][currentY] = undefined;
          if(yHighlitedDirection[imageHighlighted] === "front"){
            currentCircle[currentX + 1][yHighlited[imageHighlighted]] = "current"; //changes the current circle to a new stage
            stage = typeOfGameOnDot[currentX + 1][yHighlited[imageHighlighted]];
          }
          else if(yHighlitedDirection[imageHighlighted] === "back"){
            currentCircle[currentX - 1][yHighlited[imageHighlighted]] = "current"; //changes the current circle to a new stage
            stage = typeOfGameOnDot[currentX - 1][yHighlited[imageHighlighted]];
            if(numberOfCircles[currentX] === 0){
              completionOfGame[currentX][0] = "complete";
            }
          }
          if(stage === "drill"){
            getImagesDrill();
            restartDrill();
          }
          imageLimit = 0;
          imageHighlighted = -1;
          speedCounter = 0;
        }
      }
    }else if(stage === "drill"){
      if(stage === "drill"){
           if(stop === false){ //if the drills aren't being scanned then the following is executed
               stop = true; //the drills will begin to scan
           if(imageSelection === 1){ //if the selection is 1
               sideOfPlanet = "left"; //the player can only expore the left side of the planet
           }
           else if(imageSelection === 2){ //if the selection is 2
               sideOfPlanet = "middle"; //the player can only explore the middle of the planet
           }
           else{ //else
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
           if(finishedSign === true){
             stage = "map";
             speedCounter = 0;
             imageSelection = -1;
             console.log(inventory);
           }
       }
    }else if(stage === "planet"){
      stage = "map";
    }
}
