//Array for our set of points
var coordinates = [];
//Number of random points
var coordinatesCount = 25;
//Array for the set of convex hull points
var convexHull = [];

//Index of the leftmost point
var leftMost = 0;

//Index of the current point (which is for sure part of the convex hull)
var currentPoint;

//Index of the point we are checking at each frame
var testPoint;

//The fittest (most counterclockwise) segment till now
var fittestSegment;

//The segment which we are checking at each frame
var testSegment;

//Iterator for testing each point at each frame 
//draw() has now become a for-loop for all the points in coordinates[]
var iterator;

//Boolean to check if the convex hull has been formed
var finished = false;

function setup() {
  createCanvas(windowWidth,windowHeight);
  //Setting the frame rate so we can 'see' the algorithm
  frameRate(15);
  //Creating random coordinates (points)
  for (var i=0; i < coordinatesCount; i++){
    var coordinate = new Coordinate();
    coordinates.push(coordinate);
  }
  
  //Finding the leftmost point
  for (var i = 1; i < coordinates.length; i++){
    if (coordinates[i].x < coordinates[leftMost].x){
      leftMost = i;
    }
  }
  
  //The leftmost point is for sure part of the convex hull
  //So this will be the point we will be starting to search from
  currentPoint = leftMost;
  
  //Setting iterator equal to 0 to start from 0 element of coordinates[]
  iterator = 0;
}


function draw() {
  drawStuff();
  //We need this to happen only for the first time we iterate over the elements
  if (iterator == 0){
    //Add current point to convexHull
    convexHull.push(coordinates[currentPoint]);

    //Create a new test point
    testPoint = (currentPoint + 1) % coordinates.length;
    
    //for now the fittest segment is the only the line from current point to our testPoint
    //Draw it with blue
    fittestSegment = new Segment(coordinates[currentPoint],coordinates[testPoint],color(0,0,255));
  }
  
  //The testSegment will be at each time the line from currentpoint to the point we check at this specific frame
  //Draw the test with yellow
  testSegment = new Segment(coordinates[currentPoint], coordinates[iterator], color(255,250,0));
  
  //Show the fittest segment 
  fittestSegment.show();
  //Show the test segment
  testSegment.show();
  
  //If the point line formed by current point and test point is more counter clock wise than the 
  //fittest (segment) line till now then this is the new fittestsegment
  if (orientation(coordinates[currentPoint],coordinates[iterator],coordinates[testPoint]) == 2){
    testPoint = iterator;
    drawStuff();
    fittestSegment = new Segment(coordinates[currentPoint], coordinates[testPoint], color(0,0,255));
    fittestSegment.show();
  }  
  
  //When we reach last point of coordinates[]
  if (iterator==coordinates.length - 1){
    //reset iterator
    iterator = 0;
    //The testPoint will be for sure part of the convex hull so this will be the current point for the next round
    currentPoint = testPoint;
    //if currentPoint is equal to leftMost, this means that the convexhull has been formed, so we are done
    if (currentPoint === leftMost){
      finished = true;
      //Draw for last time
      drawStuff();
      noLoop();
    }
  }else{
    //else iterator++ to go to next point of coordinates[]
    iterator++;
  }  
}


function drawStuff(){
  background(51);
  //Draw the points
  for (var i=0; i < coordinates.length; i++){
    coordinates[i].show();
  }
  //Draw the convex hull lines
  for (var i = 0; i < convexHull.length-1; i++){
    var lineSegment = new Segment(convexHull[i], convexHull[i+1], color(255,0,0));
    lineSegment.show();
    if (finished){
      var finalLine = new Segment(convexHull[convexHull.length-1],convexHull[0], color(255,0,0));
      finalLine.show();
    }
  }
}

function orientation(p,q,r){
  //To find orientation of ordered triplet (p, q, r).
  //The function returns following values
  //0-- > p, q and r are colinear
  //1-- > Clockwise
  //2-- > Counterclockwise

  var val = (q.y - p.y) * (r.x - q.x)  - (q.x - p.x) * (r.y - q.y);
  if (val == 0)
  {
  return 0;  // colinear
  }
  return (val > 0) ? 1 : 2; // clock or counterclock wise
}
