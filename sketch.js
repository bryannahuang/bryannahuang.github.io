// setup() is called once at page-load
function setup() {
    createCanvas(600,600); // make an HTML canvas element width x height pixels
    colorMode(RGB, 100);
}

// draw() is called 60 times per second
function draw() {
    background(90);
  
    let hr = hour();
    let min = minute();
    let sec = second();
  
    fill(0,0,0);
    circle(200, 275, 10);
    fill(0,0,0);
    circle(200, 325, 10);

    noStroke(); 

    let h = map(hr, 0, 12, 20, 80);
    let m = map(min, 0, 59, 20, 80);
    let s = map(sec, 0, 59, 20, 80);

    fill(0,0, 100-h);
    noStroke();
    ellipse(85, 300, 50+hr*2.5, 10+hr*400/24);
  
  
    fill(100-m, 0, 0);
    noStroke();
    ellipse(315, 300, 50+min*2, 10+min*400/60);
  
    fill(0,100-s, 0);
    noStroke();
    ellipse(500, 300, 50+sec*2, 10+sec*400/60);

}