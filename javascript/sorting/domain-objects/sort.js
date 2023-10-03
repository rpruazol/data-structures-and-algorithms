'use strict';


// In the first half of this code challenge, you will write functions which sort domain objects. Your functions will receive an array of Movie objects. Each Movie object has a title (string), a year (number), and a list of genres (array of strings). One function will sort the movies by most recent year first. One function will sort the movies, alphabetical by title, but will ignore any leading “A”s, “An”s, or “The”s. Test outputs for these functions, and an array of sample data, have been provided in test and movies.

const { Movies }  = require('./Movies');


function sortByYear(movies){
    //  {
  // title: "Beetlejuice",
  // year: 1988,
  // genres: ["Comedy", "Fantasy"],
// },

  const response = movies.sort((firstMovie, secondMovie) => {
    return secondMovie.year - firstMovie.year
  });

  return response
}


function sortByAlphabetical(movies){

  const response = movies.sort((firstMovie, secondMovie) => {
    // check for a leading (A, An or The)
    const regex = /^(A |The |An )/gm;
    
    if(firstMovie.title.replace(regex, '') > secondMovie.title.replace(regex, '')){
      return 1;
    }
    if(firstMovie.title.replace(regex, '') < secondMovie.title.replace(regex, '')){
      return -1;
    }
    return 0;
  })
  return response;
}

module.exports = {sortByYear, sortByAlphabetical}