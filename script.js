const library = document.querySelector('.library');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');

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
}

books.forEach((book) => displayLibrary(book));

document.addEventListener('submit', (e) => {
  e.preventDefault();
  books.push({
    title: titleInput.value,
    author: authorInput.value,
  });
  updateLocalStorage();
  library.innerHTML = '';
  books.forEach((book) => displayLibrary(book));
  e.target.reset();
});

const removeBtns = document.querySelectorAll('.removeButton');

removeBtns.forEach((removeBtn, index) => {
  removeBtn.addEventListener('click', (e) => {
    books = books.filter((book) => book !== books[index]);
    updateLocalStorage();
    library.innerHTML = '';
    books.forEach((book) => displayLibrary(book));
    e.target.reset();
  });
});
