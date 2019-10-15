let dotColor;
let dotRad = 50;

function setup() {
  createCanvas(640, 480);
  background(0);
  dotColor = color(255, 255, 255, 0);
  noStroke();
  angleMode(DEGREES);
  frameRate(10); 
}

function draw() {
fill(80-millis()/150,150-millis()/50,255-millis()/50);
  rect(0,0,640,480);
for(let i = 0; i<10;i++){
      push();
      translate(noise(i,millis()/1000)*width, noise(millis()/1000,i)*height / 2+100);
      rotate(random(180));
      fill(random(50, 180)+millis()/200, 170 - millis()/100, 10+i*5-millis()/1000,255-millis()/100);
      ellipse(map(noise(millis()/1000,i),0,1,-70,70), map(noise(millis()/1000,i),0,1,-70,70), random(10, 20 + i*4), random(10, 20  + i*4));
      pop();
  }
}