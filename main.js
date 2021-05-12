function calculatePi(points){
   
    let pointsInCircle = 0;
    let pointsInSqure = 0;


    for(let i = 0; i<= points; i++){
        
        pointsInSqure += 1;
        let numInX = Math.random()*400;
        let numInY = Math.random()*400;
        distance = Math.sqrt(numInY**2 + numInX**2);
        
        if(distance <= 400){
            pointsInCircle += 1;
        }
    }
    pi = (pointsInCircle*4)/(pointsInSqure);
    return pi;
}


