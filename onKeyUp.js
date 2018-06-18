window.onkeyup = function(e) { //takes the spacebar as a key input
    if (e.key === " ") {
        if(stage === "rebuildingShip"){
            if(rebuildingShipScanningStage === 2 && pressedButton === false){
                if(imageSelection === 0){
                    if(scanTimes - 0.25 >= 0.25){
                        scanTimes -= 0.25;
                    }
                    pressedButton = true;
                }
                if(imageSelection === 1){
                    if(scanTimes + 0.25 <= 3){
                        scanTimes += 0.25;
                    }
                    pressedButton = true;
                }
                if(imageSelection === 2){
                    rebuildingShipScanningStage = 1;
                    pressedButton = true;
                    imageSelection = 3;
                    speedCounter = 0;
                }
                speedLimit = 1500/ scanSpeed / scanTimes;
            }
            if(rebuildingShipScanningStage === 1 && pressedButton === false){
                if(imageSelection === 0){
                    stage = "map";
                }
                if(imageSelection === 1){
                    stage = "map";
                }
                if(imageSelection === 2){
                    rebuildingShipScanningStage = 2;
                    imageSelection = 3;
                    speedCounter = 0;
                }
            }
        }
        else if(stage === "map"){
            stage = "rebuildingShip";
            imageSelection = 0;
            speedCounter = 0;
        }
    }
}