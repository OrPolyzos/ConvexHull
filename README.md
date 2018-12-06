# p5-convex-hull-gift-wrapping
The purpose of this project is to solve the Convex Hull problem using the Gift Wrapping algorithm, while providing a graphical demonstation of the algorithm as well. 

## Description
**In computational geometry, the gift wrapping algorithm is an algorithm for computing the convex hull of a given set of points.** 
For the sake of simplicity, the description below assumes that the points are in general position, i.e., no three points are collinear. The algorithm may be easily modified to deal with collinearity, including the choice whether it should report only extreme points (vertices of the convex hull) or all points that lie on the convex hull. Also, the complete implementation must deal with degenerate cases when the convex hull has only 1 or 2 vertices, as well as with the issues of limited arithmetic precision, both of computer computations and input data.

The gift wrapping algorithm begins with i=0 and a point p0 known to be on the convex hull, e.g., the leftmost point, and selects the point pi+1 such that all points are to the right of the line pi pi+1. This point may be found in O(n) time by comparing polar angles of all points with respect to point pi taken for the center of polar coordinates. Letting i=i+1, and repeating with until one reaches ph=p0 again yields the convex hull in h steps. In two dimensions, the gift wrapping algorithm is similar to the process of winding a string (or wrapping paper) around the set of points.

The approach can be extended to higher dimensions.

*Taken from WikiPedia*

So the actual problem, the ga-infinite-monkey-theorem is actually a "simulation" problem. Simulate the monkeys typing random characters in the keyboard, but using Genetic Algorithms as a way to evolve and arrive faster to a correct solution. Ofcourse we are not going to use the complete works of William Shakespeare for this demonstration. 

```to be or not to be that is the question``` will suffice for the actual purpose of this project

## Technical Instructions
* Clone the **p5-convex-hull-gift-wrapping** project (this one)
* Start a local http server, using the tool of your choice (i.e. `python -m http.server`) from the project's root directory
* Open the browser of your choice and visit `localhost:8000`
