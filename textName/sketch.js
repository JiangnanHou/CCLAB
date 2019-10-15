let pg;
function setup() {
  createCanvas(1000, 500);
  pg = createGraphics(1000, 500);
}
function draw() {
  background(0);
  pg.background(0);
  pg.fill(255,90+80*sin(frameCount/10));
  pg.textSize(400);
  pg.textAlign(CENTER,CENTER);
  //pg.textFont(sansBlack);
  pg.push();
  pg.translate(width/2+sin(frameCount/20)*140-90,height/2);
  pg.text("J  ",0,0);
  pg.pop();

  pg.push();
  pg.translate(width/2+sin(frameCount/20)*280-50,height/2);
  pg.text("  H",0,0);
  pg.pop();
image(pg,0,0);

let tilesX = 50;
let tilesY = 25;
let tileW = int(width/tilesX);
let tileH = int(height/tilesY);

for(let y = 0; y<tilesY; y++){
  for(let x = 0; x<tilesX; x++){
    let wave = int(sin(frameCount * 0.1+(x*y)*5)*20);
    
    //soure
    let sx = x * tileW + wave;
    let sy = y * tileH;
    let sw = tileW;
    let sh = tileH;

    //destination
    let dx = x * tileW;
    let dy = y * tileH;
    let dw = tileW;
    let dh = tileH;

    copy(pg, sx, sy, sw, sh, dx, dy, dw, dh);

  }
}

}