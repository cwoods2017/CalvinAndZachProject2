
var xspeed = 6;
var yspeed = 3;
var xpos = 30;
var ypos = 220;
var yacceleration = .2;
var xacceleration = .2;


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
function moveCircleAroundAnotherCircle()
{


	/* blankIt(); */
	createCircle(OrbitCenterX, OrbitCenterY, 50, "fill", "yellow");
	
	
		createCircle(xpos, ypos, 1, "stroke", "red");
		
		Ydistance = getYDistanceFromOrbitCenter();
		Xdistance = getXDistanceFromOrbitCenter();
		hypotenuse = getDistanceFromCenter();
		newYAccel = (Ydistance*yacceleration)/hypotenuse;
		newXAccel = (Xdistance*xacceleration)/hypotenuse;



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
	ctx.fillRect(0, 0, 1000, 500);
	ctx.clearRect(0, 0, 1000, 500);

}