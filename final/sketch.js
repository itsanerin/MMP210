//global variables

//images
var girl;
var girl2;
var sky;
var blah;

//stars
var shootingStar;
var stars = [];
var numStar = 1;

//music
var chatterMusic, calmMusic;

//arduino
var serial;
var portName = "COM9";
var sensorValue;

function preload() {

    //load images
    girl = loadImage("images/background-light.png");
    girl2 = loadImage("images/background2.png");
    sky = loadImage("images/sky.png");
    blah = loadImage("images/blah.png");

    //load music
    chatterMusic = loadSound("sounds/chatter.mp3");
    calmMusic = loadSound("sounds/space.mp3");
}


function setup() {
    var canvas = createCanvas(610, 614);
    canvas.drawingContext.miterLimit = 2; // fix for stroke edges
    canvas.parent(document.getElementById('container')); //add canvas to div container


//add more stars
    for (var i = 0; i < numStar; i++) {
        stars.push(new ShootingStar());
    }

    frameRate(50);
    
    //arduino
    serial = new p5.SerialPort();
//	serial.on('connected', serverConnected);
//	serial.on('open', portOpen);
	serial.on('data', serialEvent);
//	serial.on('error', serialError);
//	serial.on('close', portClose);
	
	serial.open(portName);
}

function serialEvent() {
	var currentString = serial.readLine(); // read the incoming string
	trim(currentString); // remove any trailing whitespace
	if (!currentString) {
		return; // if the string is empty, do no more
	}
	sensorValue = currentString; // save it for the draw method
}

function draw() {

    //variables
    var eyeX = 280;
    var eyeY = 470;

    //right eye color change
    if (sensorValue > 920) {
        ellipse(350, 540, 300, 150);
        var r = map(mouseY, 70, height, 0, 255); //red
        var g = map(mouseX, 100, width, 0, 244); //green
        var b = 244; //blue
        fill(r, g, b);
    }

    //background
    if (sensorValue > 920) {
        image(sky, 0, 0, width, height);
    } else {
        image(blah, 0, 0, width, height);
    }


    //left eye color change
    if (sensorValue > 920) {
        ellipse(300, 540, 250, 150);
        fill(r, g, b);
    }

    //shooting stars
    if (sensorValue > 920) {
        for (var i = 0; i < numStar; i++) {
            stars[i].draw();
        }
    } else {
        for (var i = 0; i < numStar; i++) {
            stars[i].reset();
        }
    }


    //girl
    if (sensorValue > 920) {
        image(girl2, 0, 0, width, height);
    } else {
        image(girl, 0, 0, width, height);
    }

    //3rd eyelashes
    if (sensorValue > 920) {
        stroke('black');
        strokeWeight(2.2);
        line(eyeX, eyeY, 250, 455);
        line(eyeX, eyeY, 250, 445);
        line(eyeX, eyeY, 260, 440);
        line(eyeX, eyeY, 270, 435);
        line(eyeX, eyeY, 280, 433);
        line(eyeX, eyeY, 290, 435);
        line(eyeX, eyeY, 300, 440);
        line(eyeX, eyeY, 310, 445);
        line(eyeX, eyeY, 310, 455);

    }

    // 3rd eye white
    if (sensorValue > 920) {
        fill(255);
        stroke('black');
        strokeWeight(2.2);
        arc(eyeX, eyeY - 25, 60, 50, 0.5, PI - 0.5);
        arc(eyeX, eyeY, 55, 50, PI + 0.5, -0.5);
    }

    //3rd eye iris
    if (sensorValue > 920) {
        fill(r, g, b);
        ellipse(eyeX, eyeY - 13, 40 / 2, 40 / 2);
    }

    //3rd eye pupil
    if (sensorValue > 920) {
        fill('white');
        ellipse(eyeX - 1 + mouseX / 150, eyeY - 15 + mouseY / 100, 6, 6);
    }


    //play music
    if (sensorValue > 920) {
        if (!calmMusic.isPlaying()) {
            calmMusic.play();
        }
        chatterMusic.stop();
    } else {
        calmMusic.stop();
        if (!chatterMusic.isPlaying()) {
            chatterMusic.play();
        }
    }


}

//shooting stars
function ShootingStar() {
    this.x = random(610 - 100);
    this.y = random(614 - 400);
    this.w = 6;
    this.h = 4;
    this.draw = function () {
        for (var i = 0; i < numStar; i++) {
            noStroke();
            fill('white');
            ellipse(this.x, this.y, this.w, this.h);
            if (this.h > 0) {
                this.h -= 0.1;
            } else {
                this.reset();
            }
        }
        this.w += 7;
        this.x += 5;
    }
    this.reset = function () {
        this.x = random(610 - 100);
        this.y = random(614 - 400);
        this.w = 6;
        this.h = 4;
    }
}
