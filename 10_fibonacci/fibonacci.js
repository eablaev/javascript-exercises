const fibonacci = function(num) {

    let a = 0;
    let b = 1;
    let c = 0;

    let n = Number(num);
    //console.log(typeof(n));

    if( n>0){
        for(let i= 1; i<n; i++){
        
            c = a+b;//c = 0+1 = 1
            a = b;//a = 1
            b =c; // b = 1
 }
 //console.log(c);
    return b;
}

    else if(n < 0){
        return "OOPS";
    }

    
    }
    
;

// Do not edit below this line
module.exports = fibonacci;


//npm test fibonacci.spec.js
