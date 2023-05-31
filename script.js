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

  addBook() {
    const title = this.titleInput.value;
    const author = this.authorInput.value;
    const newBook = new Book(title, author);

    this.books.push(newBook);
    this.updateLocalStorage();
    this.displayLibrary();
  }

  updateLocalStorage() {
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  displayLibrary() {
    this.library.innerHTML = '';
    this.books.forEach((book, index) => {
      const bookElement = document.createElement('li');
      bookElement.className = 'book';

      if (index % 2 === 1) {
        bookElement.classList.add('grey-bg');
      }

      bookElement.innerHTML = `
        <div class='bookDetail'>
          <h4>"${book.title}" by</h4>
          <h4>${book.author}</h4>
        </div>
        <div>
          <button type="button" class="removeButton">Remove</button>
        </div>
      `;
      const removeBtn = bookElement.querySelector('.removeButton');
      removeBtn.addEventListener('click', () => {
        this.removeBook(book);
      });

      this.library.appendChild(bookElement);
    });
  }

  removeBook(book) {
    this.books = this.books.filter((b) => b !== book);
    this.updateLocalStorage();
    this.displayLibrary();
  }
}

const library = new Library();
library.displayLibrary();