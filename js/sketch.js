// ----------------- GÉNÉRATEUR --------------------------- //

// une unité = 1 seconde
let timer = 1;
function setup() {
  smooth();
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
  rectMode(CENTER);
}

function draw() {
  orbitControl();
  if (frameCount % (timer * 60) == 0) {
    drawChair(random(100, 500), random(100, 400), random(100,400), random(100,400), random(0,50));
  }
}

function drawChair(chairSeatHeight, chairWidth, chairDepth, chairBackHeight, chairFrameThickness) { 
  background(0);
  translate(-chairWidth / 2, -chairSeatHeight);
  rotateX(-PI / 9);
  rotateY(PI / 8);
   push();
   translate(chairWidth / 2, chairBackHeight / 2);
   box(chairWidth, chairBackHeight, chairFrameThickness);
   pop();

   push();
   translate(chairWidth / 2, chairBackHeight + chairFrameThickness / 2, chairDepth / 2 - chairFrameThickness / 2);
   box(chairWidth, chairFrameThickness, chairDepth);
   pop();

   push();
   translate(chairFrameThickness / 2, chairBackHeight + chairSeatHeight / 2 + chairFrameThickness, 0);
   box(chairFrameThickness, chairSeatHeight, chairFrameThickness);
   pop();

   push();
   translate(chairWidth - chairFrameThickness / 2, chairBackHeight + chairSeatHeight / 2 + chairFrameThickness, 0);
   box(chairFrameThickness, chairSeatHeight, chairFrameThickness);
   pop();

   push();
   translate(chairWidth - chairFrameThickness / 2, chairBackHeight + chairSeatHeight / 2 + chairFrameThickness, chairDepth - chairFrameThickness);
   box(chairFrameThickness, chairSeatHeight, chairFrameThickness);
   pop();

   push();
   translate(chairFrameThickness / 2, chairBackHeight + chairSeatHeight / 2 + chairFrameThickness, chairDepth - chairFrameThickness);
   box(chairFrameThickness, chairSeatHeight, chairFrameThickness);
   pop();
}

function windowResized() { 
    resizeCanvas(window.innerWidth, window.innerHeight);
}