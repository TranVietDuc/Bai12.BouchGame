function Paddle(mapWidth,mapHeight)
{
    this.mapWidth = mapWidth;
    this.mapHeight = mapHeight;
    this.length = 100;
    this.speed = 6;
    this.PosX = Math.floor(Math.random()*(this.mapWidth - this.length));
    this.PosY = mapHeight -50 ;
    this.drawPaddle = function (ctx)
    {
        var img2 = document.getElementById("paddleImage");
        ctx.drawImage(img2,this.PosX,this.PosY,this.length,20);
    };
    this.turnLeft = function() {
         if (this.PosX > 0)
         this.PosX -= this.speed;
    };
    this.turnRight = function (){
         if(this.PosX + this.length < mapHeight)
             this.PosX += this.speed;
    };


}

