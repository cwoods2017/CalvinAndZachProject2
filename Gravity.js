
var xspeed = 0;
var yspeed = 0;
var xpos = 500;
var ypos = 30;
var yacceleration = .2;
var xacceleration = 0;
var negativeYAcceleration = -(yacceleration);

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

function moveCircle()
{



		blankIt();
			createCircle(500, 250, 50, "fill", "orange");
		
		if(ypos < 250)
		{
			createCircle(xpos, ypos, 10);
			yspeed+=yacceleration;
			ypos+=yspeed;
			xspeed+=xacceleration;
			xpos+=xspeed;
	
		}
		else
		{
			createCircle(xpos, ypos, 10);
			yspeed+=negativeYAcceleration;
			ypos+=yspeed;
			xspeed+=xacceleration;
			xpos+=xspeed;
		}
	


}


function blankIt()
{
	c = document.getElementById("myCanvas");
	ctx = c.getContext("2d");
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, 1000, 500);
	ctx.clearRect(0, 0, 1000, 500);

}