import Ball from './ball.js';
import Mirror from './mirror.js';

// Get Initial Values
function getInitialConfig() {
  const speed = document.getElementById('speed').value;
  const angle = document.getElementById('angle').value;
  const mirrors = document.getElementById('mirrors').value;
  return { speed, angle, mirrors };
}

// Runs only once
function setup() {
  // Setup canvas
  createCanvas(window.innerWidth, window.innerHeight);
  angleMode(DEGREES);

  // Get initial values
  const initialConfig = getInitialConfig();

  // Set origin at the center
  const origin = createVector(window.innerWidth / 2, window.innerHeight / 2);

  // Setup Mirrors
  window.mirror = new Mirror(initialConfig.mirrors, 400, origin); // numSides, length, origin

  // Setup Ball
  window.ball = new Ball(origin.x, origin.y);
  ball.setDirection(initialConfig.angle); // angle
  ball.setSpeed(initialConfig.speed);
}

// Runs in loop
function draw() {
  clear();
  mirror.draw();
  ball.move();
}

window.setup = setup;
window.draw = draw;
