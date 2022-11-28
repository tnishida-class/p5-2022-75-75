// 最終課題を制作しよう

let house=[];

const g = 1;     
const jump = 20; 
const ground = 20;
const size = 20;

let x, y, vy, gy;

function setup() {
  createCanvas(500, 500);
 
  
  x = 10;
  y = height - ground - size / 2;
  vy = 0;
  gy = height - ground;
  
}

function building(x,y,a,b){
  house.push({positionX:x, positionY:y, sizeX:a, sizeY:b});
  fill(255);
  stroke(0,0,0);
  rect(x,y-b,a,b);
  rect(x+a,y-(b+20),a,b+20);
}


function draw() {
  background(117,227,255)
  line(0, gy, width, gy); 
   
  building(50,gy,30,80)
  building(150,gy,40,60)
  building(250,gy,10,180)
  building(290,gy,15,150)
  building(350,gy,40,50)
  triangle(x,y-30,x+0.5*size,y+10,x-size*0.5,y+10)
  ellipse(x, y-30, size, size)
  
  let tempoX=x
  let tempoY=y
  
 
  y += vy;
  
  if(y < height - ground - size / 2){ 
    vy += 0.5*g; 
  }
  else{
    vy = 0;
    y = height - ground - size / 2;
  }
 
if(keyIsDown(LEFT_ARROW)){x-=2;}
if(keyIsDown(RIGHT_ARROW)){x+=2;}

  for(let i =0; i<house.length; i++){
    if(x+size*0.5>house[i].positionX && x-size*0.5<house[i].positionX+house[i].sizeX && y+10>house[i].positionY-house[i].sizeY ){
      x=tempoX
      y=tempoY
  }
    if(x+size*0.5>house[i].positionX+house[i].sizeX && x-size*0.5<house[i].positionX+2*house[i].sizeX && y+10>house[i].positionY-(house[i].sizeY+20) ){
      x=tempoX
      y=tempoY
  }
}}

function keyPressed(){
   if(keyCode === UP_ARROW){
    if(y>1/2*height){vy=-0.5*jump;}
    else{vy+= g}}
}



