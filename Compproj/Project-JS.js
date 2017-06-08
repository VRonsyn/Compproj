var Player;
var canvasWidth = 1200;
var canvasHeight = 529;






window.onload = function () {
    var canvas = document.getElementById("GameCanvas");
    context = canvas.getContext('2d');
    context.canvas.width = canvasWidth;
    context.canvas.height = canvasHeight;
    stage = new createjs.Stage("gameCanvas");


    gameTimer = setInterval(updateTime, 1000);



}

function startGame() {
    myGameArea.start();
    Player = new component(30, 30, "red", 10, 120);
}


var myGameArea = {

    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
};

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
    this.update = function(){
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

}

function updateGameArea() {
    myGameArea.clear();
    Player.speedX = 0;
    Player.speedY = 0;
    if (myGameArea.key && myGameArea.key == 37) {Player.speedX = -1; }
    if (myGameArea.key && myGameArea.key == 39) {Player.speedX = 1; }
    if (myGameArea.key && myGameArea.key == 38) {Player.speedY = -1; }
    if (myGameArea.key && myGameArea.key == 40) {Player.speedY = 1; }
    Player.newPos();
    Player.update();
}