let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");

const draw = {

    drawCircle: function(){
        ctx.clearRect(0, 0, c.width, c.height);
        ctx.beginPath();
        ctx.arc(400, 400, 200, 0, 2 * Math.PI);
        ctx.stroke();  
    }, 

    drawPlane: function(){
        ctx.beginPath();
        ctx.moveTo(400, 100);
        ctx.lineTo(400, 700);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(100, 400);
        ctx.lineTo(700, 400);
        ctx.stroke();
    },

    drawSqure: function(){
        ctx.beginPath();  
        ctx.rect(200, 200, 400, 400);
        ctx.stroke();
    },

    writeAxis: function(){

        ctx.font = "30px Arial";
        ctx.fillText("y", 380, 120);
        ctx.fillText("x", 680, 395);
    },

     drawEverything: function(){
         this.drawCircle();
         this.drawPlane();
         this.drawSqure();
         this.writeAxis();
     }
}

draw.drawEverything();

const numberOfPoints = document.querySelector('.pointsYouWant');
const tryButton = document.querySelector('.try');
const clearButton = document.querySelector('.clear');
const showPi = document.querySelector('.piShow');
let pi = 0;



function calculatePi(points){
    
    let distanceFromAxis = 200;
    let pointsInCircle = 0;
    let pointsInSqure = 0;

    draw.drawEverything();

    if(numberOfPoints.value === '' || numberOfPoints.value < 0 ){
        showPi.innerText = 'Invalid';
    }  
    else {

            for(let i = 0; i<= points; i++){
                pointsInSqure += 1;

                let numInX = Math.random()*400;
                let numInY = Math.random()*400;
                distance = Math.sqrt(numInY**2 + numInX**2);
                ctx.fillRect(numInX + distanceFromAxis,numInY + distanceFromAxis,1,1);
                
                if(distance <= 400){
                    pointsInCircle += 1;
                }
            }
            
            pi = (pointsInCircle*4)/(pointsInSqure);
            //console.log(pi);
            showPi.innerText = 'With '+ points+ ' points your pi calculation is: ' + pi;
    }
    

}




//Event listeners

tryButton.addEventListener('click', function(){
    calculatePi(numberOfPoints.value);
    numberOfPoints.value = '';
});

clearButton.addEventListener('click', function(){
    draw.drawEverything();
    numberOfPoints.value = '';
    showPi.innerText = '';
});