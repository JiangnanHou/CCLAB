let snowflakes = []; // array to hold snowflake objects

function setup() {
  createCanvas(400, 600);
  fill(240);
  
}

function draw() {
  background('navy');

  fill(50,100,255);
  textAlign(CENTER, CENTER)
  textSize(270);
  text("ICE", width/2,100);
  textSize(270);
  text("CRE", width/2,310);
  textSize(270);
  text("AM", width/2,520)
  
  fill(255);
  noStroke();
 
  let t = frameCount / 60; // update time

  // create a random number of snowflakes each frame
  for (let i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake()); // append snowflake object
  }

  // loop through snowflakes with a for..of loop
  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  }

  //head
  
let h = 0;
if (frameCount>150){
h = h + (frameCount-150)/10;
    
  fill(255);

  arc(width/2, 300, 200, h, PI, TWO_PI);
}


  //cone
  fill('orange');
  triangle(width/2-100, 300, width/2+100, 300, width/2, 550)
}

// snowflake class
function snowflake() {
  // initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);

  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    // x position follows a circle
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 0.5);

    // delete snowflake if past end of screen
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
}
