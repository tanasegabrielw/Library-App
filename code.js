// Values from books 
const titleBook=document.querySelector('#title');
const authorBook=document.querySelector('#author');
const pagesBook=document.querySelector('#pages');
const readBook=document.querySelector('#read');
const submitBook=document.querySelector('.form-button');

const bookShelf=document.querySelector('.book-shelf');
const bookCard=document.querySelector('.book-card');
// form pop-up dialog
const dialog =document.querySelector('dialog');
const showButton=document.querySelector('.new-book');
const closeButton=document.querySelector('.close-form');

showButton.addEventListener('click',()=>{
    dialog.showModal();
})
closeButton.addEventListener('click',()=>{
    dialog.close();
})

const myLibrary=[];

function Book(title,author,pages,read){
this.title=title;
this.author=author;
this.pages=pages;
this.read=read;
}

function addBookToLibrary(){
    let newBookTitle=titleBook.value;
    let newBookAuthor=authorBook.value;
    let newBookPages=pagesBook.value;
    let newBookRead=readBook.value;
    const newBook= new Book(newBookTitle,newBookAuthor,newBookPages,newBookRead);
    myLibrary.push(newBook);
}
submitBook.addEventListener('click',(event)=>{
event.preventDefault();
addBookToLibrary();});

function displayBooks() {
    // Clear existing bookshelf content before displaying updated books
    bookShelf.innerHTML = '';

    myLibrary.forEach(book => {
        const bookCard = createBookCard(book);
        bookShelf.appendChild(bookCard);
    });
}

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

    const readStatus = document.createElement('p');
    readStatus.textContent = 'Read: ' + (book.read ? 'Yes' : 'No');
    card.appendChild(readStatus);

    return card;
}