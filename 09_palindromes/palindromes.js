const palindromes = function (str) {
    const string = str.split('')
                        .join('')
                        .split(/[''.,!\n\s]/)
                        .join('')
                        .toLowerCase();
    const revString = str.split('')
                        .reverse()
                        .join('')
                        .split(/[''.,!\n\s]/)
                        .join('')
                        .toLowerCase();
console.log(string+" "+revString)

    return string === revString ? true : false


};

// Do not edit below this line
module.exports = palindromes;



//npm test palindromes.spec.js