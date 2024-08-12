// Simulated database (in a real application, this would be on the server)
const users = [
    { username: 'librarian', password: 'password123', role: 'librarian' }
];

const books = [
    { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee', isbn: '9780446310789', quantity: 5 },
    { id: 2, title: '1984', author: 'George Orwell', isbn: '9780451524935', quantity: 3 }
];

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(u => u.username === username && u.password === password);

    if (user && user.role === 'librarian') {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('dashboard-container').style.display = 'block';
        showBooks(); // Show books by default
    } else {
        alert('Invalid username or password');
    }
}

function logout() {
    document.getElementById('login-container').style.display = 'block';
    document.getElementById('dashboard-container').style.display = 'none';
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}

function showBooks() {
    const content = document.getElementById('dashboard-content');
    content.innerHTML = `
        <h3>Manage Books</h3>
        <div>
            <input type="text" id="book-title" placeholder="Book Title">
            <input type="text" id="book-author" placeholder="Author">
            <input type="text" id="book-isbn" placeholder="ISBN">
            <input type="number" id="book-quantity" placeholder="Quantity">
            <button onclick="addBook()">Add Book</button>
        </div>
        <div id="book-list"></div>
    `;
    displayBooks();
}

function displayBooks() {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = books.map(book => `
        <div>
            <h4>${book.title}</h4>
            <p>Author: ${book.author}</p>
            <p>ISBN: ${book.isbn}</p>
            <p>Quantity: ${book.quantity}</p>
        </div>
    `).join('');
}

function addBook() {
    const title = document.getElementById('book-title').value;
    const author = document.getElementById('book-author').value;
    const isbn = document.getElementById('book-isbn').value;
    const quantity = parseInt(document.getElementById('book-quantity').value);

    if (title && author && isbn && quantity) {
        const newBook = {
            id: books.length + 1,
            title,
            author,
            isbn,
            quantity
        };
        books.push(newBook);
        displayBooks();
        clearBookForm();
    } else {
        alert('Please fill all fields');
    }
}

function clearBookForm() {
    document.getElementById('book-title').value = '';
    document.getElementById('book-author').value = '';
    document.getElementById('book-isbn').value = '';
    document.getElementById('book-quantity').value = '';
}

function showMembers() {
    const content = document.getElementById('dashboard-content');
    content.innerHTML = '<h3>Manage Members</h3><p>Member management functionality to be implemented.</p>';
}

function showLoans() {
    const content = document.getElementById('dashboard-content');
    content.innerHTML = '<h3>Manage Loans</h3><p>Loan management functionality to be implemented.</p>';
}

function displayBooks() {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = books.map(book => `
        <div class="book-item">
            <h4>${book.title}</h4>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>ISBN:</strong> ${book.isbn}</p>
            <p><strong>Quantity:</strong> ${book.quantity}</p>
        </div>
    `).join('');
}

function showBooks() {
    const content = document.getElementById('dashboard-content');
    content.innerHTML = `
        <h3>Manage Books</h3>
        <div id="search-container">
            <input type="text" id="book-search" placeholder="Search by title, author, or ISBN...">
            <button id="search-button">Search</button>
        </div>
        <div id="add-book-form">
            <h4>Add New Book</h4>
            <input type="text" id="book-title" placeholder="Book Title">
            <input type="text" id="book-author" placeholder="Author">
            <input type="text" id="book-isbn" placeholder="ISBN">
            <input type="number" id="book-quantity" placeholder="Quantity">
            <button onclick="addBook()">Add Book</button>
        </div>
        <div id="book-list"></div>
    `;
    displayBooks();
    
    // Add event listeners for search
    document.getElementById('book-search').addEventListener('input', searchBooks);
    document.getElementById('search-button').addEventListener('click', searchBooks);
}

function searchBooks(event) {
    // If the event was triggered by the button click, prevent form submission
    if (event.type === 'click') {
        event.preventDefault();
    }

    const searchTerm = document.getElementById('book-search').value.toLowerCase();
    const filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(searchTerm) || 
        book.author.toLowerCase().includes(searchTerm) || 
        book.isbn.toLowerCase().includes(searchTerm)
    );
    
    displayFilteredBooks(filteredBooks);
}

function displayFilteredBooks(filteredBooks) {
    const bookList = document.getElementById('book-list');
    const searchTerm = document.getElementById('book-search').value;
    
    if (filteredBooks.length === 0) {
        bookList.innerHTML = `<p>No books found matching your search: "${searchTerm}"</p>`;
    } else {
        bookList.innerHTML = `
            <p>Showing results for: "${searchTerm}"</p>
            ${filteredBooks.map(book => `
                <div class="book-item">
                    <h4>${highlightMatch(book.title)}</h4>
                    <p><strong>Author:</strong> ${highlightMatch(book.author)}</p>
                    <p><strong>ISBN:</strong> ${highlightMatch(book.isbn)}</p>
                    <p><strong>Quantity:</strong> ${book.quantity}</p>
                </div>
            `).join('')}
        `;
    }
}