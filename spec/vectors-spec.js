var Vector = require('../lib/crashtest/vectors.js');

describe("Vectors", function () {
  var v1,v2,v3;
  beforeEach(function() {
     v1 = new Vector(1,1);
     v2 = new Vector(1,0);
     v3 = new Vector(0,1);
     v4 = new Vector(2,1);
     v5 = new Vector(-1,0);
  });


  it("Should creata an instace of vector", function () {
    expect(v1.x).toBe(1);
    expect(v1.y).toBe(1);
  });

  it("Should convert radians to degrees", function () {
    expect(v1.radToDeg(0.7853981633974483)).toBe(45);
  });

  it("Should convert degrees to radians", function () {
    expect(v1.degToRad(45)).toBe(0.7853981633974483);
  });
  it("Should return the angle of the Vector", function () {
    expect(v1.angle()).toBe(45);
    expect(v2.angle()).toBe(0);
    expect(v3.angle()).toBe(90);
    expect(v5.angle()).toBe(180);//console.log(v5.angle());
    expect(v4.angle()).toBe(26.56505117707799);
  });
  it("Should return the angle in radians of the Vector", function () {
    expect(v4.angleRad()).toBe(0.4636476090008061);
    expect(v5.angleRad()).toBe(Math.PI);
  });

  it("Should return the magnitude of the Vector", function () {
    expect(v1.magnitude()).toBe(1.4142135623730951);
    expect(v2.magnitude()).toBe(1);
    expect(v3.magnitude()).toBe(1);
  });

});
