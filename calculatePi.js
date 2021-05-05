let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");

function drawcircle(){
 ctx.beginPath();
ctx.arc(400, 400, 400, 0, 2 * Math.PI);
ctx.stroke();   
ctx.clearRect(0, 0, c.width, c.height);
}

drawcircle();

const numberOfPoints = document.querySelector('.pointsYouWant');
const tryButton = document.querySelector('.try');
const showPi = document.querySelector('.piShow');
let pi = 0;


function calculatePi(points){
    
    let pointsInCircle = 0;
    let pointsInSqure = 0;
    

    drawcircle();
    
    for(let i = 0; i<= points; i++){
        pointsInSqure += 1;
        
        let numInX = Math.random()*800;
        let numInY = Math.random()*800;
        coordinates = Math.sqrt(numInY**2 + numInX**2);
        ctx.fillRect(numInX,numInY,1,1);
        if(coordinates <= 800){
            pointsInCircle += 1;
        }
    }
    
    pi = (pointsInCircle*4)/(pointsInSqure);
    //console.log(pi);
    showPi.innerText = 'With '+ points+ ' points your pi calculation is: ' + pi;
}




//Event listeners

tryButton.addEventListener('click', function(){
    calculatePi(numberOfPoints.value);
    numberOfPoints.value = '';
});
