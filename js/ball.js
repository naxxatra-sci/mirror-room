// Ball
class Ball extends p5.Vector {
  constructor(
    initialX = 0,
    initialY = 0,
    lines=[],
    radius = 20,
    enableCollision = true
  ) {
    super(initialX, initialY);
    this.radius = radius;
    this.enableCollision = enableCollision;
    this.lines=lines;
    this.stop=false;
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
  //change the diection
  changeDirection(){
    // TODO:
    //change direction
  }

  //constantly checks for collision
  checkForCollision(x,y){
    for (var i = 0; i < this.lines.length; i++) {
      let distance=Math.abs(y-this.lines[i].slope*x-this.lines[i].intercept)/Math.sqrt(1+this.lines[i].slope*this.lines[i].slope)
      if (distance<=13) {
        return true;
      }
    }
    return false;
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
    if(!this.stop){
      this.x += this.xVelocity;
      this.y += this.yVelocity;
      if (this.enableCollision) {
        if(this.checkForCollision(this.x,this.y)){
          this.enableCollision=false
          this.stop=true
          console.log('Collision');
          this.changeDirection()
          //To be run after change direction logic
          /*setTimeout(function(){
            this.stop=false
            this.enableCollision=true
          },100)
          */
        }
      }
    }
  }
}

export default Ball;
