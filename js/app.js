import Ball from './ball.js';
import Mirror from './mirror.js';

// Runs only once
function setup() {
  // Setup canvas
  createCanvas(window.innerWidth, window.innerHeight);
  angleMode(DEGREES);

  // Set origin at the center
  const origin = createVector(window.innerWidth / 2, window.innerHeight / 2);

  // Setup Mirrors
  window.mirror = new Mirror(6, 400, origin); // numSides, length, origin
  window.mirror.getPoints();

  // Setup Ball
  window.ball = new Ball(origin.x, origin.y);
  ball.setDirection(45); // angle
  ball.setSpeed();
}

// Runs in loop
function draw() {
  clear();
  window.mirror.draw();
  window.ball.move();
}

window.setup = setup;
window.draw = draw;
