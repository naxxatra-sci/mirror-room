// Get x, y coordinates of line that is at an angle and distance from a point
// that makes parallel line with the origin
export const getPointsAtAngle = (srcPoint, angle, length) => {
  const x2 = srcPoint.x + cos(angle) * length;
  const y2 = srcPoint.y + sin(angle) * length;
  console.log(srcPoint.x, srcPoint.y, angle, length);
  return createVector(x2, y2, angle);
};
