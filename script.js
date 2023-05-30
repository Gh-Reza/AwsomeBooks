const library = document.querySelector('.library');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
let removeBtns = document.querySelectorAll('.removeButton');

let books = JSON.parse(localStorage.getItem('books')) || [];

function updateLocalStorage() {
  localStorage.setItem('books', JSON.stringify(books));
}

function displayLibrary(book) {
  library.innerHTML += `
  <li>
    <h4>${book.title}</h4>

    <h4>${book.author}</h4>

    <button type="button" class="removeButton">Remove</button>

    <hr>
  </li>  
  `;
  removeBtns = document.querySelectorAll('.removeButton');
}

books.forEach((book) => displayLibrary(book));

function removeBook() {
  removeBtns.forEach((removeBtn, index) => {
    removeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      books = books.filter((book) => book !== books[index]);
      updateLocalStorage();
      library.innerHTML = '';
      books.forEach((book) => displayLibrary(book));
      removeBook();
    });
  });
}

document.addEventListener('submit', (e) => {
  e.preventDefault();
  books.push({
    title: titleInput.value,
    author: authorInput.value,
  });
  updateLocalStorage();
  library.innerHTML = '';
  books.forEach((book) => displayLibrary(book));
  removeBook();
  e.target.reset();
});

removeBook();
