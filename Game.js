var canvas = document.getElementById('canvas');
var context =canvas.getContext('2d');

function getAngle(x1, y1, x2, y2) {
    var rad = Math.atan2(y2 - y1, x2 - x1);
    return (rad*180)/Math.PI ;}
class GameManager{
   constructor(){
       this.now_bullet = 0;
       this.Score = 0;
       this.max_bullet = 5;
       this.SummonCoolTime = 8;
       this.Enemys = new Array();
       this.Bullets = new Array();
       this.Players = new Player();
   }
   OnUpdate(){
        this.a = this.Finish();
        if(this.a == 1) return;
        this.SummonEnemy();
        this.OnDraw();
   }
   SummonEnemy(){
       this.SMX = 500;
       this.SMY = 350;
       this.SMX = Math.floor(Math.random() * 1000);
       if(this.SMX > 900 || this.SMX < 100){ // x좌표가 모서리라면 랜덤 y에 소환
        this.SMY = Math.floor(Math.random() * 700);
       }else{ // x좌표가 모서리가 아니라면 y좌표를 모서리가 나올때까지 반복
        this.R = Math.random * 2;
        if(this.R < 1){
            this.SMY = Math.floor(Math.random() * 100);
        }else{
            this.SMY = Math.floor(Math.random() * 100) + 600;
        }
       }
       this.Enemys.push(new Enemy(Math.random * 150, Math.random * 2, this.SMX, this.SMY, this.Enemys.length))
       console.log(this.SMX)
       console.log(this.SMY)
   }
   OnDraw(){
       context.clearRect(0, 0, canvas.width, canvas.height);
       this.Players.OnDraw();
       for(var i = 0; i < this.Enemys.length; i++){
           this.Enemys[i].Move();
           this.Enemys[i].OnDraw();
       }
   }
   Finish(){
       if(this.Players.HP <= 0){
        return 1;
       }
       else{
        return 0;
       }
   }
}

class Enemy{
    constructor(h,s,x,y,N){
        this.HP = h;
        this.Speed = s;
        this.Atk = 10;
        this.X = x;
        this.Y = y;
        this.Size;
        this.Destination_X = 500;
        this.Destination_Y = 350;
        this.E_N = N;
        if(this.X > this.DestinationX){
            this.dx = -1 * this.Speed * (this.DestinationX/(this.DestinationX+this.DestinationY));
          }
          else{
            this.dx = this.Speed * (this.DestinationX/(this.DestinationX+this.DestinationY));
          }
          if(this.Y > this.DestinationY){
            this.dy = -1 * this.Speed * (this.DestinationY/(this.DestinationX+this.DestinationY));
          }
          else{
            this.dy = this.Speed * (this.DestinationY/(this.DestinationX+this.DestinationY));
          }
          this.AAA = getAngle(this.X,this.Y,this.Destination_X,this.Destination_Y);
        }

    Hit(){ // 공격하는 함수(필요없을듯)
    }
    Damaged(Atk){ // 데미지 받는 함수
        this.HP -= Atk;
    }
    OnUpdate(){
        this.OnDraw();
    }
    OnDraw(){
        this.Size = 1.5 * this.HP;
        context.beginPath();
        context.fillStyle = "red"
        context.arc(this.x, this.y, this.Size, 0, 2*Math.PI);
        context.fill();
        context.closePath();
    }
    Move(){
        this.X = this.X + this.dx;
        this.Y = this.Y + this.dy;
        console.log(this.X);
        console.log(this.Y);
      }
    }

class Bullet{
  constructor(x,y,sp,dx,dy,at){
    this.X = x;
    this.Y = y;
    this.Speed = sp;
    this.DestinationX = dx;
    this.DestinationY = dy;
    this.ATK = at;

    //총알이 움직이려면 dx,dy도 있어야 편할 거 같아서 추가했습니다.
    //destinationX값과 destinationY값 사이의 비로 speed를 나누어서 각각 dx, dy에 넣었습니다.
    if(X > DestinationX){
      this.dx = -1 * Speed * (DestinationX/(DestinationX+DestinationY));
    }
    else{
      this.dx = Speed * (DestinationX/(DestinationX+DestinationY));
    }
    if(Y > DestinationY){
      this.dy = -1 * Speed * (DestinationY/(DestinationX+DestinationY));
    }
    else{
      this.dy = Speed * (DestinationY/(DestinationX+DestinationY));
    }
  }

  OnStart(){

  }

  OnUpdate(){

  }

  Move(){
    X = X + dx;
    Y = Y + dy;
  }

  Delete(){
    //총알 삭제
  }

  OnDraw(){
    context.beginPath();
        context.arc(this.X, this.Y, 1, 0, 2*Math.PI);
        context.fillStyle = "black";
        context.fill();
        context.closePath();
  }
}


class Player{
    constructor(){
        this.HP = 100;
        this.x = 500;
        this.y = 350;
    }

    OnDraw(){
        context.beginPath();
        context.fillStyle = "yellow"
        context.arc(this.x, this.y, 50, 0, 2*Math.PI);
        context.fill();
        context.closePath();
    }

    Damaged(ATK){
        this.HP -= Atk;
    }
}

var Gm = new GameManager();

canvas.onclick = function(){
    Gm.OnUpdate();
}