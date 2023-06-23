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

function addBook() {
    let book = document.createElement('div');
    let bookTitle = document.createElement('div');
    let bookAuthor = document.createElement('div');
    let bookPages = document.createElement('div');
    let removeBtn = document.createElement('button');
    let checkbox = document.createElement('input');
    let checkLabel = document.createElement('label');

    for (i=0; i<myLibrary.length; i++) {
        console.log(myLibrary[i].read);
        book.className = 'book';
        bookTitle.className = 'bookTitle bookText';
        bookTitle.innerText = myLibrary[i].title;
        bookAuthor.className = 'author bookText'
        bookAuthor.innerText = myLibrary[i].author;
        bookPages.className = 'pages bookText'
        bookPages.innerText = myLibrary[i].pages;
        removeBtn.className = 'remove';
        removeBtn.innerText = 'Remove';
        removeBtn.addEventListener('click', function(){
            this.parentElement.remove();
        });
        checkbox.type = 'checkbox';
        checkbox.id = 'readBox';
        checkbox.checked = myLibrary[i].read;
        checkLabel.innerText = 'Read';
        checkLabel.setAttribute('for', read);
        
        book.append(bookTitle, bookAuthor, bookPages, removeBtn, checkbox, checkLabel);
        bookshelf.append(book);
    }


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
    addBook();

    userInput.reset();
})