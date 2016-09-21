function setup() {
  createCanvas(500,500);
  background(255);
}

function drawSmiley(x,y){
	fill (255,255,0);
  stroke (0);
  ellipse(x, y, 40);
  fill(0,0,255);
  ellipse(x-7, y-5, 7);
  ellipse(x+7, y-5, 7);
  fill(255,0,0);
  arc(x, y+2, 25, 25, 0, PI);
}


function draw() {
	var tempX = mouseX;
	var tempY = mouseY;
	
  for (var stamp = 50; stamp <= 100; stamp++){
  	drawSmiley(tempX, tempY);

  }
}
