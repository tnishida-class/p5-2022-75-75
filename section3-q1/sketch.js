// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count; //
let cycle;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 100;
}

function draw(){
  background(160, 192, 255);
  
  count = (count + 1) % 50
  //周期的に動く変数を作っている
  // BLANK[1]
  let size = count;
  ellipse(width / 2, height / 2, size);
  
  if(keyIsDown("1".charCodeAt(0))){
   
    count = (count + 5) % 50;
    size=count;
  ellipse(width / 2, height / 2, size);
     
  
   }  
}