'use strict'

module.exports = Vector;


function Vector(X,Y) {
    this.x = X||0;
    this.y = Y||0;
}

Vector.prototype.radToDeg = function(rad){
  return (rad * 180)/ Math.PI;
}
Vector.prototype.degToRad = function(deg){
  return (deg * Math.PI)/180;
}
/*
* Returns the angle of this vector in degrees
*/
Vector.prototype.angle = function(){
  return this.radToDeg(Math.atan2(this.y,this.x));
}

/*
* Returns the angle of this vector in radians
*/
Vector.prototype.angleRad = function(){
  return Math.atan2(this.y,this.x);
}

/*
* Returns the Magnitude |v| of this vector
*/
Vector.prototype.magnitude = function(){
  return Math.sqrt(this.x * this.x + this.y * this.y);
}
