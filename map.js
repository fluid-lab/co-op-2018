var canvas = document.getElementById("Canvas");
var ctx = canvas.getContext("2d");


ctx.beginPath();
ctx.arc(240, 160, 40, 0, Math.PI*2, false);
ctx.fillStyle = "#ff8300";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "#ff8300";
ctx.stroke();
ctx.fill();
ctx.closePath();


var image = new Image();
image.src = "Circle Test.png";

window.onload = function() {
    ctx.drawImage(image,10,10,150,150);
    ctx.drawImage(image,100,210,150,150);
};
