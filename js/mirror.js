import { getPointsAtAngle } from './utils.js';

class Mirror {
  constructor(numSides, length, origin = createVector(0, 0)) {
    this.numSides = numSides;
    this.length = length;
    this.origin = origin;

    this.getPoints();
    this.getLines();
  }

  // Get all the polygon points
  getPoints() {
    this.startAngle = 360 / this.numSides; // angle of the first point from origin
    this.points = [];
    for (let i = 1; i <= this.numSides; i++) {
      this.points.push(
        getPointsAtAngle(this.origin, this.startAngle * i, this.length)
      );
    }
    if (this.points.length) {
      this.points.push(this.points[0]); // Insert the first point again to make it connected
    }
  }

  //get line equations slope and y-intercept (y=mx+c)
  getLines(){
    this.lines = [];
    this.getPoints();
    for (let i = 0; i < this.points.length - 1; i++) {
      const pointA = this.points[i];
      const pointB = this.points[i + 1];
      let slope=(pointB.y-pointA.y)/(pointB.x-pointA.x);
      let intercept=pointA.y-slope*pointA.x;
      this.lines.push({
        slope,
        intercept,
      })
    }
    return this.lines;
  }

  // Event listener
  onNumSidesChange(event) {
    this.numSides = event.target.value;
    this.getPoints();
  }


  // Connect all the points with lines
  draw() {
    for (let i = 0; i < this.points.length - 1; i++) {
      const pointA = this.points[i];
      const pointB = this.points[i + 1];
      line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
  }
}

export default Mirror;
