function checkResource(){
  for (var i = 0; i < rand; i++){ //goes through every index in the array
    if(resourceX[i] >= xPosDrill - 50 * ratioWidth && resourceX[i] <= xPosDrill + 120 * ratioWidth){ //if the any of these conditions are true (the drill has encountered the object)
       var xTriangle = resourceX[i] - xPosDrill;
       var yTriangle;
       if(xTriangle <= 100 * ratioWidth){
           yTriangle = 2/(1/xTriangle);
       }else{
           xTriangle = 170 * ratioWidth - xTriangle;
           yTriangle = 20/(7/xTriangle);
       }
       if(yTriangle + 150 * ratioWidth >= resourceY[i] && resourceY[i] >= 150 * ratioWidth){
           if(resourceHidden[i] === "false"){
               if(resourcePrinted[i] === 1){ //if the resource number is 1 it adds to the number of iron collected
                   numOfIron++;
                   inventory.iron = inventory.iron + 1;
               }
               else if(resourcePrinted[i] === 2){ //if the resource number is 2 it adds to the number of copper collected
                   numOfCopper++;
                   inventory.copper = inventory.copper + 1;
               }
              else if(resourcePrinted[i] === 3){ //if the resource number is 3 it adds to the number of fuel collected
                   numOfFuel++;
                   inventory.fuel = inventory.fuel + 1;
               }
               else if(resourcePrinted[i] === 4){ //if the resource number is 1 it adds to the number of stars collected
                   numOfStars++;
                   inventory.star = inventory.star + 1;
               }
                   resourceHidden[i] = "true"; //chages the value of resourceHidden to true to the image is not prints when the interval is done
           }
       }
    }
  }
  locateResource(); //goes back to locateResource to make sure the proper iamges are being printed
}
