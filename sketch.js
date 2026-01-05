// setup() is called once at page-load
function setup() {
    createCanvas(800,600); // make an HTML canvas element width x height pixels
    colorMode(RGB, 100);
}

// draw() is called 60 times per second
function draw() {
    background(255);
  
    let hr = hour();
    let min = minute();
    let sec = second();

    fill(0,0, 100-80/24*hr);
    ellipse(75, 400 - hr*200/24, 50, hr*400/24);
  
    fill(100-80/60*min, 0, 0);
    ellipse(150, 400 - min*200/60, 50, min*400/60);
  
    fill(0,100-80/60*sec, 0);
    ellipse(225, 400 - sec*200/60, 50, sec*400/60);
  
  

}