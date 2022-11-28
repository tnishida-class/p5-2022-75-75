// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I am NANGO.",70,80);
}

function balloon(t,x,y){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = w+x;
  let q = h+2*y
  fill(255,140,0);
 stroke(255,140,0);
  rect(x, y, p , q); triangle(p+x*1/2,q+y,p+x,q+y,p+x,q+y*1.5)
  fill(255,255,255);
  text(t, 1.5*x, h+2*y);
  
  
}
