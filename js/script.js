let myLibrary = [];

function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        let info;

        if (read){
            info = title + " by " + author + ", " + pages + ", " + "read";
        }

        else {
            info = title + " by " + author + ", " + pages + ", " + "not read yet";
        }
        return info;
    }
}

function addBook (title, author, pages, read) { 
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

addBook('The Kek', 'Shrek', 300, true);
addBook('LOTR', 'Tolkien', 443, false);
console.log(myLibrary);