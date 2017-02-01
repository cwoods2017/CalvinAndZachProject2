//Zach Teutsch
//Array test Javascript
//January 26th, 2017



var can = document.getElementById("myCanvas");
var cont = can.getContext("2d");


var rads = [5, 15, 25];
var xSpeeds = [3, 4, 5];
var ySpeeds = [2, 4, 5];

function generate(){

for(x = 0; x < rads.length; x++){

    var xPos = Math.random() * 750;
    var yPos = Math.random() * 750;


    var color = "black";

    cont.beginPath();
    cont.strokeStyle = color;
    cont.arc(xPos, yPos, rads[x], 0, 2 *Math.PI);
    cont.stroke();


  }
}
