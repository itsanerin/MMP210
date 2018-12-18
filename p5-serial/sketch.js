/*
    Arduino + p5 example
*/
var serial;
var portName = "COM8";
var sensorValue;

function setup() {
    createCanvas(640, 360);
    
    serial = new p5.SerialPort();
    serial.on('connected', serverConnected);
    serial.on('open', portOpen);
    serial.on('data', serialEvent);
    serial.on('error', serialError);
    serial.on('close', portClose);
    
    serial.open(portName);
}

function serverConnected() {
    console.log("connected");
}

function portOpen() {
    console.log("port open");
}

function portClose() {
    console.log("port close");
}

function serialError() {
    console.log("error");
}

function serialEvent() {
    var currentString = serial.readLine();
    trim(currentString);
    if (!currentString) {
        return;
    }
    sensorValue = currentString;
    console.log(sensorValue);
}

function draw() {
    var c = map(sensorValue, 0, 1023, 0, 200);
    
    // sky
    background(c, c, c + 55);
    
    var SunY = map(sensorValue, 0, 1023, height + 300, 50);
    var MoonY = map(sensorValue, 0, 1023, 50, height + 300);
    
   // sun
    noStroke();
    fill('gold');
    ellipse(320, SunY, 50);
    //fill('black');
    text(sensorValue, 20, 20);
    
    //moon
    noStroke();
    //fill('#f2ecc6');
    ellipse(320, MoonY, 50);
    
    //ocean
    var o = map(sensorValue, 0, 1023, 0, 200);
    fill(o, o, o + 150);
    rect(0, height - height/4, width, height/4);
}


