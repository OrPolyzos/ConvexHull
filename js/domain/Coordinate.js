function Coordinate(){
  this.x = random(10,width-10);
  this.y = random(10,height-10);
  this.color = color(255);
}

Coordinate.prototype.show = function (){
  stroke(this.color);
  strokeWeight(5);
  point(this.x, this.y);
}
