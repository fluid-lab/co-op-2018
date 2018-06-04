function numOfOptionsAvailable(){
  for(var i = 0; i < numberOfCircles.length; i++){
    var amountOfCircle = numberOfCircles[i]; //amount of circle which is defined by the number there is (just another counter)
    if(amountOfCircle === 0)
      amountOfCircle = 1;
    for(var a = 0; a < amountOfCircle; a++){
      var integerTogether1 = 0; //the first integer (tens value)
      var integerTogether2 = 0; //the second integer (ones value)
      //the two integers are used to make the maps connect the dots
      if(numOfOptions[i][a] === 1){
        //if the number of options at the specific circle is 1, then only one digit is used
        integerTogether2 = Math.floor(Math.random()*numberOfCircles[i + 1]); //gets a random circle from the next column, and puts that as a ones value
      }else if(numOfOptions[i][a] === 2){
        integerTogether1 = Math.floor(Math.random()*numberOfCircles[i + 1]);
        integerTogether2 = Math.floor(Math.random()*2);
        //a series of if statements to decide what integer 2 will be, so it doenst overlap with integer 1
        if(integerTogether1 === 1){
          if(integerTogether2 === 0 && numberOfCircles[i + 1] === 3){
            integerTogether2 = 2;
          }else{
            integerTogether2 = 0;
          }
        }else if(integerTogether1 === 2){
          if(integerTogether2 === 0){
            integerTogether2 = 1;
          }else{
            integerTogether2 = 0;
          }
        }else if(integerTogether1 === 0){
          if(integerTogether2 === 0 && numberOfCircles[i + 1] === 3){
            integerTogether2 = 2;
          }else{
            integerTogether2 = 1;
          }
        }
      }
      connectionsOfDots[i][a] = integerTogether1*10 + integerTogether2; //takes both numbers and puts them into the ararys in which dots it connects to
    }
  }
}
