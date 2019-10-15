let system;

function setup() {
  createCanvas(720, 400);
  noCursor();
  system = new ParticleSystem(createVector(mouseX,mouseY));
}

function draw() {
  background(250,230,50);
  system.addParticle();
  system.run();
}

// A simple Particle class
let Particle = function(position) {
  this.acceleration = createVector(0, 0.05);
  this.velocity = createVector(random(-1, 1), random(-1, 0));
  this.position = createVector(mouseX,mouseY);
  this.lifespan = 255;
};

Particle.prototype.run = function() {
  this.update();
  this.display();
};

// Method to update position
Particle.prototype.update = function(){
this.velocity.add(this.acceleration);
this.position.add(this.velocity);
this.lifespan -= 2;
};

// Method to display
Particle.prototype.display = function() {
noStroke();
fill(247,+this.lifespan,this.lifespan, this.lifespan);
ellipse(this.position.x, this.position.y, this.lifespan/10, this.lifespan/10);

};


// Is the particle still useful?
Particle.prototype.isDead = function(){
return this.lifespan < 0;
};

let ParticleSystem = function(position) {
this.origin = position.copy();
this.particles = [];
};

ParticleSystem.prototype.addParticle = function() {
this.particles.push(new Particle(this.origin));
};

ParticleSystem.prototype.run = function() {
for (let i = this.particles.length-1; i >= 0; i--) {
  let p = this.particles[i];
  p.run();
  if (p.isDead()) {
    this.particles.splice(i, 1);
  }
}
};