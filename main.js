var canvas = document.getElementById("myCanvas");
var ctx = document.getElementById("myCanvas").getContext("2d");
var paddle = new Paddle(canvas.width,canvas.height);
var ball = new Ball(canvas.width,canvas.height,paddle);

function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ball.draw(ctx);
    paddle.drawPaddle(ctx);

}
function update(){
    ball.move();
    ball.checkCollision();
    draw();

}

function moveSelection(evt) {
    switch (evt.keyCode) {
        case 37:
            paddle.turnLeft();
            break;
        case 39:
            paddle.turnRight();
            break;
    }
}

window.onload = function () {

    window.addEventListener('keydown',moveSelection);
    var interval = 20;
    setInterval("update()", interval);
};
