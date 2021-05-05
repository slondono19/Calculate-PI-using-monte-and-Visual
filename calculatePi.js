function calculatePi(numberOfPoints){
    let pointsInCircle = 0;
    let pointsInSqure = 0;

    for(let i = 0; i<= numberOfPoints; i++){
        pointsInSqure += 1;

        let numInx = Math.random();
        let numInY = Math.random();
        coordinates = Math.sqrt(numInY**2 + numInx**2);
        
        if(coordinates <= 1){
            pointsInCircle += 1;
        }
    }

    console.log((pointsInCircle*4)/(pointsInSqure));
}

