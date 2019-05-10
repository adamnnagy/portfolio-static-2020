var angle = 0;

function setup() {
  createCanvas(600, 600, WEBGL);
}

function draw() {
  background(220);


  push();
  rectMode(CENTER);
  rotateX(-0.5);
  rotateY((frameCount + (mouseX-width/2) )* 0.001);
  noFill();
  strokeWeight(2);
  smooth();
  box(200, 200, 200, 1, 1);
  pop();



}
