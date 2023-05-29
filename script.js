const library = document.querySelector(".library");
const removeBtn = document.querySelector(".removeButton");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const addBtn = document.querySelector(".addButton");

let books = [

]

const newBook = {};

document.addEventListener('submit', (e) => {
  newBook.title = titleInput.value;
  newBook.author = authorInput.value;

  books.push(newBook);

  e.preventDefault();
  books.forEach((book) => displayLibrary(book));
  e.target.reset();
});

function displayLibrary(book) {
  library.innerHTML += `
  <li>
    <h3>${book.title}</h3>

    <h3>${book.author}</h3>

    <button type="button" class="removeButton">Remove</button>

    <hr>
  </li>  
  `
}

books.forEach((book) => displayLibrary(book));


