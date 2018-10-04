/*
    Meme v 0
    by Erin Brady
    Oct 2 2018
    Hard coded
    MMP 210 Week 5
*/

var monkey; //global

function preload() {
    monkey = loadImage("../images/smallmonkey.jpg")
}


function setup() {
	var canvas = createCanvas(800, 533);
    canvas.drawingContext.miterLimit = 2; // fix for stroke edges
}
    
function draw() {

	background(254);
    
    
    image(monkey, 0, 0, width, height);
    
    
	textSize(55);
	fill('white');
	textStyle(BOLD);
	stroke('black');
	strokeWeight(10);
	textFont("impact");
	text("When  you  have", 25, 150);
    text("a  4  hour  class", 25, 260);
    text("in  Fiterman  Hall", 25, 370);
     
}
	
   
// (x, y, width, height)
