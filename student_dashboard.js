function showSection(sectionId) {
    document.querySelectorAll('.dashboard-section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

function logout() {
    // Implement logout functionality
    alert('Logout functionality to be implemented');
}

function searchBooks() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = ''; // Clear previous results

    const books = [
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald", quantity: 5 },
        { title: "To Kill a Mockingbird", author: "Harper Lee", quantity: 3 },
        { title: "1984", author: "George Orwell", quantity: 8 },
        { title: "Pride and Prejudice", author: "Jane Austen", quantity: 4 },
        { title: "Moby-Dick", author: "Herman Melville", quantity: 2 }
    ];

    const filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(searchTerm) || 
        book.author.toLowerCase().includes(searchTerm)
    );

    if (filteredBooks.length > 0) {
        const resultTable = document.createElement('table');
        resultTable.innerHTML = `
            <tr>
                <th>Book Title</th>
                <th>Author</th>
                <th>Quantity Available</th>
            </tr>
        `;

        filteredBooks.forEach(book => {
            const row = resultTable.insertRow();
            row.insertCell(0).textContent = book.title;
            row.insertCell(1).textContent = book.author;
            row.insertCell(2).textContent = book.quantity;

            const actionCell = row.insertCell(3);
            const borrowButton = document.createElement('button');
            borrowButton.textContent = 'Borrow';
            borrowButton.onclick = function() { borrowBook(book); };
            actionCell.appendChild(borrowButton);
        });

        resultsContainer.appendChild(resultTable);
    } else {
        resultsContainer.textContent = 'No books found.';
    }
}

// Function to borrow a book and add it to the borrowed books table
function borrowBook(book) {
if (book.quantity > 0) {
// Reduce the quantity of the book
book.quantity -= 1;

// Add the book to the borrowed books table
const table = document.getElementById('borrowed-books-table');
const row = table.insertRow();
row.insertCell(0).textContent = book.title;
const today = new Date().toISOString().split('T')[0];
row.insertCell(1).textContent = today;
const dueDate = new Date();
dueDate.setDate(dueDate.getDate() + 14); // Set due date 14 days from today
row.insertCell(2).textContent = dueDate.toISOString().split('T')[0];
const actionCell = row.insertCell(3);
const returnButton = document.createElement('button');
returnButton.textContent = 'Return';
returnButton.onclick = function() { returnBook(book.title, today, dueDate.toISOString().split('T')[0], row); };
actionCell.appendChild(returnButton);

// Ensure the borrowed books section is visible
document.getElementById('borrowed-books').style.display = 'block';

// Display the borrowed books section and hide the search results if necessary
showSection('borrowed-books');

// Optionally clear the search results after borrowing
document.getElementById('search-results').innerHTML = '';
} else {
alert('Sorry, this book is currently out of stock.');
}
}


// Function to populate borrowed books (example data)
function populateBorrowedBooks() {
    const table = document.getElementById('borrowed-books-table');
    const books = [
        { title: "The Great Gatsby", borrowDate: "2024-08-01", dueDate: "2024-08-15" },
        { title: "To Kill a Mockingbird", borrowDate: "2024-08-05", dueDate: "2024-08-19" }
    ];

    books.forEach(book => {
        const row = table.insertRow();
        row.insertCell(0).textContent = book.title;
        row.insertCell(1).textContent = book.borrowDate;
        row.insertCell(2).textContent = book.dueDate;
        const actionCell = row.insertCell(3);
        const returnButton = document.createElement('button');
        returnButton.textContent = 'Return';
        returnButton.onclick = function() { returnBook(book.title, book.borrowDate, book.dueDate, row); };
        actionCell.appendChild(returnButton);
    });
}

function returnBook(title, borrowDate, dueDate, row) {
    const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

    // Add the book to borrow history
    const historyTable = document.getElementById('borrow-history-table');
    const historyRow = historyTable.insertRow();
    historyRow.insertCell(0).textContent = title;
    historyRow.insertCell(1).textContent = borrowDate;
    historyRow.insertCell(2).textContent = dueDate;
    historyRow.insertCell(3).textContent = today;

    // Remove the book from borrowed books
    row.remove();

    // Show the borrow history section
    document.getElementById('borrow-history').style.display = 'block';
}

// Populate student profile (example data)
function populateProfile() {
    document.getElementById('student-name').textContent = 'KD';
    document.getElementById('student-id').textContent = 'STU001';
    document.getElementById('student-email').textContent = 'kd@uni.ac.in';
}

// Initialize dashboard
window.onload = function() {
    populateBorrowedBooks();
    populateProfile();
};