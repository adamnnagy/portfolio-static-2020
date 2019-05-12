//centers the canvas
function centerCanvas(canvas) {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  canvas.position(x, y);
  return canvas;
}



function windowResized() {
	resize();
}

function customSetup(){
	background(255);
}


function resize(){

  var w = select('#canvas-container').width;
  var h = select('#canvas-container').height;

  console.log(w + " : " + h);

  // resizeCanvas(w, h);
  // resizeCanvas(windowWidth, windowHeight);
  resizeCanvas(window.innerWidth, window.innerHeight);

}

//###################################
//##########ACTUAL SKETCH############
//###################################

function setup() {

  var cnv;
  var x = (windowWidth) / 2;
  var y = (windowHeight) / 2;

  cnv = createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  //cnv = centerCanvas(cnv);
  cnv.position(x,y);
  cnv.parent("canvas-container");

}

function draw() {
  background(255);

  push();
  rectMode(CENTER);
  rotateX(-0.5);
  rotateY((frameCount + (mouseX-width/2) )* 0.003);
  noFill();
  strokeWeight(2);
  smooth();
  box(200, 200, 200, 1, 1);
  pop();


}
