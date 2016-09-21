function setup (){
	createCanvas(500,500);
	background(0);
}
function draw (){	
	
	var numberOfOrbs = 0;
	var orbX = 20;
	var orbY = 20;
	
	while (numberOfOrbs <= 22){
	
		fill(255);
		stroke(255);
		ellipse(orbX,orbY,20);
		
		numberOfOrbs = numberOfOrbs + 1;
		orbX = numberOfOrbs*20;
		orbY = orbX;
	}
}
