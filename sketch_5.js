function setup (){
	createCanvas(200,200);
	background(0);

	stroke(255);
	var x = 0;
	
	for (var repeat = 0; repeat < 50; repeat++){
		line(x,200,x,200-random(180));
		x = x + 5;
	}
}
