//finding the current circles
function findCurrentCircle(){
  for(var x = 0; x < numberOfCircles.length; x++){
    var amount = numberOfCircles[x]; //counter
    if(amount === 0)
      amount = 1;
    for(var y = 0; y < amount; y++){
      if(currentCircle[x][y] === "current"){
        //if they find the current circle, take that x and y value
        currentX = x;
        currentY = y;
        break;
      }
    }
    findOptions(); //after finding the current circle, find options
  }
}

//finding which lines were used
function findOptions(){
  yHighlited = [];
  yHighlitedDirection = [];
  var counter = 0;
  imageLimit = 0;
  if(numOfOptions[currentX][currentY] === 2){
    //if the number of options in that circle is 2, then there is 2 highlited parts and image limit is 2
    yHighlited[counter] = Math.floor(connectionsOfDots[currentX][currentY]/10);
    yHighlitedDirection[counter] = "front";
    counter++;
    imageLimit++;
    yHighlited[counter] = connectionsOfDots[currentX][currentY] - Math.floor(connectionsOfDots[currentX][currentY]/10)*10;
    yHighlitedDirection[counter] = "front";
    counter++;
    imageLimit++;
  }
  if(numOfOptions[currentX][currentY] === 1){
    //if only one option, then only a limit of 1 and only 1 is highlighted
    yHighlited[counter] = connectionsOfDots[currentX][currentY];
    yHighlitedDirection[counter] = "front";
    counter++;
    imageLimit++;
  }
  checkBackOptions(counter);
}

//checks the back options
function checkBackOptions(counter){
  var i = 0;
  for(var a = 0; a < numberOfCircles[currentX - 1]; a++){
    if(numOfOptions[currentX - 1][a] === 1){
      i = connectionsOfDots[currentX - 1][a];
      if(i === currentY){
        yHighlited[counter] = a;
        yHighlitedDirection[counter] = "back";
        counter++;
        imageLimit++;
      }
    }else if(numOfOptions[currentX - 1][a] === 2){
      i = Math.floor(connectionsOfDots[currentX - 1][a]/10);
      if(i === currentY){
        yHighlited[counter] = a;
        yHighlitedDirection[counter] = "back";
        counter++;
        imageLimit++;
      }
      i = connectionsOfDots[currentX - 1][a] - Math.floor(connectionsOfDots[currentX - 1][a]/10)*10;
      if(i === currentY){
        yHighlited[counter] = a;
        yHighlitedDirection[counter] = "back";
        counter++;
        imageLimit++;
      }
    }
  }
}
