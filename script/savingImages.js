function saveImages(){
  getImagesDrill();
  getImagesMaterials();
}

function getImagesMaterials(){
   fuel = this.document.getElementById ("fuel");
   iron = this.document.getElementById ("iron");
   copper = this.document.getElementById ("copper");
   stars = this.document.getElementById ("stars");
}
function getImagesDrill(){
   drill = this.document.getElementById ("drill");
   scannedDrill = this.document.getElementById ("ScannedDrill");
   background = this.document.getElementById("background");
   rightArrow = this.document.getElementById ("rightArrow");
   leftArrow = this.document.getElementById ("leftArrow");
   leftArrowScanner = this.document.getElementById("leftArrowScanner");
   rightArrowScanner = this.document.getElementById ("rightArrowScanner");
   pointScreen = this.document.getElementById("pointScreen");
}
