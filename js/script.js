/* eslint-disable no-unused-vars */
const main = document.querySelector(".main");

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
const harryPotter = new Book(
  "Harry Potter and the Philosopher's Stone",
  "J. K. Rowling",
  223,
  true
);

let myLibrary = [];

const bookDisplay = document.querySelector("#bookDisplay");

// Makes Book Objects (string, string, number, boolean))//
function Book(title, author, numPages, haveRead) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  if (haveRead == true) {
    this.haveRead = "Read";
  } else if (haveRead == false) {
    this.haveRead = "Not read";
  } else {
    console.log("ERROR, haveRead needs to be a boolean");
  }
}

Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.numPages}, ${this.haveRead}`;
};

console.log(theHobbit.info());

function addBookToLibrary(book) {
  myLibrary.push(book);
}

addBookToLibrary(theHobbit);
addBookToLibrary(harryPotter);
console.log(myLibrary);

function displayBooks(myLibrary) {
  myLibrary.forEach(function (entry) {
    createBookEntry(entry);
  });
}

function createBookEntry(book) {
  let bookEntry = document.createElement("div");
  let bookTitle = document.createElement("h3");
  let bookAuthor = document.createElement("p");
  let bookPages = document.createElement("p");
  let bookReadStatus = document.createElement("p");
  main.prepend(bookEntry);
  bookEntry.append(bookTitle, bookAuthor, bookPages, bookReadStatus);
  bookTitle.innerHTML = book.title;
  bookAuthor.innerHTML = book.author;
  bookPages.innerHTML = book.numPages;
  bookReadStatus.innerHTML = book.haveRead;
  bookEntry.classList.add("bookEntryCard");
  bookTitle.classList.add("bookTitle");
  bookAuthor.classList.add("bookAuthor");
  bookPages.classList.add("bookPages");
  bookReadStatus.classList.add("bookReadStatus");
}

displayBooks(myLibrary);
