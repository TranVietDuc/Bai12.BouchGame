function Ball(mapWidth,mapHeight)
{
    this.mapWidth = mapWidth;
    this.mapHeight = mapHeight;
    this.radius = 15;
    this.speedX= 3;
    this.speedY = 3;
    this.Posx= Math.floor(Math.random()*(this.mapWidth-2*this.radius))+this.radius;
    this.Posy= Math.floor(Math.random()*(this.mapHeight-2*this.radius))+this.radius;
    this.getPaddle = paddle;
    this.draw = function (ctx)
    {
        var img = document.getElementById("ballImage");
        ctx.drawImage(img,this.Posx-this.radius,this.Posy-this.radius,this.radius*2,this.radius*2);
    };
    this.move = function(){
        this.Posx += this.speedX;
        this.Posy += this.speedY;
        this.left = this.Posx- this.radius;
        this.top = this.Posy - this.radius;
        this.right = this.Posx + this.radius;
        this.bottom = this.Posy + this.radius;
    };
    this.checkCollision = function (shapes)
    {
        if (this.left <= 0 || this.right >= this.mapWidth)
            this.speedX = - this.speedX;
        if (this.top <= 0 || this.bottom >= this.mapHeight)
            this.speedY = - this.speedY;
        if (this.bottom >= this.getPaddle.PosY && this.Posx >=this.getPaddle.PosX && this.Posx <= (this.getPaddle.PosX + this.getPaddle.length) )
           this.speedY = - this.speedY;
    };
}

