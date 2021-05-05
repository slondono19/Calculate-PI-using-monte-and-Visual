function calculatePi(numberOfPoints){


    let pointsInCircle = 0;
    let pointsInSqure = 0;

    for(let i = 0; i<= numberOfPoints; i++){
        pointsInSqure += 1;

        let numInX = Math.random()*600;
        let numInY = Math.random()*600;
        coordinates = Math.sqrt(numInY**2 + numInX**2);
        ctx.fillRect(numInX,numInY,1,1);
        if(coordinates <= 600){
            pointsInCircle += 1;
        }
    }

    return (pointsInCircle*4)/(pointsInSqure);
}

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(300, 300, 300, 0, 2 * Math.PI);
ctx.stroke();