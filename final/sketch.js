var l;
var girl;
var girl2;
var sky;
var blah;
var sparkleDom;
var shootingStar;
//var miterLimit;

function preload() {
    girl = loadImage("images/background-light.png");
    girl2 = loadImage("images/background2.png");
    sky = loadImage("images/sky.png");
    blah = loadImage("images/blah.png");
}


function setup() {
    var canvas = createCanvas(610, 614);
    canvas.drawingContext.miterLimit = 2; // fix for stroke edges
    canvas.parent(document.getElementById('container'));

    l = 60;


    /*sparkleDom = createImg("images/sparkles.gif");
    sparkleDom.size(639, 614);
    sparkleDom.parent(document.getElementById('container')); */

    shootingStar = new ShootingStar();

    frameRate(10);
}

function draw() {

    var eyeX = 280;
    var eyeY = 470;

    //eye color change
    if (mouseIsPressed) {
        ellipse(350, 540, 300, 150);
        var r = map(mouseY, 70, height, 0, 255); //red
        var g = map(mouseX, 100, width, 0, 244); //green
        var b = 244; //blue
        fill(r, g, b);
    }

    //background
    if (mouseIsPressed) {
        image(sky, 0, 0, width, height);
    } else {
        image(blah, 0, 0, width, height);
    }

   /* //sparkles gif
    if (mouseIsPressed) {
        sparkleDom.show();
    } else {
        sparkleDom.hide();
    }
    sparkleDom.hide(); */


    //eye color change
    if (mouseIsPressed) {
        ellipse(300, 540, 250, 150);
        fill(r, g, b);
    }

    //shooting star
    if (mouseIsPressed) {
        for (var i = 0; i < 5; i++) {
            shootingStar.draw();
        }
    }


    //girl
    if (mouseIsPressed) {
        image(girl2, 0, 0, width, height);
    } else {
        image(girl, 0, 0, width, height);
    }

    //3rd eyelashes
    if (mouseIsPressed) {
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
    if (mouseIsPressed) {
        fill(255);
        stroke('black');
        strokeWeight(2.2);
        arc(eyeX, eyeY - 25, 60, 50, 0.5, PI - 0.5);
        arc(eyeX, eyeY, 55, 50, PI + 0.5, -0.5);
    }

    //3rd pupil
    if (mouseIsPressed) {
        fill(r, g, b);
        ellipse(eyeX, eyeY - 13, 40 / 2, 40 / 2);
    }

    //3rd eye shine
    if (mouseIsPressed) {
        fill('white');
        ellipse(eyeX - 1 + mouseX / 150, eyeY - 15 + mouseY / 100, 6, 6);
    }

}

function ShootingStar() {
    this.x = random(610 - 100);
    this.y = random(614 - 400);
    this.w = 6;
    this.h = 4;
}

ShootingStar.prototype.draw = function () {
   // for (var i = 0; i < 5; i++) {
        noStroke();
        fill('white');
        ellipse(this.x, this.y, this.w, this.h);
        if (this.h > 0) {
            this.h -= 0.5;
    //    }
    }
    this.w += 7;
    this.x += 5;
}
