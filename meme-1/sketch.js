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

function preload() {
    monkey = loadImage("../images/smallmonkey.jpg");
    //snow = loadGif('../images/snow.gif');



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
    } else {
        snowDom.hide();
    }

    if (mouseY > height / 2 && mouseX < width / 2) {
        shiverDom.show();
    } else {
        shiverDom.hide();
    }
    
    if (mouseY < height / 2 && mouseX > width / 2) {
        breathDom.show();
    } else {
        breathDom.hide();
    }
    
    if (mouseY < height / 2 && mouseX < width / 2) {
        fill('#e5d4b0')/*, stroke('#273942')*/;
        } else {
        fill('white')/*, stroke ('black')*/;
        }



    textSize(55);
    //fill('white');
    textStyle(BOLD);
    stroke('black');
    strokeWeight(10);
    textFont("impact");
    text("When  you  have", 25, 150);
    text("a  4  hour  class", 25, 260);
    text("in  Fiterman  Hall", 25, 370);








}








// (x, y, width, height)
