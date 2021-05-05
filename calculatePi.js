let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");

function drawcircle(){
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.beginPath();
    ctx.arc(400, 400, 400, 0, 2 * Math.PI);
    ctx.stroke();   
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

    if(numberOfPoints.value !== ''){

            for(let i = 0; i<= points; i++){
                pointsInSqure += 1;

                let numInX = Math.random()*800;
                let numInY = Math.random()*800;
                distance = Math.sqrt(numInY**2 + numInX**2);

                ctx.fillRect(numInX,numInY,1,1);
                if(distance <= 800){
                    pointsInCircle += 1;
                }
            }
            
            pi = (pointsInCircle*4)/(pointsInSqure);
            //console.log(pi);
            showPi.innerText = 'With '+ points+ ' points your pi calculation is: ' + pi;
    }
    else showPi.innerText = 'Unable to calculate PI without a number of points';
    

}




//Event listeners

tryButton.addEventListener('click', function(){
    calculatePi(numberOfPoints.value);
    numberOfPoints.value = '';
});
