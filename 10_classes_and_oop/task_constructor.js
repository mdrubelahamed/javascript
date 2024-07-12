/*
Task 2: Constructor Functions
Create a Constructor Function for a Book

Properties: title, author, year, genre
Method: getSummary (should return a string summary of the book)
Create a Constructor Function for a Movie

Properties: title, director, year, genre
Method: getSummary (should return a string summary of the movie)
*/

function Book(title, author, year, genre) {
  this.title = title,
  this.author = author,
  this.year = year,
  this.genre = genre,

  this.getSummary = function() {
    return `${this.title} is written by ${this.author} in ${this.year}. This is a ${this.genre} Book.`
  }
}

const book1 = new Book('Atomic Habits', 'James Clear', 2024, 'Self-Help')
// console.log(book1.getSummary());

//
function Movie(title, director, year, genre) {
  this.title = title,
  this.director = director,
  this.year = year,
  this.genre = genre,

  this.getSummary = function() {
    return `${this.title} is directed by ${this.director} in ${this.year}. This movie is about ${this.genre}.`
  }
}

const movie1 = new Movie('3 idiots', 'Raju', 2009, 'Hostel Life')
// console.log(movie1.getSummary());

//
/*
Task 3: Using Constructor Functions to Create Multiple Objects
Create a Few Books and Movies
Using the Book and Movie constructor functions from Task 2, create multiple book and movie objects.
*/

const book2 = new Book('Rich dad poor dad', 'Robert Kiyosaki', 1997, 'Money')
const book3 = new Book('Zero to One', 'Peter Theil', 2011, 'Business')
const book4 = new Book('Millionaire Fastlane', 'MJ', 2024, 'Money')

// movie
const movie2 = new Movie('the social network', 'David Fincher', 2010, 'Drama')
const movie3 = new Movie('Steve Jobs', 'Danny Boile', 2015, 'Biographical Drama')
const movie4 = new Movie('Ford v Ferari', 'James Mangold', 2019, 'Sports Drama')



/*
Task 4: Combining Object Literals and Constructor Functions
Create an Object Literal for a Library
Properties: name, location
Method: addBook (should take a book object and add it to an array of books)
Method: addMovie (should take a movie object and add it to an array of movies)
Method: listBooks (should print the summary of all books in the library)
Method: listMovies (should print the summary of all movies in the library)
*/

const library = {
  name: 'The Mind Space',
  location: 'M.G. Road, Kolkata, 700001',
  books: [],
  movies: [],

  addBook: function(book) {
    this.books.push(book)
  },

  addMovie: function(movie) {
    this.movies.push(movie)
  },

  listBooks: function() {
    this.books.forEach(book => {
      console.log(book.getSummary());
    });
  },

  listMovies: function() {
    this.movies.forEach(movie => {
      console.log(movie.getSummary());
    });
  }
}



library.addBook(book1);
library.addBook(book2);
library.addMovie(movie1);
library.addMovie(movie2);

console.log('Books in Library:');
library.listBooks();

console.log('Movies in Library:');
library.listMovies();