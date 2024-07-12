/*
Create an Object Literal for a Book
Properties: title, author, year, genre
Method: getSummary (should return a string summary of the book)
*/

const book = {
  title: 'Atomic Habit',
  author: 'James Clear',
  year: 2024,
  genre: 'Self-Help',

  bookSummary: function() {
    return `Atomic Habits provides a proven framework for building good habits and breaking bad ones through a focus on small, incremental changes that compound over time to achieve remarkable results.`},

  getSummary: function() {
    return `${this.title} by ${this.author}, published in ${this.year}. Genre: ${this.genre}.`;
  }
}

// console.log(book.getSummary());


/*
Create an Object Literal for a Movie
Properties: title, director, year, genre
Method: getSummary (should return a string summary of the movie)
*/
const movie = {
  title: '3 idiots',
  director: 'Rajkumar hirani',
  year: 2009,
  genre: 'Insightful',

  getSummary: function() {
    return `${this.title} movie is directed by ${this.director} in ${this.year}, the movie genre ${this.genre}`
  }
}

// console.log(movie.getSummary());