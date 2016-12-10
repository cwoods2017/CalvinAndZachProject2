
var inc = -.1;

function createCircle (x, y, r)
{
	c = document.getElementById("myCanvas");
	ctx = c.getContext("2d");
	ctx.beginPath();
	ctx.arc(x,y,r, 0 ,2*Math.PI);
	ctx.stroke();
	ctx.fillStyle = "black";
	ctx.fill();

}

function moveCircle()
{



	blankIt();
	if(250 - inc <= 0)
		createCircle(250, 250, 25);
	else
	{
		createCircle(250, 250 - inc, 25);
		//change the below constant to alter the force of gravity
		inc+=(inc*.220);
	}
	


}


function blankIt()
{
	c = document.getElementById("myCanvas");
	ctx = c.getContext("2d");
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, 500, 500);
	ctx.clearRect(0, 0, 500, 500);

}