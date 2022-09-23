

const removeFromArray = function(arr,...ind) {
let array = arr;
let indexes = ind;


for( let i=0; i < indexes.length; i++){
console.log("indexes length: "+indexes.length);
console.log("array length: "+array.length)

    if(indexes[i] <= array.length && typeof indexes[i] === typeof array[i] ){
        array.splice(indexes[i]-1,1,0);
        
        console.log("loop #"+i+"; i is " +i+ "; indexes[i] is "+indexes[i] + "; and indexes array is "+ indexes+"; array is "+array);
        console.log("types "+ typeof indexes[i]+typeof array[i])
    }
    
      else if(typeof indexes[i] === "string" && typeof indexes[i] === typeof array[i]){
        console.log("this is a string loop #"+i+"; i is " +i+ "; indexes[i] is "+indexes[i] + "; and  array[i] is "+array[i]);
        console.log("types "+ typeof indexes[i]+typeof array[i])
        array.splice(indexes[i]-1,1,0);
      }

}

console.log("array is "+array.filter(el => el !==0))
return array.filter(el => el !==0);

};

// Do not edit below this line
module.exports = removeFromArray;


//npm test removeFromArray.spec.js