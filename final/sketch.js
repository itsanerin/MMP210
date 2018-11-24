var l;
var girl;
var girl2;
var sky;
var blah;
var sparkleDom;
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


    sparkleDom = createImg("images/sparkles.gif");
    sparkleDom.size(639, 614);
    sparkleDom.parent(document.getElementById('container'));
}

function draw() {

    var eyeX = 280;
    var eyeY = 470;

    //background
    if (mouseIsPressed) {
        image(sky, 0, 0, width, height);
    } else {
        image(blah, 0, 0, width, height);
    }

    /*   //sparkles gif
       if (mouseIsPressed) {
           sparkleDom.show();
       } else {
           sparkleDom.hide();
       } */
    sparkleDom.hide();

    //girl
    if (mouseIsPressed) {
        image(girl2, 0, 0, width, height);
    } else {
        image(girl, 0, 0, width, height);
    }

    //3rd eyelashes
    if (mouseIsPressed) {
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
        var r = 20; //red
        var g = map(mouseX, 20, width, 0, 60); //green
        var b = map(mouseY, 150, height, 0, 255); //blue
        fill(r, g, b);
        ellipse(eyeX, eyeY - 13, 40 / 2, 40 / 2);
    }

    //3rd eye shine
    if (mouseIsPressed) {
        fill('white');
        ellipse(eyeX - 1 + mouseX / 150, eyeY - 15 + mouseY / 100, 6, 6);
    }


}
