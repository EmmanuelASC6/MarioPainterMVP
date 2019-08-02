let c = "white";
function setup() {
    createCanvas(1125, 500);
    background(200);
}
function draw() {
    fill("blue");
    square(50, 40, 100);
    fill("red");
    square(50, 140, 100);
    fill("green");
    square(50, 240, 100);
    fill("white");
    square(100, 400, 50);
}
function mouseClicked() {
    if (mouseX > 50 && mouseX <= 140 && mouseY < 141 && mouseY > 40){
         c = "blue";
    } else if(mouseX > 50 && mouseX <= 230 && mouseY < 241 && mouseY < 341){
        c = "red";
    } else if(mouseX > 50 && mouseX <= 330 && mouseY < 341 && mouseY > 240){
        c = "green";
    }
    console.log(mouseX, mouseY);
    if (mouseX > 100 && mouseX <= 150 && mouseY < 450 && mouseY > 400){
        console.log("Resetting");
        reset();
    }
}
function mouseDragged() {
    fill(c);
   square(mouseX, mouseY, random(50))
}


function reset() {
    background(200);
}
