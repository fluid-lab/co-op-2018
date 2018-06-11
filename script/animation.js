function animation(){
  if(stage === "map"){
    ctx.drawImage(backgroundMap, 0, 0 , sizeOfBackgroundWidth , sizeOfBackgroundHeight);
    if(currentCircle[9][0] === "current"){
      lastXValue = xPosOfCircle[9];
      lastYValue = yPosOfCircle[9][0];
      moveToLeft();
      if(xPosOfCircle[9] <= 40*ratioWidth){
        restart();
      }
    }
    if(currentCircle[9][0] != "current"){
      findCurrentCircle(); //finds the current circle
      drawLines(); //draws the lines
      drawHighlight(); //draws the highlighted line
      drawCircle();
      drawHighlightCircle();
      drawInventory();
      arrayCounterOfPlanets = 0; //type of planet
    }
  }
  if(stage === "drill"){
        if(stop === false){ //if the scanner for the drill is false then the image selection will scan a ceritan drill
            if(imageSelection === 1){ //if image scan is 1 then the first drill will be selected
                xPosDrill = 100 * ratioWidth;//the first still is at a x position of 100ox
            }
            else if(imageSelection === 2){ //if the image scan is 2 then the second image will be selected
                xPosDrill = 400 * ratioWidth; //the second drill is at a x position of 400px
            }
            else if(imageSelection === 3){ //if the image scan is 3 then the third image will be selected
                xPosDrill = 700 * ratioWidth; //the third drill is at a x position of 700px
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
                yPos -= 3 * ratioHeight;
            }
            //if the position of the drill is at the bottom of the planet then scanning of the arrows stops
            else{
                scanningArrows = false;
                showSign = true;
            }
            if(scanningArrows === false && showSign === false){ //if scanning arrows and showSigns equals false this is executed
                if(imageSelection === 1){ //if the image selected is 1 then the player can only explore the left side of the planet
                    if(sideOfPlanet === "left" && xPosDrill <= 250 * ratioWidth){
                        xPosDrill = xPosDrill + 3 * ratioWidth;
                    }
                    else if(sideOfPlanet === "middle" && xPosDrill <= 650 * ratioWidth){
                        xPosDrill = xPosDrill + 3 * ratioWidth;
                    }
                    else if(sideOfPlanet === "right" && xPosDrill <= 980 * ratioWidth){
                        xPosDrill = xPosDrill + 3 * ratioWidth;
                    }
                }
                if(imageSelection === 2){
                    if(sideOfPlanet === "left" && xPosDrill >= 0){
                        xPosDrill = xPosDrill - 3 * ratioWidth;
                    }
                    else if(sideOfPlanet === "middle" && xPosDrill >= 250 * ratioWidth){
                        xPosDrill = xPosDrill - 3 * ratioWidth;
                    }
                    else if(sideOfPlanet === "right" && xPosDrill >= 650 * ratioWidth){
                        xPosDrill = xPosDrill - 3 * ratioWidth;
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
            ctx.drawImage(drill, 100 * ratioWidth, yPosDrill, 300 * ratioWidth, 300 * ratioHeight);
            ctx.drawImage(drill, 400 * ratioWidth, yPosDrill, 300 * ratioWidth, 300 * ratioHeight);
            ctx.drawImage(drill, 700 * ratioWidth, yPosDrill, 300 * ratioWidth, 300 * ratioHeight);
            ctx.drawImage(scannedDrill, xPosDrill - 8.5 * ratioWidth, 68, 300 * ratioWidth, 300 * ratioHeight);
        }
        if(down === true){ //if down is true
            ctx.drawImage(drill,xPosDrill,yPosDrill,300 * ratioWidth,300 * ratioHeight); //draw the drill animation onto the canvas

            ctx.drawImage (rightArrow, (xPosDrill + 200 * ratioWidth), 200 * ratioHeight, 100 * ratioWidth, 50 * ratioHeight); //if down is true then print the arrow images onto the canvas
            ctx.drawImage (leftArrow, (xPosDrill - 25 * ratioWidth), 200 * ratioHeight, 100 * ratioWidth, 50 * ratioHeight); //if down is true then print the left arrow images onto the canvas

            if(imageSelection === 2){ // if image selection is 2 then the following will be executed
                ctx.drawImage (leftArrowScanner, (xPosDrill - 25 * ratioWidth), 200 * ratioHeight, 100 *ratioWidth,50 * ratioHeight); //draw the scanned left arrow onto the canvas
            }
            if(imageSelection === 1){ //if image selection is 1 then the following will be executed
                ctx.drawImage (rightArrowScanner, (xPosDrill + 200 * ratioWidth), 200 * ratioHeight, 100 * ratioWidth, 50 * ratioHeight); //draw the scanned right arrow onto the canvas
            }
        }
        ctx.fillStyle = "black";
        //if the player has reached the bottam of the planet then the point screen will show with th points printed on it
        if(showSign === true){ //150,200
            ctx.drawImage (pointScreen, 0, slidingBorderY, 1280 * ratioWidth, 1220 * ratioHeight);
            ctx.drawImage (fuel, 600 * ratioWidth, (slidingBorderY + 30 * ratioHeight), 100 * ratioWidth, 100 * ratioHeight);
            ctx.fillText (numOfFuel, 700 * ratioWidth, (slidingBorderY + 100 * ratioHeight)); //number of fuels collected by player
            ctx.drawImage (copper, 350 * ratioWidth, (slidingBorderY + 50 * ratioHeight), 100 * ratioWidth, 100 * ratioHeight);
            ctx.fillText (numOfCopper, 450 * ratioWidth, (slidingBorderY + 100 * ratioHeight));//number of coppers collected by player
            ctx.drawImage (stars, 600 * ratioWidth, (slidingBorderY + 130 * ratioHeight), 100 * ratioWidth, 100 * ratioHeight);
            ctx.fillText (numOfStars, 700 * ratioWidth, (slidingBorderY + 200 * ratioHeight)); //number of stars collected by player
            ctx.drawImage (iron, 350 * ratioWidth, (slidingBorderY + 130 * ratioHeight), 100 * ratioWidth, 100 * ratioHeight);
            ctx.fillText (numOfIron, 450 * ratioWidth, (slidingBorderY + 200 * ratioHeight)); //number of irons collected by player
            if(slidingBorderY <= -10 * ratioHeight){
                slidingBorderY += 3 * ratioHeight;
            }else{
              finishedSign = true;
            }
        }
        //put all the points in the right corner of the canvas
        ctx.font = "40pt Calibri";
        //this statement prints the points the player has collected
        if(showSign === false){
            ctx.drawImage(fuel, 1000 * ratioWidth, -10 * ratioHeight, 100 * ratioWidth, 100 * ratioHeight);
            ctx.fillText (numOfFuel, 1100 * ratioWidth,60 * ratioHeight);
            ctx.drawImage(copper, 750 * ratioWidth, 10 * ratioHeight, 100 * ratioWidth, 100 * ratioHeight);
            ctx.fillText (numOfCopper, 850 * ratioWidth, 60 * ratioHeight);
            ctx.drawImage (stars, 400 * ratioWidth, -10 * ratioHeight, 100 * ratioWidth, 100 * ratioHeight);
            ctx.fillText (numOfStars, 500 * ratioWidth, 60 * ratioHeight);
            ctx.drawImage (iron, 50 * ratioWidth, -10 * ratioHeight, 100 * ratioWidth, 100 * ratioHeight);
            ctx.fillText (numOfIron, 150 * ratioWidth, 60 * ratioHeight);
        }
  }
  if(stage === "back"){
    ctx.drawImage(backgroundMap, 0, 0);
  }
}
