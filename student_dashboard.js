// Sample data for books in stock
const books = [
    { title: "The Great Gatsby", quantity: 5 },
    { title: "To Kill a Mockingbird", quantity: 3 },
    { title: "1984", quantity: 7 },
    { title: "Pride and Prejudice", quantity: 2 }
];

// Function to show the correct section
function showSection(sectionId) {
    document.querySelectorAll('.dashboard-section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

// Function to handle logout (to be implemented)
function logout() {
    window.location.href = 'student_login.html'; // Replace with the actual login page URL
}

// Function to search for books
function searchBooks() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = ''; // Clear previous results

    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchTerm)
    );

    if (filteredBooks.length > 0) {
        const resultTable = document.createElement('table');
        resultTable.innerHTML = `
            <tr>
                <th>Book Title</th>
                <th>Quantity Available</th>
                <th>Action</th>
            </tr>
        `;

        filteredBooks.forEach(book => {
            const row = resultTable.insertRow();
            row.insertCell(0).textContent = book.title;
            row.insertCell(1).textContent = book.quantity;

            const actionCell = row.insertCell(2);
            const borrowButton = document.createElement('button');
            borrowButton.textContent = 'Borrow';
            borrowButton.onclick = function () {
                borrowBook(book.title);
            };
            actionCell.appendChild(borrowButton);
        });

        resultsContainer.appendChild(resultTable);
    } else {
        resultsContainer.textContent = 'No books found.';
    }
}

// Function to borrow a book
function borrowBook(title) {
    const book = books.find(b => b.title === title);
    if (book && book.quantity > 0) {
        book.quantity -= 1; // Reduce the stock quantity

        // Add the book to the borrowed books table
        const table = document.getElementById('borrowed-books-table');
        const row = table.insertRow();
        const borrowDate = new Date().toISOString().split('T')[0];
        const dueDate = new Date();
        dueDate.setDate(dueDate.getDate() + 14); // Set due date 14 days from today
        row.insertCell(0).textContent = title;
        row.insertCell(1).textContent = borrowDate;
        row.insertCell(2).textContent = dueDate.toISOString().split('T')[0];

        const actionCell = row.insertCell(3);
        const returnButton = document.createElement('button');
        returnButton.textContent = 'Return';
        returnButton.onclick = function () {
            returnBook(title, row);
        };
        actionCell.appendChild(returnButton);

        // Refresh the books in stock display and borrowed books section
        displayBooksInStock();
        showSection('borrowed-books');
    } else {
        alert('Sorry, this book is currently out of stock.');
    }
}

// Function to return a book
function returnBook(title, row) {
    const book = books.find(b => b.title === title);
    if (book) {
        book.quantity += 1; // Increase the stock quantity

        // Move the returned book to borrow history
        const historyTable = document.getElementById('borrow-history-table');
        const historyRow = historyTable.insertRow();
        historyRow.insertCell(0).textContent = title;
        historyRow.insertCell(1).textContent = row.cells[1].textContent;
        historyRow.insertCell(2).textContent = row.cells[2].textContent;
        historyRow.insertCell(3).textContent = new Date().toISOString().split('T')[0];

        // Remove the book from the borrowed books table
        row.remove();

        // Refresh the books in stock display
        displayBooksInStock();

        // Show the borrow history section
        document.getElementById('borrow-history').style.display = 'block';
    }
}

// Function to display books in stock
function displayBooksInStock() {
    const stockContainer = document.getElementById('books-in-stock');
    stockContainer.innerHTML = ''; // Clear previous content

    const table = document.createElement('table');
    const headerRow = table.insertRow();
    headerRow.insertCell(0).textContent = "Book Title";
    headerRow.insertCell(1).textContent = "Quantity";
    headerRow.insertCell(2).textContent = "Action";

    books.forEach(book => {
        const row = table.insertRow();
        row.insertCell(0).textContent = book.title;
        row.insertCell(1).textContent = book.quantity;

        const actionCell = row.insertCell(2);
        const borrowButton = document.createElement('button');
        borrowButton.textContent = 'Borrow';
        borrowButton.onclick = function () {
            borrowBook(book.title);
        };
        actionCell.appendChild(borrowButton);
    });

    stockContainer.appendChild(table);
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
        returnButton.onclick = function () {
            returnBook(book.title, row);
        };
        actionCell.appendChild(returnButton);
    });
}

// Function to populate student profile (example data)
function populateProfile() {
    document.getElementById('student-name').textContent = 'KD';
    document.getElementById('student-id').textContent = 'STU001';
    document.getElementById('student-email').textContent = 'kd@uni.ac.in';
}

// Initialize the dashboard by displaying books in stock and borrowed books
window.onload = function () {
    populateBorrowedBooks();
    populateProfile();
    displayBooksInStock(); // Display the stock when the page loads
};
