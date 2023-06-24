let forma = document.getElementById('forma');
let userInput = document.getElementById('form-container');
let bookshelf = document.getElementById('shelf');
let check = document.getElementById('read');
let formBtn = document.querySelector('.newBook');

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

function addBook() {
    while(bookshelf.hasChildNodes()){
    bookshelf.removeChild(bookshelf.firstChild);
    }

    for (i = 0; i < myLibrary.length; i++) {
        let book = document.createElement('div');
        let bookTitle = document.createElement('div');
        let bookAuthor = document.createElement('div');
        let bookPages = document.createElement('div');
        let removeBtn = document.createElement('button');
        let checkbox = document.createElement('input');
        let checkLabel = document.createElement('label');

        book.className = 'book';
        book.dataset.titleName = myLibrary[i].title;
        bookTitle.className = 'bookTitle bookText';
        bookTitle.innerText = myLibrary[i].title;
        bookAuthor.className = 'author bookText'
        bookAuthor.innerText = myLibrary[i].author;
        bookPages.className = 'pages bookText'
        bookPages.innerText = myLibrary[i].pages;
        removeBtn.className = 'remove';
        removeBtn.innerText = 'Remove';
        removeBtn.addEventListener('click', function() {
            this.parentElement.remove();

            const titleToSplice = myLibrary.findIndex(el => el.title === book.dataset.titleName);
            myLibrary.splice(titleToSplice, 1);
        });
        checkbox.type = 'checkbox';
        checkbox.id = 'readBox';
        checkbox.checked = myLibrary[i].read;
        checkbox.addEventListener('click', function() {
            const index = myLibrary.findIndex(el => el.title === book.dataset.titleName);
            myLibrary[index].read = checkbox.checked;
        })
        checkLabel.innerText = 'Read';
        checkLabel.setAttribute('for', read);
        
        book.append(bookTitle, bookAuthor, bookPages, removeBtn, checkbox, checkLabel);
        bookshelf.append(book);
    }


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

function openForm() {
    forma.style.display = "block";
    formBtn.style.setProperty('box-shadow', 'none');
}
  
function closeForm() {
    forma.style.display = "none";
    formBtn.style.setProperty('box-shadow', '0px 5px 5px rgba(0, 0, 0, 0.555)');
}