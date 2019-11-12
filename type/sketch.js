let data;

function preload() {
  let url = 'https://gist.githubusercontent.com/shinout/1403826/raw/421d01202c4b065cd2c4c5f4294492bd2d8809b8/jis1_regular_merged.json';
  data = loadJSON(url);
}

function setup() {
  createCanvas(800, 600);
  console.log(data);
}

function draw(){
  background(225);
  
	frameRate(1);

let rowNum = 12;
  let lineNum = 9;
  let w = width / rowNum;
  let h = height /lineNum;


//texts
  
  for (let i = 0; i < rowNum; i ++) {
    for (let j = 0; j < lineNum; j ++) {
        textSize(w-4);
        textAlign(CENTER, CENTER);
        let str = data[int(random(Object.keys(data).length))];
        fill(0);
        text(str, w*i + w / 2, h*j + h / 2);
      }
    }

// shape
  noStroke();
  fill(255, 202, 40);
  let x =int(random(0,rowNum));
  let y = int(random(0,lineNum));
rect(x*w,y*h,w*int(random(1,5)),h*int(random(1,5)));
 


//bigtext
let rowNum2 = 4;
  let lineNum2 = 3;
  let w2 = width / rowNum2;
  let h2 = height /lineNum2;
  let x2 =int(random(0,rowNum2));
  let y2 = int(random(0,lineNum2));
fill(225);
rect(x2*w2,y2*h2,w2*int(random(1,2)),w2*int(random(1,2)));
let str2 = data[int(random(2994))];
fill(0);
textSize(w2);
text(str2,x2*w2 + w2 / 2, y2*h2 + h2 / 2);
  }





