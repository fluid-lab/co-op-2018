var randNum = Math.floor(Math.random() * 3) + 1; //a number that determines how many items the alien will ask for
//a random numeber generator for the aliens request
//stores the number of resrouces the alien asks for each category
var randAmount = [0, 0, 0]; //number of each item (will be between 1 - 7)
var resourceUsed = [1 , 2, 3];

function randResources (){
    for(var i = 0; i < randNum; i++){
        randAmount[i] = Math.floor(Math.random() * 7) + 1;
    }
}