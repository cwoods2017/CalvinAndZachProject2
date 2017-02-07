//Zach Teutsch
//Array test Javascript
//January 26th, 2017



var can = document.getElementById("myCanvas");
var cont = can.getContext("2d");

//orbit center variables (OC)

var xOC = 350;
var yOC = 350;
var radiusOC = 30;
var massOC = 7000;

createOrbitCenter();

//planet variables

var rads = [];

var xSpeeds = [];
var ySpeeds = [];

var xPositions = [];
var yPositions = [];


function generate(){


blankIt();

for(x = 0; x < rads.length; x++){



    xSpeeds[x] += getXAcceleration(xPositions[x], yPositions[x]);
    ySpeeds[x] += getXAcceleration(xPositions[x], yPositions[x]);

    xPositions[x] += xSpeeds[x];
    yPositions[x] += ySpeeds[x];

    createOrbitCenter();
    cont.beginPath();
    cont.fillStyle = "black";
    cont.arc(xPositions[x], yPositions[x], rads[x], 0, 2 *Math.PI);
    cont.fill();




  }
}

function addPlanet(){

  var planetRadius = 15;

  var planetXSpeed = 5;
  var planetYSpeed = 0;

  var planetXPosition = 350;
  var planetYPosition = 150;

  rads.push(planetRadius);

  xSpeeds.push(planetXSpeed);
  ySpeeds.push(planetYSpeed);

  xPositions.push(planetXPosition);
  yPositions.push(planetYPosition);



}

function blankIt(){

  cont.fillStyle = "white";
  cont.fillRect(0, 0, can.width, can.height);

}

function createOrbitCenter(){

  cont.beginPath();
  cont.fillStyle = "orange";
  cont.arc(xOC, yOC, radiusOC, 0, 2*Math.PI);
  cont.fill();


}
/*
function getDistanceFromCenter(pX, pY){

  var distanceX = Math.abs(xOC - pX);
  var distanceY = Math.abs(yOC - pY);

  var distance = Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));

  return distance;

}

function getXDistanceFromCenter(pX){

  return Math.abs(xOC - pX);

}

function getYDistanceFromCenter(pY){

  return Math.abs(xOC - pY);

} */

function getXAcceleration(pX, pY){

  var distanceX = xOC - pX;
  var distanceY = yOC - pY;

  var distance = Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));

  var acceleration = massOC/Math.pow(distance, 2);


  return (distanceX/distance) * acceleration;

}

function getYAcceleration(pX, pY){

  var distanceX = xOC - pX;
  var distanceY = yOC - pY;

  var distance = Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));

  var acceleration = massOC/Math.pow(distance, 2);


  return (distanceY/distance) * acceleration;

}
