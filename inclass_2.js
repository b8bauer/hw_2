function setup(){
	createCanvas(200, 200);
	background(255);

	for (var i = 10; i <= 180; i = i + 10){
		line (i, i, i+10, i);
	}
}
