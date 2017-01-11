/*
Zach Teutsch
gravity simulation
JavaScript
*/

var can = document.getElementById("myCanvas");
var cont = can.getContext("2d");

// variable to store current downwards velocity due to gravity
var yVelocity = 15;

var xVelocity = 5;

//acceleration due to gravity in terms of pixel per interval squared
var accelGrav = -.322;

//radius of falling object
var objRadius = 10;

//starting points of object
var currX = 0;
var currY = 0;



//regenerate all white background

function redrawBackground(){

  cont.fillStyle = "white";
  cont.fillRect(0, 0, can.width, can.height);

}

function drawObject(x, y) {

  // cont.beginPath();
  cont.strokeStyle = "black";
  cont.arc(x, can.height - y, objRadius, 0,2*Math.PI);
  cont.stroke();
  // cont.endPath();

}

function moveObject() {

  redrawBackground();

  currY = currY + yVelocity;
  yVelocity = yVelocity + accelGrav;

  currX = currX + xVelocity;

  drawObject(currX, currY);


}
