function setup(){
	createCanvas(1000, 1000);
	background(167);

	for (var lineRepeat = 0; lineRepeat <= 20; lineRepeat++){
		for (var xCoordinate = 50; xCoordinate <= 650; xCoordinate = xCoordinate + 10){
			line (xCoordinate, 50, xCoordinate, 700)
		}
	}
}
