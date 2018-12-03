/*
    final project presentation slides
*/
var slide = 0;
var futureDom;
var button, meditate;

function preload() {
button = loadImage("../images/button.jpg");
    meditate = loadImage("../images/meditate.jpeg");
}

function setup() {
    var canvas = createCanvas(800, 500);
    canvas.drawingContext.miterLimit = 2; // fix for stroke edges
    canvas.parent(document.getElementById('container'));
    textSize(60);
    textFont('monospace');
    textAlign(CENTER, CENTER);
    rectMode(CENTER);

    futureDom = createImg("../images/future.gif");
    futureDom.size(500, 625);
    futureDom.parent(document.getElementById('container'));
}

function draw() {
    background(220);





    //intro slide

    if (slide == 0) {
        text("Final Project Proposal", width / 2, height / 3);
        text("by Erin Brady", width / 2, height / 2 + 50);
        textSize(60);


        futureDom.hide();



        //slide 1
    } else if (slide == 1) {
        background('none');
        futureDom.show();
        textSize(20);
        text("Inspiration:", width - width / 5, height / 3);
        text("I See Your Future", width - width / 5, height / 2);
        text("by Camille Chew", width - width / 5, height / 2 + 50);
    




        //slide 2
    } else if (slide == 2) {
        futureDom.hide();
        image(button, 100, 100, width / 2 - 100, height / 2);
        text("Sensor:", width - width / 5 - 50, height / 3);
        text("Button for transitioning", width - width / 5 - 50, height / 3 + 50);
        text("between different states", width - width / 5 - 50, height / 3 + 75);
        text("(images & sounds)", width - width / 5 - 50, height / 3 + 100);
    
    
    } else if (slide == 3) {
        text("Personalization: Meditation", width - width / 5 - 50, height / 3);
        image(meditate, 50, 100, 375, 250);
        text("Stressed --> Relaxed", width - width / 5 - 50, height / 3 + 50);
    }
    

}





//slide controls
function mousePressed() {
    if (mouseX > width / 2) {
        if (slide < 5) {
            slide++;
        }
    } else {
        if (slide > 0) {
            slide--;
        }
    }
}
