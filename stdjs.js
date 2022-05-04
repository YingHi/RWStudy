var canvas = document.getElementById('canvas');
var context =canvas.getContext('2d');

class player{
    constructor(x,y,r,c){
        this.x = x;
        this.y = y;
        this.r = r;
        this.c = c
    }

    draw() {
        context.beginPath();
        context.fillStyle = this.c
        context.arc(this.x, this.y, this.r, 0, 2*Math.PI);
        context.fill();
        context.closePath();
    }
}

var p = new player(100,100,50, "yellow");
p.draw();
var es = new Array();

canvas.onclick = function(event){
    const x = event.clientX - context.canvas.offsetLeft;
    const y = event.clientY - context.canvas.offsetTop;
    es.push(new Enemy(x,y));
    es[es.length-1].draw();
    console.log(es);
}

class Enemy{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    draw() {
      context.beginPath();
      context.fillStyle = "violet"
      context.rect(this.x, this.y, 50, 50)
      context.fill();
      context.closePath();
    }
}