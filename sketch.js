// setup() is called once at page-load
function setup() {
    createCanvas(300,500); // make an HTML canvas element width x height pixels
    colorMode(RGB, 100);
}

// draw() is called 60 times per second
function draw() {
    background(90);
  
    let hr = hour();
    let min = minute();
    let sec = second();

    noStroke(); 
  
    let h = map(hr, 0, 12, 20, 80);
    let m = map(min, 0, 59, 20, 80);
    let s = map(sec, 0, 59, 20, 80);

    fill(0,0, 100-h);
    noStroke();
    ellipse(75, 450 - hr*200/24, 50, 10+hr*400/24);
  
    fill(100-m, 0, 0);
    noStroke();
    ellipse(150, 450 - min*200/60, 50, 10+min*400/60);
  
    fill(0,100-s, 0);
    noStroke();
    ellipse(225, 450 - sec*200/60, 50, 10+sec*400/60);

}