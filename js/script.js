/* eslint-disable no-unused-vars */
const main = document.querySelector(".main");
const addNewBtn = document.querySelector(".addBookBtn");
const addEntry_menu = document.querySelector(".addEntry-menu");

const bookTitleField = document.querySelector("#bookTitleField");
const bookAuthorField = document.querySelector("#bookAuthorField");
const pagesField = document.querySelector("#pagesField");
const readStatusField = document.querySelector("#readStatusField");
const addBtn = document.querySelector("#addBtn");
const cancelBtn = document.querySelector("#cancelBtn");

//Event listener to Add New Book Entry
addNewBtn.addEventListener("click", function () {
  addEntry_menu.classList.toggle("is-active");
});

//Event listener to Add/Cancel Addition of New Book Entry
addBtn.addEventListener("click", function () {
  let read = false;
  readStatusField.checked == true ? (read = true) : (read = false);
  let bookEntry = new Book(
    bookTitleField.value,
    bookAuthorField.value,
    pagesField.value,
    read
  );
  addBookToLibrary(bookEntry);
  refreshBookEntries();
  addEntry_menu.classList.toggle("is-active");
});

cancelBtn.addEventListener("click", function () {
  addEntry_menu.classList.toggle("is-active");
});

let myLibrary = [];

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

function addBookToLibrary(book) {
  myLibrary.push(book);
}

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

function refreshBookEntries() {
  main.querySelectorAll(".bookEntryCard").forEach((el) => el.remove());
  displayBooks(myLibrary);
}

console.log(myLibrary);

//Example Book Entries
// const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
// const harryPotter = new Book(
//   "Harry Potter and the Philosopher's Stone",
//   "J. K. Rowling",
//   223,
//   true
// );
