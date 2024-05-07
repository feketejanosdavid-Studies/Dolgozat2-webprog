// File: app.js
// Author: Fekete János Dávid
// Copyright: 2024, Fekete János Dávid
// Group: Szoft 1-I-N
// Date: 2024-05-07
// Github: https://github.com/feketejanosdavid/
// Licenc: GNU GPL

const doc = {
    booksBody: document.getElementById('booksBody')
}

const state = {
    URL: 'http://localhost:8000/books',
    title: '',
    author: '',
    price:0,
    add:true
}

function getBooks() {
    fetch(state.URL)
    .then(response => response.json())
    .then(result => {
        renderBooks(result);
    })
}

function renderBooks(bookList) {
    bookList.forEach(book => {
        var row = document.createElement('tr')
        row.innerHTML = `
        <td>${book.id}</td>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.price}</td>
        `
        doc.booksBody.appendChild(row)
    });
}

getBooks()