// Ball
class Ball extends p5.Vector {
  constructor(
    initialX = 0,
    initialY = 0,
    radius = 20,
    enableCollision = false
  ) {
    super(initialX, initialY);
    this.radius = radius;
    this.enableCollision = enableCollision;
  }

  setDirection(angle) {
    const sinTheta = sin(angle);
    const cosTheta = cos(angle);
    this.direction = createVector(cosTheta, sinTheta);
  }

  setSpeed(speed = 1) {
    this.speed = speed;
    this.xVelocity = this.direction.x * speed;
    this.yVelocity = this.direction.y * speed;
  }

  // Event listener
  onSpeedChange(event) {
    this.setSpeed(event.target.value);
  }

  onAngleChange(event) {
    this.setDirection(event.target.value);
    this.setSpeed(this.speed);
  }

  move() {
    ellipse(this.x, this.y, this.radius);
    this.x += this.xVelocity;
    this.y += this.yVelocity;
    if (this.enableCollision) {
      // TODO:
      // Check for collision and change direction
    }
  }
}

export default Ball;
