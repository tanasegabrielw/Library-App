const titleBook=document.querySelector('#title');
const authorBook=document.querySelector('#author');
const pagesBook=document.querySelector('#pages');
const readBook=document.querySelector('#read');
const submitBook=document.querySelector('.form-button');

const bookShelf=document.querySelector('.book-shelf');
const bookCard=document.querySelector('.book-card');


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
