function Constructor(R) {
  this.radius = R;

  this.getArea = function () {
    return Math.PI * Math.pow(this.radius, 2);
  };
  this.getPerimeter = function () {
    return 2 * Math.PI * this.radius;
  };
}
let circle = new Constructor(3);
console.log(circle.getArea());
console.log(circle.getPerimeter());
