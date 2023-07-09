'use strict';
const LibraryJS = (() => {
    class Library {
        constructor() {
            this.myLibrary = [];
        }
        
        createBook(title, author, pages, read) {
            const newBook = new Book(title, author, pages, read);
            this.myLibrary.push(newBook);
        }

        renderBook() {
            while(dom.bookshelf.hasChildNodes()){
            dom.bookshelf.removeChild(dom.bookshelf.firstChild);
            }
        
            for (let i = 0; i < this.myLibrary.length; i++) {
                let book = document.createElement('div');
                let bookTitle = document.createElement('div');
                let bookAuthor = document.createElement('div');
                let bookPages = document.createElement('div');
                let removeBtn = document.createElement('button');
                let checkbox = document.createElement('input');
                let checkLabel = document.createElement('label');
        
                book.className = 'book';
                book.dataset.titleName = this.myLibrary[i].title;
                bookTitle.className = 'bookTitle bookText';
                bookTitle.innerText = this.myLibrary[i].title;
                bookAuthor.className = 'author bookText'
                bookAuthor.innerText = this.myLibrary[i].author;
                bookPages.className = 'pages bookText'
                bookPages.innerText = this.myLibrary[i].pages;
                removeBtn.className = 'remove';
                removeBtn.innerText = 'Remove';
                removeBtn.addEventListener('click', function() {
                    this.parentElement.remove();
        
                    const titleToSplice = library.myLibrary.findIndex(el => el.title === book.dataset.titleName);
                    library.myLibrary.splice(titleToSplice, 1);
                });
                checkbox.type = 'checkbox';
                checkbox.id = 'readBox';
                checkbox.checked = this.myLibrary[i].read;
                checkbox.addEventListener('click', function() {
                    const index = library.myLibrary.findIndex(el => el.title === book.dataset.titleName);
                    library.myLibrary[index].read = checkbox.checked;
                })
                checkLabel.innerText = 'Read';
                checkLabel.setAttribute('for', read);
                
                book.append(bookTitle, bookAuthor, bookPages, removeBtn, checkbox, checkLabel);
                dom.bookshelf.append(book);
            }
        
        
        }
    }

    class Book {
        constructor(title, author, pages, read) {
            this.title = title;
            this.author = author;
            this.pages = pages;
            this.read = read;
        }
    }

    function cacheDOM() {
        let forma = document.getElementById('forma');
        let userInput = document.getElementById('form-container');
        let bookshelf = document.getElementById('shelf');
        let check = document.getElementById('read');
        let formBtn = document.querySelector('.newBook');
        let clsBtn = document.querySelector('.close-form');

        return {forma, userInput, bookshelf, check, formBtn, clsBtn};
    }

    const dom = cacheDOM();
    let library = new Library;

    dom.userInput.addEventListener ('submit', (e)=> {
        e.preventDefault();

        let title = document.getElementById('title').value;
        let author = document.getElementById('author').value;
        let pages = document.getElementById('pages').value;
        let read = document.getElementById('read').checked;
        library.createBook(title, author, pages, read);
        library.renderBook();

        dom.userInput.reset();
    })

    dom.formBtn.addEventListener('click', () => {
        dom.forma.style.display = "block";
        dom.formBtn.style.setProperty('box-shadow', 'none');
    })

    dom.clsBtn.addEventListener('click', () => {
        dom.forma.style.display = "none";
        dom.formBtn.style.setProperty('box-shadow', '0px 5px 5px rgba(0, 0, 0, 0.555)');
    })
})();