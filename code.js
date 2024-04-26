// Values from books 
const titleBook=document.querySelector('#title');
const authorBook=document.querySelector('#author');
const pagesBook=document.querySelector('#pages');
const readBook=document.querySelector('#read');
const buttonSubmitBook=document.querySelector('.form-button');
// HTML book placement
const bookShelf=document.querySelector('.book-shelf');
const bookCard=document.querySelector('.book-card');
// form dialog
const form =document.querySelector('form');
const dialog =document.querySelector('dialog');
const buttonAddBookForm=document.querySelector('.new-book');
const buttonCloseForm=document.querySelector('.close-form');

buttonAddBookForm.addEventListener('click',()=>{
    dialog.showModal();
})
buttonCloseForm.addEventListener('click',()=>{
    dialog.close();
})
// Library App
const myLibrary=[];

function Book(title,author,pages,read){
this.title=title;
this.author=author;
this.pages=pages;
this.read=read;
this.arrIndex;
}

Book.prototype.toggleReadStatus = function(){
    this.read=!this.read;
}

function addBookToLibrary(){
    let newBookTitle=titleBook.value;
    let newBookAuthor=authorBook.value;
    let newBookPages=pagesBook.value;
    let newBookRead=readBook.checked;
    const newBook= new Book(newBookTitle,newBookAuthor,newBookPages,newBookRead);
    myLibrary.push(newBook);
    form.reset();
    dialog.close();
}

function displayBooks() {
    // Clear existing bookshelf content before displaying updated books
    bookShelf.innerHTML = '';

    myLibrary.forEach(book => {
        const bookCard = createBookCard(book);
        bookShelf.appendChild(bookCard);
    });
}

buttonSubmitBook.addEventListener('click',(event)=>{
    event.preventDefault();
    addBookToLibrary();
    displayBooks();});

function createBookCard(book) {
    const card = document.createElement('div');
    card.classList.add('book-card');

    const title = document.createElement('h3');
    title.textContent = book.title;
    card.appendChild(title);

    const author = document.createElement('p');
    author.textContent = 'Author: ' + book.author;
    card.appendChild(author);

    const pages = document.createElement('p');
    pages.textContent = 'Pages: ' + book.pages;
    card.appendChild(pages);

    const divForRead=document.createElement('div');
    
    const readStatus = document.createElement('input');
    readStatus.type = 'checkbox';
    readStatus.checked = book.read;
    readStatus.id = book.arrIndex; // Assign array index as id for the label

    readStatus.addEventListener('change', ()=>{
        book.toggleReadStatus();
    });

    const label = document.createElement('label');
    label.textContent = 'Read:';
    label.htmlFor = book.arrIndex; // Associate label with checkbox 

    divForRead.appendChild(label);
    divForRead.appendChild(readStatus);
    card.appendChild(divForRead);
    
    book.arrIndex=myLibrary.findIndex(element => element.title == book.title);
    // Gets the index for the book to find it in the array

    const buttonRemoveBook=document.createElement('button');
    buttonRemoveBook.classList.add('close-form');
    buttonRemoveBook.textContent= 'Remove book';
    buttonRemoveBook.addEventListener('click',()=>{
        myLibrary.splice(book.arrIndex,1);
        book.innerHTML='';
        displayBooks();
    });
    card.appendChild(buttonRemoveBook);

    return card;
}




