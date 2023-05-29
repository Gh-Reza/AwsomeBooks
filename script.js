const library = document.querySelector('.library');
const removeBtn = document.querySelector('.removeButton');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const addBtn = document.querySelector('.addButton');

const books = JSON.parse(localStorage.getItem('books')) || [];

function updateLocalStorage() {
  localStorage.setItem('books', JSON.stringify(books));
}

function displayLibrary(book) {
  library.innerHTML += `
  <li>
    <h3>${book.title}</h3>

    <h3>${book.author}</h3>

    <button type="button" class="removeButton">Remove</button>

    <hr>
  </li>  
  `;
}

// books.forEach((book) => displayLibrary(book));

document.addEventListener('submit', (e) => {
  e.preventDefault();
  books.push({
    title: titleInput.value,
    author: authorInput.value,
  });
  updateLocalStorage();

  books.forEach((book) => displayLibrary(book));
  e.target.reset();
});
