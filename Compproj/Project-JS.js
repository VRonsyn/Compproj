var canvas = document.getElementById("GameCanvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.rect(200, 400, 500, 500);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();