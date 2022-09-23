const sumAll = function() {



let startCount = arguments[0]
let endCount = arguments[1];
let allNumbers = [];
let currentNumber = 0;



 if(startCount < 0 || endCount <0 || typeof startCount !== "number" || typeof endCount !== "number"){
    return 'ERROR';
}

    else if(startCount <= endCount && startCount > 0 && endCount >0){
        for(let i = 0; i < endCount; i++){
            currentNumber ++;
             allNumbers.push(currentNumber);}
       
    }

    else if(startCount > endCount  && startCount > 0 && endCount >0){
        for(let i = 0; i < startCount; i++){
            currentNumber ++;
             allNumbers.push(currentNumber);}

    }

   


    allNumbers = allNumbers.reduce((accumulator, currentVal)=> accumulator + currentVal, 0)
    
    


return allNumbers;

};

//npm test sumAll.spec.js


// Do not edit below this line
module.exports = sumAll;
