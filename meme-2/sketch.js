/*
    Meme v 1
    by Erin Brady
    Oct 9 2018
    MMP 210 Week 6
*/


var monkey; //global
var shiver;
var snow;

var snowDom;
var shiverDom;
var breathDom;

var x = 20;
var speed = 1.2;

function preload() {
    monkey = loadImage("../images/smallmonkey.jpg");
}


function setup() {
    var canvas = createCanvas(800, 533);
    canvas.drawingContext.miterLimit = 2; // fix for stroke edges
    canvas.parent(document.getElementById('container'));

    snowDom = createImg("../images/snow.gif");
    snowDom.size(800, 533);
    snowDom.parent(document.getElementById('container'));

    shiverDom = createImg('../images/shivering-trans.gif');
    shiverDom.size(800, 533);
    shiverDom.parent(document.getElementById('container'));

    breathDom = createImg("../images/breath.gif");
    breathDom.size(800, 533);
    breathDom.parent(document.getElementById('container'));
}



function draw() {

    background(254);

    image(monkey, 0, 0, width, height);

    if (mouseY > height / 2 && mouseX > width / 2) {
        snowDom.show();
        x += speed;
        if (x > 20 || x < 15) {
            speed *= -1;
        }
    } else {
        snowDom.hide();
    }

    if (mouseY > height / 2 && mouseX < width / 2) {
        shiverDom.show();
        x += speed;
        if (x > 20 || x < 15) {
            speed *= -1;
        }
    } else {
        shiverDom.hide();
    }

    if (mouseY < height / 2 && mouseX > width / 2) {
        breathDom.show();
        x += speed;
        if (x > 20 || x < 15) {
            speed *= -1;
        }
    } else {
        breathDom.hide();
    }

/*    if (mouseY < height / 2 && mouseX < width / 2) {
        fill('#e5d4b0');
    } else {
        fill('white');
    } */



    textSize(50);
    textStyle(BOLD);
    stroke('black');
    strokeWeight(10);
    textFont("impact");
    text("When  you  have", x, 170);
    text("a  4  hour  class", x, 270);
    text("in  Fiterman  Hall", x, 375);
    fill('white');

}








// (x, y, width, height)
