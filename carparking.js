const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);

let h1 = input[0];
let m1 = input[1];
let h2 = input[2];
let m2 = input[3];


let start = h1 * 60 + m1;
let end = h2 * 60 + m2;

let timetaken = end - start;

let finaltime = 0;

function parkingfare(timetaken){
    finaltime = timetaken - 120;

    //free for two hours
    if(finaltime <= 0){
        console.log(0);
        return;
    }

    //after two 1 hour 20 ruppees
    if(finaltime > 0 && finaltime <= 60){
        console.log(20);
        return;
    } 

    if(finaltime > 60 && finaltime <= 120){
        console.log(40);
        return;
    }

    if(finaltime > 120 && finaltime <= 180){
        console.log(60);
        return;
    }

    if(finaltime > 180 && finaltime <= 240){
        console.log(80);
        return;
    }

    if(finaltime > 240 && finaltime <= 300){
        console.log(100);
        return;
    }

    //max fare to be taken is 100
    if(finaltime > 300){
        console.log(100);
        return;
    }
}

parkingfare(timetaken);