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
          <button type="button" class="removeButton btn">Remove</button>
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

const links = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

links.forEach((link, index) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    sections.forEach((section) => {
      if (!section.classList.contains('hidden')) {
        section.classList.add('hidden');
      }
    });
    links.forEach((link) => {
      if (!link.classList.contains('color-black')) {
        link.classList.add('color-black');
      }
    });
    sections[index].classList.remove('hidden');
    links[index].classList.remove('color-black');
  });
});

function currentDate() {
  const dataAndTime = new Date();
  const year = dataAndTime.getFullYear();
  const day = dataAndTime.getDate();
  const hours = dataAndTime.getHours().toString().padStart(2, '0');
  const minutes = dataAndTime.getMinutes().toString().padStart(2, '0');
  const monthName = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(dataAndTime);
  return `${monthName} ${day}th ${year}, ${hours}:${minutes}`;
}

document.addEventListener('DOMContentLoaded', () => {
  const datCon = document.querySelector('.date');
  datCon.innerHTML = currentDate();
});
