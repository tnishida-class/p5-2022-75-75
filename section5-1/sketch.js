// テキスト「関数を使う」
// 練習問題：このプログラムを改造してEUの旗を描いてみよう
function setup(){
  createCanvas(200, 200);
  background(0,0,240);
  for(let i = 0; i < 12; i++){
    const theta = TWO_PI * i / 12; // TWO_PI は円周率πの2倍（ほかに PI, HALF_PI, QUARTER_PI　がある）
    const x = 100 + cos(theta) * 50; // 関数 cos の戻り値を使用
    const y = 100 + sin(theta) * 50; // 関数 sin の戻り値を使用
    stroke(255,255,0)
    star(x, y, 8);
    // 関数 ellipse の副作用で円が描画される
  }
}

function star(cx, cy, r){
  fill(255,255,0)
  beginShape();    // 点つなぎを始める
  for(let i = 0; i < 5; i++){
    const theta = TWO_PI * i * 2 / 5 - HALF_PI;
    const x = cx + cos(theta) * r;
    const y = cy + sin(theta) * r;
    vertex(x, y);  // 次につなぐ点を１つ増やす
    
  }
  endShape(CLOSE); // 点つなぎを終わる
}

// ヒント：section5-2 にある star 関数をここにコピーして、 draw 内で ellipse の代わりに使おう
