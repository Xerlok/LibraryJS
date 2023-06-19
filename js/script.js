let myLibrary = [];
let forma = document.getElementById('forma');

function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBook (title, author, pages, read) { 
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function openForm() {
    this.forma.style.display = "block";
}
  
function closeForm() {
    this.forma.style.display = "none";
}

addBook('The Kek', 'Shrek', 300, true);
addBook('LOTR', 'Tolkien', 443, false);
console.log(myLibrary);