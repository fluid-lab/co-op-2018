//drawing the highlighted lines
function drawHighlight(){
    //if its the first imageHighlighted then draws from current circles to the new circle
    ctx.beginPath();
    ctx.lineWidth = 8;
    ctx.strokeStyle="#FFFF00"; //colour yellow
    if(randomX[currentX + 1] === undefined){

    }else{
      ctx.moveTo(xPosOfCircle[currentX] + randomX[currentX][currentY],yPosOfCircle[currentX][currentY]); //starts from the circle its looking at
      if(yHighlitedDirection[imageHighlighted] === "front")
        ctx.lineTo(xPosOfCircle[currentX + 1] + randomX[currentX + 1][yHighlited[imageHighlighted]],yPosOfCircle[currentX + 1][yHighlited[imageHighlighted]]); //draws to the circle its connecting too
      if(yHighlitedDirection[imageHighlighted] === "back")
        ctx.lineTo(xPosOfCircle[currentX - 1] + randomX[currentX - 1][yHighlited[imageHighlighted]],yPosOfCircle[currentX - 1][yHighlited[imageHighlighted]]); //draws to the circle its connecting too
      ctx.stroke();
    }
    if(speedCounter === speedLimit){
      speedCounter = 0;
      imageHighlighted += 1;
      if(imageHighlighted === imageLimit){
        imageHighlighted = 0;
      }
    }
    speedCounter++;
}

//drawing the highlighted circles
function drawHighlightCircle(){
  ctx.beginPath();
  ctx.fillStyle = 'yellow';
  if(yHighlited[imageHighlighted] != undefined && randomX[currentX + 1] != undefined){
    while(typeOfGameOnDot[currentX][0] === "planet" && completionOfGame[currentX][0] === "incomplete" && yHighlitedDirection[imageHighlighted] === "front"){
      imageHighlighted++;
    }
    if(yHighlitedDirection[imageHighlighted] === "front"){
      ctx.arc(xPosOfCircle[currentX + 1] + randomX[currentX + 1][yHighlited[imageHighlighted]],yPosOfCircle[currentX + 1][yHighlited[imageHighlighted]],radius,0,2*Math.PI); //draws a circle in the specific placement
    }
    if(yHighlitedDirection[imageHighlighted] === "back"){
      ctx.arc(xPosOfCircle[currentX - 1] + randomX[currentX - 1][yHighlited[imageHighlighted]],yPosOfCircle[currentX - 1][yHighlited[imageHighlighted]],radius,0,2*Math.PI); //draws a circle in the specific placement
    }
  }
  ctx.fill();
  if(numberOfCircles[currentX + 1] === 0 && yHighlitedDirection[imageHighlighted] === "front"){
    ctx.drawImage(highlight,xPosOfCircle[currentX + 1] - sizeOfPlanet/2,yPosOfCircle[currentX + 1][yHighlited[imageHighlighted]] - sizeOfPlanet/2,sizeOfPlanet + 10,sizeOfPlanet + 10);
    ctx.drawImage(planet,xPosOfCircle[currentX + 1] - sizeOfPlanet/2,yPosOfCircle[currentX + 1][yHighlited[imageHighlighted]] - sizeOfPlanet/2,sizeOfPlanet,sizeOfPlanet);
  }
}

//drawing the specific pathways
var specificY = 0; //find the specific Y value its drawing to
function drawLines(){
  for(var x = 0; x < numberOfCircles.length; x++){
    var counterOfCircles = numberOfCircles[x]; //another counter for the foor loop
    if(counterOfCircles === 0){
      counterOfCircles = 1;
    }
    for(var y = 0; y < counterOfCircles; y++){
      specificY = 0; //sets speificY = 0
      if(numOfOptions[x][y] === 2){
        specificY = Math.floor(connectionsOfDots[x][y]/10); //takes the first integer which is the next columns circle its drawing too
        drawingSpecificLines(x,y);//takes the x and y of current circle and starts drawing from there
        specificY = connectionsOfDots[x][y] - Math.floor(connectionsOfDots[x][y]/10)*10; //takes the second integer which is also another circle
        drawingSpecificLines(x,y); //tkaes the x and y of current circle and draws it from there
      }else if(numOfOptions[x][y] === 1){
        specificY = connectionsOfDots[x][y]; //takes the one digit
        drawingSpecificLines(x,y); //drawing from the x and y of current circle
      }
    }
  }
}

function drawingSpecificLines(x,y){
  ctx.beginPath();
  ctx.lineWidth = 8;
  ctx.strokeStyle="#FFFFFF";
  ctx.moveTo(xPosOfCircle[x] + randomX[x][y],yPosOfCircle[x][y]); //starts from the circle its looking at
  ctx.lineTo(xPosOfCircle[x + 1] + randomX[x + 1][specificY],yPosOfCircle[x + 1][specificY]); //draws to the circle its connecting too
  ctx.stroke();
}

//drawing the specific circles
function drawCircle(){
  for(var x = 0; x < numberOfCircles.length;x++){
    var circleCounter = numberOfCircles[x]; //counter again
    if(circleCounter === 0){
      circleCounter = 1;
    }
    for(var y = 0; y < circleCounter; y++){
      if(numberOfCircles[x] === 0){
        //if its a planet, it will draw a planet from the type of planets we have
        if(typeOfPlanet[arrayCounterOfPlanets] === 1){
          ctx.drawImage(planet,xPosOfCircle[x] - sizeOfPlanet/2,yPosOfCircle[x][y] - sizeOfPlanet/2,sizeOfPlanet,sizeOfPlanet);
        }else if(typeOfPlanet[arrayCounterOfPlanets] === 0){
          ctx.drawImage(planet,xPosOfCircle[x] - sizeOfPlanet/2,yPosOfCircle[x][y] - sizeOfPlanet/2,sizeOfPlanet,sizeOfPlanet);
        }
        arrayCounterOfPlanets++; //array moves up for different planets
      }else{
        ctx.beginPath();
        ctx.fillStyle = 'white';
        ctx.arc(xPosOfCircle[x] + randomX[x][y],yPosOfCircle[x][y],radius,0,2*Math.PI); //draws a circle in the specific placement
        ctx.fill();
      }
    }
  }
}

function drawInventory() {
  ctx.font= (40*ratioWidth) + "pt Calibri";
  ctx.fillStyle= "#FFFFFF";
  ctx.drawImage (copper, ratioWidth*1*16, ratioHeight*69*9, 100 * ratioWidth, 100 * ratioHeight);
  ctx.drawImage (fuel, ratioWidth*8*16, ratioHeight*69*9, 100 * ratioWidth, 100 * ratioHeight);
  ctx.drawImage (iron, ratioWidth*15*16, ratioHeight*69*9, 100 * ratioWidth, 100 * ratioHeight);
  ctx.drawImage (stars, ratioWidth*22*16, ratioHeight*69*9, 100 * ratioWidth, 100 * ratioHeight);
  ctx.fillText(inventory.copper, ratioWidth*7*16,ratioHeight*75*9);
  ctx.fillText(inventory.fuel, ratioWidth*14*16,ratioHeight*75*9);
  ctx.fillText(inventory.iron, ratioWidth*21*16,ratioHeight*75*9);
  ctx.fillText(inventory.star, ratioWidth*28*16,ratioHeight*75*9);
}
