canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var mouseEvent = "empty"
var lastPositionOfX,lastPositionOfY;
color = "blue";
widthOfLine = 3;


canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e)
{

mouseEvent = "mouseDown";

}



canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e)
{

mouseEvent = "mouseUp";

}


canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e)
{

mouseEvent = "mouseLeave";

}


canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e)
{

curentpositionofmousex = e.clientX-canvas.offsetLeft;
curentpositionofmouseY = e.clientY-canvas.offsetTop;

if(mouseEvent == "mouseDown")
{

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = widthOfLine;

console.log("last position of x and y =");
console.log("x = "+lastPositionOfX+"y ="+lastPositionOfY);
ctx.moveTo(lastPositionOfX,lastPositionOfY);

console.log("Curent position of x and y =");
console.log("x = "+curentpositionofmousex+"y ="+curentpositionofmousey);
ctx.lineTo(curentpositionofmousex,curentpositionofmousey);
ctx.stroke();
}
lastPositionOfX = curentpositionofmousex;
lastPositionOfY = curentpositionofmouseY;
}