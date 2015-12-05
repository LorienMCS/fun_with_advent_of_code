// The ribbon required to wrap a present is the shortest distance around its sides,
// or the smallest perimeter of any one face.
// Each present also requires a bow made out of ribbon as well;
// the feet of ribbon required for the perfect bow is equal to
// the cubic feet of volume of the present.

// For example:

// A present with dimensions 2x3x4 requires 2+2+3+3 = 10 feet of ribbon
// to wrap the present plus 2*3*4 = 24 feet of ribbon for the bow, for a total of 34 feet.
// A present with dimensions 1x1x10 requires 1+1+1+1 = 4 feet of ribbon
// to wrap the present plus 1*1*10 = 10 feet of ribbon for the bow, for a total of 14 feet.
// How many total feet of ribbon should they order?

function ribbon() {
	var fs = require('fs');
	var boxes = fs.readFileSync('puzzle3input.txt').toString().split("\n");
	var totalArea = boxes.map(function(box) {
		// dimensions is an array of 3 strings; each of which is a box side
		var dimensions = box.split("x");
		var sides = dimensions.map(function(side){
			return parseInt(side, 10);
		});
		// need area of the smallest side
		sides.sort(function(a, b){
			return a - b;
		});
		var partialRibbon = sides[0] + sides[0] + sides[1] + sides[1];
		var bow = sides[0] * sides[1] * sides[2];
		return partialRibbon + bow;
	});
	var totalRibbon =  totalArea.reduce(function(a, b) {
		return a + b;
	});
	return totalRibbon;
}

console.log(ribbon());
//=> 3783758
