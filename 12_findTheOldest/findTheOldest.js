const findTheOldest = function(arr) {
    let date = new Date();
    let currentYear = date.getFullYear();
    //console.log(currentYear)


    arr.forEach(function(person){
    
        
        if (person.yearOfDeath === undefined){
            //console.log("alive "+ person.name)
            person.yearOfDeath = currentYear;

            console.log(person)
        }
        else if(person.yearOfDeath){
           // console.log("dead "+ person.name)

        }
    })

    let sorted = arr.sort((a,b) =>{
        //console.log(a.yearOfDeath+a.name)
        return a.yearOfBirth - a.yearOfDeath > b.yearOfBirth - b.yearOfDeath ? 1 : -1

    })
    console.log(sorted)
    return sorted[0]
    

};

// Do not edit below this line
module.exports = findTheOldest;

//npm test findTheOldest.spec.js
