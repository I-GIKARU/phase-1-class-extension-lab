// Your code here
class Polygon {
    constructor(sides) {
      this.sides = sides;
    }
  
    // Returns the number of sides
    get countSides() {
      return this.sides.length;
    }
  
    // Calculates the perimeter
    get perimeter() {
      return this.sides.reduce((sum, side) => sum + side, 0);
    }
  }
  
  class Triangle extends Polygon {
    // Checks if the triangle is valid based on the triangle inequality theorem
    get isValid() {
      if (this.countSides !== 3) return false;
      let [a, b, c] = this.sides;
      return a + b > c && a + c > b && b + c > a;
    }
  }
  
  class Square extends Polygon {
    // Checks if all sides are equal (valid square)
    get isValid() {
      return this.countSides === 4 && this.sides.every(side => side === this.sides[0]);
    }
  
    // Calculates the area (side * side)
    get area() {
      return this.isValid ? this.sides[0] ** 2 : undefined;
    }
  }
  
  module.exports = { Polygon, Triangle, Square };
  