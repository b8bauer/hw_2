function setup() {
  createCanvas (500,500);
  background(0);
}

function draw() {
  var rows = 0;
  var columns = 0;
  var x = 25;
  var y = 25;
  
  while (columns < 23){
  	
    while (rows < 23){
	  	fill (255);
	  	stroke (255);
	  	ellipse (x,y,15);
	  	rows = rows + 1;
	  	y = y + 20;
	  }
  
  rows = 0;
  columns = columns + 1;
  x = x + 20;
  y = 25;
  
  }
}
