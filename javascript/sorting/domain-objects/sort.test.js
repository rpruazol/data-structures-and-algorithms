'use strict';



const {Movies} = require('./Movies');
const {sortByYear, sortByAlphabetical } = require('./sort');



// In the first half of this code challenge, you will write functions which sort domain objects. Your functions will receive an array of Movie objects. Each Movie object has a title (string), a year (number), and a list of genres (array of strings). One function will sort the movies by most recent year first. One function will sort the movies, alphabetical by title, but will ignore any leading “A”s, “An”s, or “The”s. Test outputs for these functions, and an array of sample data, have been provided in test and movies.


  //  {
  // title: "Beetlejuice",
  // year: 1988,
  // genres: ["Comedy", "Fantasy"],
// },


describe('sorting movies', () => {
  test('sort by most recent movie first', () => {
    const response = sortByYear(Movies);
    expect(response[0].title).toEqual('The Intouchables')
  });

  test('sort by alphabetcial order', () => {
    const response = sortByAlphabetical(Movies);
    expect(response[0].title).toEqual('Beetlejuice');
    expect(response[1].title).toEqual('City of God');
  });
})