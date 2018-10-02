/*
    Self Portrait
    by Erin Brady
    version 3
    Sep 25 2018
    Interactivity
*/



function setup() {
	createCanvas(250, 350);
}


    //variables:
    
    
    //colors
        var skin = '#efb66b';
        var brown = '#3d2e14';
        var lips = '#e59982';
    
    //head
        var headX = 125;
        var headY = 175;
        var headWidth = 180;
        var headHeight = 195;
    
   //neck
        var neckX = 100;
        var neckY = 250;
        var neckWidth = 50;
        var neckHeight = 100;
    
    //body
        var bodyX = 50;
        var bodyY = 295;
        var bodyWidth = 155;
        var bodyHeight = 80;
    
    //clothes
        var clothesX = 68;
        var clothesY = 320;
        var clothesWidth = 120;
        var clothesHeight = 60;
    
    //neckline
        var necklineX = 127;
        var necklineY = 297;
        var necklineRadius = 90;
        var necklineSAngle = 150;
        var necklineEAngle = 0;
    
    //ears
        var LearX = 36;
        var RearX = 212;
        var earsY = 175;
    
    //hair
        var hairX = 45;
        var hairY = 5;
        var hairWidth = 155;
        var hairHeight = 110;
    
    //freckle
        var freckleX = 55;
        var freckleY = 195;
    
    //eyes
        var LeyeX = 80;
        var ReyeX = 170;
        var eyesY = 150;
        var eyeSize = 40;
    
    //glasses
        var glassX = 145;
        var glassY = 125;
        var glassWidth = 50;
        var glassHeight = 50;
    
     //nose
        var noseX = 125;
        var noseY = 210;
    
     //mouth
        var mouthX = 125;
        var mouthY = 230;
        var mouthWidth = 45;
        var mouthHeight = 30;

function draw() {
	background("#eae8e9");	

    //neck
    fill(skin);
    rect(neckX, neckY, neckWidth, neckHeight);
    
    //body
    strokeWeight(1.5);
    rect(bodyX, bodyY, bodyWidth, bodyHeight, 20);
    
    //clothes
    fill('black');
    rect(clothesX, clothesY, clothesWidth, clothesHeight, 5);
    
    //neckline
    noFill();
    strokeWeight(4);
    arc(necklineX, necklineY, necklineRadius, necklineSAngle, necklineEAngle, PI);
    
    //ears
    fill(skin);
    strokeWeight(1.5);
    ellipse(LearX, earsY, 25); //left ear
    ellipse(RearX, earsY + 1, 25); //right ear
    
    //head
        ellipse(headX,headY, headWidth,headHeight);
    
    //hair
        fill(brown);
        strokeWeight(1.5);
        rect(hairX, hairY, hairWidth, hairHeight, 50);
    
    //freckle   
        strokeWeight(3);   
        point(freckleX, freckleY);
        
    //eyes
        fill('white');
        strokeWeight(1);
        ellipse(LeyeX,eyesY, eyeSize); //left eye white
        ellipse(ReyeX,eyesY, eyeSize); //right eye white
    
        fill(brown);
        ellipse(LeyeX, eyesY, eyeSize - 9); //left eye iris
        ellipse(ReyeX, eyesY, eyeSize - 9); //right eye iris
    
        fill('black');
        ellipse(LeyeX, eyesY, eyeSize / 2); //left pupil
        ellipse(ReyeX, eyesY, eyeSize / 2); //right pupil
    
        fill('white');
        ellipse(LeyeX + mouseX/55, eyesY - 5 + mouseY/55, eyeSize / 5); //left shine
        ellipse(ReyeX + mouseX/55, eyesY - 5 + mouseY/55, eyeSize / 5); //right shine
        
    
    //glasses
        noFill();
        strokeWeight(3);
        rect(glassX - 90, glassY, glassWidth, glassHeight); //left glass
        rect(glassX, glassY, glassWidth, glassHeight); //right glass
        line(glassX - 40, glassY + 30, glassX, glassY + 30); //nose bridge
    
    //nose
        strokeWeight(1.5);
        triangle(noseX,noseY - 50, noseX - 13, noseY, noseX + 13, noseY); //top, left, right

    //lips
        fill(lips);
        ellipse(mouthX, mouthY + 15, mouthWidth - 20, mouthHeight / 2);
    
    //mouth
        noFill();
        strokeWeight(1.75);
        arc(mouthX, mouthY, 45, 30, 0, PI);}
        


// (x, y, width, height)
