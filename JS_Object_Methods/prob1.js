// Problem-1 Rectangle Object
// Create a rectangle object with length and width properties
// Create two methods area and perimeter, that will return the area and perimeter of the rectangle

let measurement = {
  length: 30,
  width: 20,
  area: function(){
    let ar = this.length * this.width;
    return ar;
  },
  perimeter: function(){
    let pr = 2 * (this.length + this.width);
    return pr;
  }
}

console.log(measurement.area());
console.log(measurement.perimeter());