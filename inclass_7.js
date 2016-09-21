function setup() {
  createCanvas(500,500);
  background(255);
}

function dots(x,y){
	var r = random(255);
	var g = random(255);
	var b = random(255);
	var x = random(500);
	var y = random(500);
	
	fill (r,g,b);
  stroke (r,g,b);
  ellipse(x, y, 40);
}


function draw() {
	
  for (var stamp = 50; stamp <= 100; stamp++){
  	dots();

  }
}
