function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
}

function draw() {
    background(220);

    if (mouseX < width/2){
        //text('LEFT', 10, 100)
        console.log('LEFT')

        fill('#FFE600')
        circle(width/2, height/2, 200)//head

        circle(width/2 - 35, width/2 - 35, 30)//left eye
        circle(width/2 + 35, width/2 - 35, 30)//right eye

        arc(width/2, height/2 + 30, 80, 80, 0, PI + TWO_PI, OPEN);//smile
    }
    if (mouseX > width/2){
        //text('RIGHT', width/2+10, 100)
        console.log('RIGHT')

        fill('#690000')
        circle(width/2, height/2, 200)//head

        circle(width/2 - 35, width/2 - 35, 30)//left eye
        circle(width/2 + 35, width/2 - 35, 30)//right eye

        arc(width/2, height/2 + 60, 80, 80, PI + TWO_PI, 0, OPEN);//frown
    }
    //fill('#FFE600')
    //circle(width/2, height/2, 200)//head

    //circle(width/2 - 35, width/2 - 35, 30)//left eye
    //circle(width/2 + 35, width/2 - 35, 30)//right eye

    //arc(width/2, height/2 + 30, 80, 80, 0, PI + TWO_PI, OPEN);//smile
    //arc(width/2, height/2 + 60, 80, 80, PI + TWO_PI, 0, OPEN);//frown
}