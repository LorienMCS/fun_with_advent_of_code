// find the surface area of the box,
// which is 2*l*w + 2*w*h + 2*h*l.
// The elves also need a little extra paper for each present:
// the area of the smallest side.

// For example:

// A present with dimensions 2x3x4
// requires 2*6 + 2*12 + 2*8 = 52 square feet of wrapping paper
// plus 6 square feet of slack, for a total of 58 square feet.

// A present with dimensions 1x1x10
// requires 2*1 + 2*10 + 2*10 = 42 square feet of wrapping paper
// plus 1 square foot of slack, for a total of 43 square feet.

// All numbers in the elves' list are in feet.
// How many total square feet of wrapping paper should they order?

function wrapping() {
	var fs = require('fs');
	var boxes = fs.readFileSync('puzzle3input.txt').toString().split("\n");
	var totalArea = boxes.map(function(box) {
		var partialWrapping = 0;
		// dimensions is an array of 3 strings; each of which is a box side
		var dimensions = box.split("x");
		var sides = dimensions.map(function(side){
			return parseInt(side, 10);
		});
		// sides is now an array of l, w, h integers
		var l = sides[0];
		var w = sides[1];
		var h = sides[2];
		partialWrapping = (2*l*w) + (2*w*h) + (2*h*l);
		// still need area of the smallest side
		sides.sort(function(a, b){
			return a - b;
		});
		var smallestSide = sides[0]*sides[1];
		partialWrapping+=smallestSide;
		return partialWrapping;
	});
	var totalWrapping =  totalArea.reduce(function(a, b) {
		return a + b;
	});
	return totalWrapping;
}

console.log(wrapping());
//=> 1588178

