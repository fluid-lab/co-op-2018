var canvasWidth = 1280;
var canvasHeight = 720;

var scanSpeed = 10;
var speedCounter = 0;
var speedLimit = 1500 / scanSpeed;
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var stage = "map"; //the different stages

var inventory = {
  copper: 0,
  fuel: 0,
  iron: 0,
  star: 0
};

var ratioWidth = canvasWidth/1280;
var sizeOfPlanet = 150 * ratioWidth;//size of the planets
var sizeOfBackgroundWidth = canvasWidth;
var sizeOfBackgroundHeight = canvasHeight;
