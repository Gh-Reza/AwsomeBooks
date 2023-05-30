import Book from './book.js';

class Library {
  constructor() {
    this.library = document.querySelector('.library');
    this.titleInput = document.querySelector('#title');
    this.authorInput = document.querySelector('#author');

    this.books = JSON.parse(localStorage.getItem('books')) || [];

    this.displayLibrary();

    document.addEventListener('submit', (e) => {
      e.preventDefault();
      this.addBook();
      e.target.reset();
    });
  }

  updateLocalStorage() {
    this.localStorage.setItem('books', JSON.stringify(this.books));
  }

  addBook() {
    const title = this.titleInput.value;
    const author = this.authorInput.value;
    const newBook = new Book(title, author);

    this.books.push(newBook);
    this.updateLocalStorage();
    this.displayLibrary();
  }
}