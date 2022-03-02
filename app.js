/* Book */
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

/* UI Constructor */
function UI() {}

/* UI Prototype Methods */
UI.prototype.addBookToList = function (book) {
  // Find the table
  // Create tr element
  // Insert cols
  // Append to table

  const list = document.getElementById("book-list");
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href= "#" class = "delete">X</a></td>
    `;

  list.appendChild(row);
};

/* Show Alert */
UI.prototype.showAlert = function (msg, className) {
  const div = document.createElement("div");
  div.className = `alert ${className}`;

  div.appendChild(document.createTextNode(msg));

  const container = document.querySelector(".container");
  const form = document.querySelector("#book-form");

  container.insertBefore(div, form);

  setTimeout(function () {
    document.querySelector(".alert").remove();
  }, 3000);
};

/* Clear field */
UI.prototype.clearFileds = function () {
  title = document.getElementById("title").value = "";
  author = document.getElementById("author").value = "";
  isbn = document.getElementById("isbn").value = "";
};

/* Event Listeners */
document.getElementById("book-form").addEventListener("submit", (e) => {
  // Get form values
  // Instance of book
  // Instance of UI
  // Add book to List
  // Clear fields

  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;

  const book = new Book(title, author, isbn);
  const ui = new UI();

  // Validate
  if (title === "" || author === "" || isbn === "") {
    ui.showAlert("Please fill in all fields", "error");
  } else {
    if (!isNaN(parseFloat(isbn)) && isFinite(isbn)) {
      ui.addBookToList(book);
      ui.showAlert("Book added!", "success");
      ui.clearFileds();
    }
    ui.showAlert("Please enter in ISBN - book number", "error");
  }

  e.preventDefault();
});
