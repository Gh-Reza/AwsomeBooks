const library = document.querySelector('.library');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');

let books = JSON.parse(localStorage.getItem('books')) || [];

function updateLocalStorage() {
  localStorage.setItem('books', JSON.stringify(books));
}

function addBook(title, author) {
  books.push({ title, author });
  updateLocalStorage();
  displayLibrary();
}

function removeBook(book) {
  books = books.filter((b) => b !== book);
  updateLocalStorage();
  displayLibrary();
}

document.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = titleInput.value;
  const author = authorInput.value;
  addBook(title, author);
  e.target.reset();
});

function displayLibrary() {
  library.innerHTML = '';
  books.forEach((book) => {
    const bookElement = document.createElement('li');

    bookElement.innerHTML = `
      <h4>${book.title}</h4>
      <h4>${book.author}</h4>
      <button type="button" class="removeButton">Remove</button>
      <hr>
    `;
    const removeBtn = bookElement.querySelector('.removeButton');
    removeBtn.addEventListener('click', () => {
      removeBook(book);
    });

    library.appendChild(bookElement);
  });
}

displayLibrary();