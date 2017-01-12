
var xspeed = 6;
var yspeed = 0;
var xpos = 500;
var ypos = 100;
var acceleration;







function createCircle (x, y, r, type, color)
{
	c = document.getElementById("myCanvas");
	ctx = c.getContext("2d");
	ctx.beginPath();
	ctx.arc(x,y,r, 0 ,2*Math.PI);
	if(type == "fill")
	{
		ctx.fillStyle = color;
		ctx.fill();
	}

	else
	{
		ctx.strokeStyle = color;
		ctx.stroke();
	}


}
var OrbitCenterY = 250;
var OrbitCenterX = 500;
var OrbitCenterSpeedX = 0;
var OrbitCenterSpeedY = 0;
function draw()
{
	// blankIt();

	createOrbitCenter();

	createPlanetOne(6, "stroke", "blue");

}



function createPlanetOne(r, type, color)
{
	createCircle(xpos, ypos, r, type, color);

		updateAcceleration();
		newYAccel= findComponentYAcceleration();
		newXAccel= findComponentXAcceleration();
		yspeed+=newYAccel;
		ypos+=yspeed;
		xspeed+=newXAccel;
		xpos+=xspeed;
}



function getYDistanceFromOrbitCenter()
{
	return OrbitCenterY - ypos;
}

function getXDistanceFromOrbitCenter()
{
	return OrbitCenterX - xpos;
}


function getDistanceFromCenter ()
{
	xVal = getXDistanceFromOrbitCenter();
	yVal = getYDistanceFromOrbitCenter();

	return Math.sqrt(Math.pow(xVal, 2) + Math.pow(yVal, 2));


}
function blankIt()
{
	c = document.getElementById("myCanvas");
	ctx = c.getContext("2d");
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, 1000, 1000);
	ctx.clearRect(0, 0, 1000, 1000);

}



function findComponentYAcceleration()
{
	Ydistance = getYDistanceFromOrbitCenter();
	hypotenuse = getDistanceFromCenter();
	newYAccel = (Ydistance*acceleration)/hypotenuse;


	return newYAccel;
}

function createOrbitCenter()
{


	createCircle(OrbitCenterX, OrbitCenterY, 21, "fill", "white");

	OrbitCenterX+=OrbitCenterSpeedX;
	OrbitCenterY+=OrbitCenterSpeedY;

	 createCircle(OrbitCenterX, OrbitCenterY, 20, "fill", "black");



}
function findComponentXAcceleration()
{
	Xdistance = getXDistanceFromOrbitCenter();
	hypotenuse = getDistanceFromCenter();
	newXAccel = (Xdistance*acceleration)/hypotenuse;
	return newXAccel;
}


function updateAcceleration()
{

	newAccel = 7000/Math.pow(getDistanceFromCenter() * 1.4, 2);

	acceleration = newAccel;


}
