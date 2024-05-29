/*
forEach loop doesn't return value (undefined)
so how to return values => filter
filter also take callback function and it's return value

explicit return => if u start a scope in arrow function then you have use return keyword explicitly even if we write in single line
example:
```
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const greaterThanFour = nums.filter(num => num > 4); // not open scope no need to explictly write 'return' keyword
const greaterThanFour = nums.filter(num => { return num > 4}); // open scope{} explictly have to write 'return' keyword
console.log(greaterThanFour);
```
*/

const books = [
{ title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// Filter books published before 1990:
const booksBefore1990 = books.filter(book => book.publish < 1990)
// console.log(booksBefore1990);

// Filter fiction book
const fictionBooks = books.filter(book => book.genre === 'Fiction')
// console.log(fictionBooks);

// Filter books published between 1980 and 1999
const booksBetween1980And1999  = books.filter(book => book.publish > 1980 && book.publish < 1990);
// console.log(booksBetween1980And1999);

// Filter books with edition year greater than 2005
const booksWithEditionYearGreaterThan2005 = books.filter(book => book.edition > 2005);
// console.log(booksWithEditionYearGreaterThan2005);


// Filter books with a genre that appears more than once
function filterBooksByCommonGenere(books) {
  genereCount = {};
  books.forEach(book => {
    genre = book.genre;
    if (genereCount[genre]) {
      genereCount[genre] += 1;
    }
    else {
      genereCount[genre] = 1;
    }
  });
  return books.filter(book => genereCount[book.genre] > 1);
}
// console.log("MORE THAN 1");
// console.log(filterBooksByCommonGenere(books));

// Filter books with the same publication year as another book: Write a function that returns an array of books that have the same publication year as another book in the array
function filterBooksByCommonPublicationYear(books) {
  const publicationYearCount = {};
  books.forEach(book => {
    const publicationYear = book.publish;
    if (publicationYearCount[publicationYear]) {
      publicationYearCount[publicationYear] += 1;
    } else {
      publicationYearCount[publicationYear] = 1;
    }
  });
  return books.filter(book => publicationYearCount[book.publish] > 1);
}

// console.log(filterBooksByCommonPublicationYear(books));