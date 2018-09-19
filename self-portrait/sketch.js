/*
    Self Portrait
    by Erin Brady
    version 1
    Sep 8 2018
    Hard coded
*/



function setup() {
	createCanvas(250, 350);
}

function draw() {
	background("#eae8e9");
	
    //neck
    fill('#efb66b');
    rect(98,250, 50,100);
    
    //body
    strokeWeight(1.5);
    rect(48,295, 155,80, 20);
    
    //clothes
    fill('black');
    rect(66,320, 120,60, 5);
    //straps
    noFill();
    strokeWeight(4);
    arc(125,297, 90,150, 0, PI);
    
    //ears
    fill('#efb66b');
    strokeWeight(1.5);
    ellipse(36,175, 25); //left ear
    ellipse(212,176, 25); //right ear
    
    //head
        ellipse(124,175, 180,195);
    
    //hair
        fill('#3d2e14');
        strokeWeight(1.5);
        rect(45,5, 155,110, 50);
    
    //freckle   
        strokeWeight(3);   
        point(55,195);
        
    //eyes
        fill('white');
        strokeWeight(1);
        ellipse(80,150, 40); //left eye white
        ellipse(170,150, 40); //right eye white
    
        fill('#3d2e14');
        ellipse(80, 150, 31); //left eye iris
        ellipse(170, 150, 31); //right eye iris
    
        fill('black');
        ellipse(80, 150, 20); //left pupil
        ellipse(170, 150, 20); //right pupil
    
        fill('white');
        ellipse(85,145, 8); //left shine
        ellipse(175,145, 8); //right shine
        
    
    //glasses
        noFill();
        strokeWeight(3);
        rect(55, 125, 50, 50); //left glass
        rect(145,125, 50, 50); //right glass
        line(105,155,145,155); //nose bridge
    
    //nose
        strokeWeight(1.5);
        triangle(125,160, 112,210, 137,210);
    
    //lips
        fill('#e59982');
        ellipse(124,244,25,13);
    
    //mouth
        noFill();
        strokeWeight(1.75);
        arc(125, 230, 45, 30, 0, PI);
    
    
}

// (x, y, width, height)
