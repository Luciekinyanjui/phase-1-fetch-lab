function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books")
  .then(response => response.json())
  .then(json => {
    renderBooks(json)
    getTotalPages(json)
    console.log(json[4])
  })
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const head = document.createElement('head');
    head.innerHTML = book.name;
    main.appendChild(head);
  });
}

function getTotalPages(books) {
  let totalPages = 0
  books.forEach(book => {
    totalPages += book["numberOfPages"]
  });
  console.log(`The total pages is ${totalPages}`)
  console.log(`The fifth book in this series is ${books[4]["name"]}`)
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
