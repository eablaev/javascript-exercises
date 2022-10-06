const getTheTitles = function(books) {

    let titles = [];

books.forEach( book => {
    console.log(book.title);
    titles.push(book.title);
    
    
});
return titles
};

// Do not edit below this line
module.exports = getTheTitles;


//npm test getTheTitles.spec.js

