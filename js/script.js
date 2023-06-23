let forma = document.getElementById('forma');
let userInput = document.getElementById('form-container');
let bookshelf = document.getElementById('shelf');
let check = document.getElementById('read');

let myLibrary = [];

function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function createBook (title, author, pages, read) { 
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

{/* <div class="author bookText">J.R.R. Tolkien</div>
<div class="pages bookText">333 pages</div> */}

function addBook(title, author, pages, read) {
    let book = document.createElement('div');
    let bookTitle = document.createElement('div');
    let bookAuthor = document.createElement('div');
    let bookPages = document.createElement('div');
    let removeBtn = document.createElement('button');
    let checkbox = document.createElement('input');
    let checkLabel = document.createElement('label');

    book.className = 'book';
    bookTitle.className = 'bookTitle bookText';
    bookTitle.innerText = title;
    bookAuthor.className = 'author bookText'
    bookAuthor.innerText = author;
    bookPages.className = 'pages bookText'
    bookPages.innerText = pages;
    removeBtn.className = 'remove';
    removeBtn.innerText = 'Remove';
    checkbox.type = 'checkbox';
    checkbox.id = 'read';
    checkbox.checked = read;
    checkLabel.innerText = 'Read';
    checkLabel.setAttribute('for', read);
    
    book.append(bookTitle, bookAuthor, bookPages, removeBtn, checkbox, checkLabel);
    bookshelf.append(book);
}

function openForm() {
    forma.style.display = "block";
}
  
function closeForm() {
    forma.style.display = "none";
}


userInput.addEventListener ('submit', (e)=> {
    e.preventDefault();

    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').checked;
    createBook(title, author, pages, read);
    addBook(title, author, pages, read);

    userInput.reset();
})