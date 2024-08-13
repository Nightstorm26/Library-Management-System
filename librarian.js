// // Simulated database (in a real application, this would be on the server)
// const users = [
//     { username: 'librarian', password: 'password123', role: 'librarian' }
// ];

// const books = [
//     { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee', isbn: '9780446310789', quantity: 5 },
//     { id: 2, title: '1984', author: 'George Orwell', isbn: '9780451524935', quantity: 3 }
// ];

// function login() {
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;

//     const user = users.find(u => u.username === username && u.password === password);

//     if (user && user.role === 'librarian') {
//         document.getElementById('login-container').style.display = 'none';
//         document.getElementById('dashboard-container').style.display = 'block';
//         showBooks(); // Show books by default
//     } else {
//         alert('Invalid username or password');
//     }
// }

// function logout() {
//     document.getElementById('login-container').style.display = 'block';
//     document.getElementById('dashboard-container').style.display = 'none';
//     document.getElementById('username').value = '';
//     document.getElementById('password').value = '';
// }

// function showBooks() {
//     const content = document.getElementById('dashboard-content');
//     content.innerHTML = `
//         <h3>Manage Books</h3>
//         <div>
//             <input type="text" id="book-title" placeholder="Book Title">
//             <input type="text" id="book-author" placeholder="Author">
//             <input type="text" id="book-isbn" placeholder="ISBN">
//             <input type="number" id="book-quantity" placeholder="Quantity">
//             <button onclick="addBook()">Add Book</button>
//         </div>
//         <div id="book-list"></div>
//     `;
//     displayBooks();
// }

// function displayBooks() {
//     const bookList = document.getElementById('book-list');
//     bookList.innerHTML = books.map(book => `
//         <div>
//             <h4>${book.title}</h4>
//             <p>Author: ${book.author}</p>
//             <p>ISBN: ${book.isbn}</p>
//             <p>Quantity: ${book.quantity}</p>
//         </div>
//     `).join('');
// }

// function addBook() {
//     const title = document.getElementById('book-title').value;
//     const author = document.getElementById('book-author').value;
//     const isbn = document.getElementById('book-isbn').value;
//     const quantity = parseInt(document.getElementById('book-quantity').value);

//     if (title && author && isbn && quantity) {
//         const newBook = {
//             id: books.length + 1,
//             title,
//             author,
//             isbn,
//             quantity
//         };
//         books.push(newBook);
//         displayBooks();
//         clearBookForm();
//     } else {
//         alert('Please fill all fields');
//     }
// }

// function clearBookForm() {
//     document.getElementById('book-title').value = '';
//     document.getElementById('book-author').value = '';
//     document.getElementById('book-isbn').value = '';
//     document.getElementById('book-quantity').value = '';
// }

// function showMembers() {
//     const content = document.getElementById('dashboard-content');
//     content.innerHTML = '<h3>Manage Members</h3><p>Member management functionality to be implemented.</p>';
// }

// function showLoans() {
//     const content = document.getElementById('dashboard-content');
//     content.innerHTML = '<h3>Manage Loans</h3><p>Loan management functionality to be implemented.</p>';
// }

// function displayBooks() {
//     const bookList = document.getElementById('book-list');
//     bookList.innerHTML = books.map(book => `
//         <div class="book-item">
//             <h4>${book.title}</h4>
//             <p><strong>Author:</strong> ${book.author}</p>
//             <p><strong>ISBN:</strong> ${book.isbn}</p>
//             <p><strong>Quantity:</strong> ${book.quantity}</p>
//         </div>
//     `).join('');

//     // Additional check to ensure the list doesn't overflow
//     if (bookList.scrollHeight > bookList.clientHeight) {
//         bookList.style.paddingBottom = "20px"; // Add padding at the bottom
//     }
// }


// function showBooks() {
//     const content = document.getElementById('dashboard-content');
//     content.innerHTML = `
//         <h3>Manage Books</h3>
//         <div id="search-container">
//             <input type="text" id="book-search" placeholder="Search by title, author, or ISBN...">
//             <button id="search-button">Search</button>
//         </div>
//         <div id="add-book-form">
//             <h4>Add New Book</h4>
//             <input type="text" id="book-title" placeholder="Book Title">
//             <input type="text" id="book-author" placeholder="Author">
//             <input type="text" id="book-isbn" placeholder="ISBN">
//             <input type="number" id="book-quantity" placeholder="Quantity">
//             <button onclick="addBook()">Add Book</button>
//         </div>
//         <div id="book-list"></div>
//     `;
//     displayBooks();
    
//     // Add event listeners for search
//     document.getElementById('book-search').addEventListener('input', searchBooks);
//     document.getElementById('search-button').addEventListener('click', searchBooks);
// }

// function searchBooks(event) {
//     // If the event was triggered by the button click, prevent form submission
//     if (event.type === 'click') {
//         event.preventDefault();
//     }

//     const searchTerm = document.getElementById('book-search').value.toLowerCase();
//     const filteredBooks = books.filter(book => 
//         book.title.toLowerCase().includes(searchTerm) || 
//         book.author.toLowerCase().includes(searchTerm) || 
//         book.isbn.toLowerCase().includes(searchTerm)
//     );
    
//     displayFilteredBooks(filteredBooks);
// }

// function displayFilteredBooks(filteredBooks) {
//     const bookList = document.getElementById('book-list');
//     const searchTerm = document.getElementById('book-search').value;
    
//     if (filteredBooks.length === 0) {
//         bookList.innerHTML = `<p>No books found matching your search: "${searchTerm}"</p>`;
//     } else {
//         bookList.innerHTML = `
//             <p>Showing results for: "${searchTerm}"</p>
//             ${filteredBooks.map(book => `
//                 <div class="book-item">
//                     <h4>${highlightMatch(book.title)}</h4>
//                     <p><strong>Author:</strong> ${highlightMatch(book.author)}</p>
//                     <p><strong>ISBN:</strong> ${highlightMatch(book.isbn)}</p>
//                     <p><strong>Quantity:</strong> ${book.quantity}</p>
//                 </div>
//             `).join('')}
//         `;
//     }
// }

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
        <div class="book-item">
            <h4>${book.title}</h4>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>ISBN:</strong> ${book.isbn}</p>
            <p><strong>Quantity:</strong> ${book.quantity}</p>
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

const members = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' }
];

function showMembers() {
    const content = document.getElementById('dashboard-content');
    content.innerHTML = `
        <h3>Manage Members</h3>
        <div id="search-container">
            <input type="text" id="member-search" placeholder="Search by name or email...">
            <button id="search-button">Search</button>
        </div>
        <div id="add-member-form">
            <h4>Add New Member</h4>
            <input type="text" id="member-name" placeholder="Member Name">
            <input type="email" id="member-email" placeholder="Email">
            <input type="text" id="member-phone" placeholder="Phone">
            <button onclick="addMember()">Add Member</button>
        </div>
        <div id="member-list"></div>
    `;
    displayMembers();

    // Add event listeners for search
    document.getElementById('member-search').addEventListener('input', searchMembers);
    document.getElementById('search-button').addEventListener('click', searchMembers);
}


function displayMembers() {
    const memberList = document.getElementById('member-list');
    memberList.innerHTML = members.map(member => `
        <div class="member-item">
            <div class="member-info">
                <h4>${member.name}</h4>
                <p><strong>Email:</strong> ${member.email}</p>
                <p><strong>Phone:</strong> ${member.phone}</p>
            </div>
            <div class="member-actions">
                <button onclick="editMember(${member.id})">Edit</button>
                <button onclick="deleteMember(${member.id})">Delete</button>
            </div>
        </div>
    `).join('');
}

function searchMembers(event) {
    // If the event was triggered by the button click, prevent default form submission
    if (event.type === 'click') {
        event.preventDefault();
    }

    const searchTerm = document.getElementById('member-search').value.toLowerCase();
    const filteredMembers = members.filter(member => 
        member.name.toLowerCase().includes(searchTerm) || 
        member.email.toLowerCase().includes(searchTerm)
    );
    
    displayFilteredMembers(filteredMembers);
}

function displayFilteredMembers(filteredMembers) {
    const memberList = document.getElementById('member-list');
    const searchTerm = document.getElementById('member-search').value;
    
    if (filteredMembers.length === 0) {
        memberList.innerHTML = `<p>No members found matching your search: "${searchTerm}"</p>`;
    } else {
        memberList.innerHTML = `
            <p>Showing results for: "${searchTerm}"</p>
            ${filteredMembers.map(member => `
                <div class="member-item">
                    <div class="member-info">
                        <h4>${highlightMatch(member.name, searchTerm)}</h4>
                        <p><strong>Email:</strong> ${highlightMatch(member.email, searchTerm)}</p>
                        <p><strong>Phone:</strong> ${member.phone}</p>
                    </div>
                    <div class="member-actions">
                        <button onclick="editMember(${member.id})">Edit</button>
                        <button onclick="deleteMember(${member.id})">Delete</button>
                    </div>
                </div>
            `).join('')}
        `;
    }
}

function highlightMatch(text, searchTerm) {
    if (!searchTerm) return text;
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
}


function addMember() {
    const name = document.getElementById('member-name').value;
    const email = document.getElementById('member-email').value;

    if (name && email) {
        const newMember = {
            id: members.length + 1,
            name,
            email
        };
        members.push(newMember);
        displayMembers();
        clearMemberForm();
    } else {
        alert('Please fill all fields');
    }
}

function clearMemberForm() {
    document.getElementById('member-name').value = '';
    document.getElementById('member-email').value = '';
}

function editMember(id) {
    const member = members.find(m => m.id === id);
    if (member) {
        document.getElementById('member-name').value = member.name;
        document.getElementById('member-email').value = member.email;

        // Remove old addMember button and replace with update button
        document.querySelector('button[onclick="addMember()"]').style.display = 'none';
        if (!document.querySelector('button[onclick="updateMember()"]')) {
            const updateBtn = document.createElement('button');
            updateBtn.textContent = 'Update Member';
            updateBtn.setAttribute('onclick', `updateMember(${id})`);
            document.querySelector('#dashboard-content div').appendChild(updateBtn);
        }
    }
}

function updateMember(id) {
    const member = members.find(m => m.id === id);
    if (member) {
        member.name = document.getElementById('member-name').value;
        member.email = document.getElementById('member-email').value;

        displayMembers();
        clearMemberForm();

        // Restore addMember button and remove update button
        document.querySelector('button[onclick="addMember()"]').style.display = 'block';
        const updateBtn = document.querySelector('button[onclick^="updateMember"]');
        if (updateBtn) {
            updateBtn.remove();
        }
    }
}

function deleteMember(id) {
    const memberIndex = members.findIndex(m => m.id === id);
    if (memberIndex !== -1) {
        members.splice(memberIndex, 1);
        displayMembers();
    }
}


// Simulated database (update with actual members and books data)
const loans = [
    { id: 1, member: 'John Doe', book: 'To Kill a Mockingbird', dateBorrowed: '2024-08-01', dueDate: '2024-08-15' },
    { id: 2, member: 'Jane Smith', book: '1984', dateBorrowed: '2024-08-05', dueDate: '2024-08-19' }
];

function showLoans() {
    const content = document.getElementById('dashboard-content');
    content.innerHTML = `
        <h3>Manage Loans</h3>
        <div id="search-container">
            <input type="text" id="loan-search" placeholder="Search by member or book...">
            <button id="search-button">Search</button>
        </div>
        <div id="add-loan-form">
            <h4>Add New Loan</h4>
            <select id="loan-member">
                ${members.map(member => `<option value="${member.name}">${member.name}</option>`).join('')}
            </select>
            <select id="loan-book">
                ${books.map(book => `<option value="${book.title}">${book.title}</option>`).join('')}
            </select>
            <input type="date" id="loan-date-borrowed">
            <input type="date" id="loan-due-date">
            <button onclick="addLoan()">Add Loan</button>
        </div>
        <div id="loan-list"></div>
    `;
    displayLoans();

    // Add event listeners for search
    document.getElementById('loan-search').addEventListener('input', searchLoans);
    document.getElementById('search-button').addEventListener('click', searchLoans);
}

function displayLoans() {
    const loanList = document.getElementById('loan-list');
    loanList.innerHTML = loans.map(loan => `
        <div class="loan-item">
            <div class="loan-info">
                <h4>${loan.book}</h4>
                <p><strong>Member:</strong> ${loan.member}</p>
                <p><strong>Date Borrowed:</strong> ${loan.dateBorrowed}</p>
                <p><strong>Due Date:</strong> ${loan.dueDate}</p>
            </div>
            <div class="loan-actions">
                <button onclick="editLoan(${loan.id})">Edit</button>
                <button onclick="deleteLoan(${loan.id})">Delete</button>
            </div>
        </div>
    `).join('');
}

function addLoan() {
    const member = document.getElementById('loan-member').value;
    const book = document.getElementById('loan-book').value;
    const dateBorrowed = document.getElementById('loan-date-borrowed').value;
    const dueDate = document.getElementById('loan-due-date').value;

    if (member && book && dateBorrowed && dueDate) {
        const newLoan = {
            id: loans.length + 1,
            member,
            book,
            dateBorrowed,
            dueDate
        };
        loans.push(newLoan);
        displayLoans();
        clearLoanForm();
    } else {
        alert('Please fill all fields');
    }
}

function clearLoanForm() {
    document.getElementById('loan-member').value = '';
    document.getElementById('loan-book').value = '';
    document.getElementById('loan-date-borrowed').value = '';
    document.getElementById('loan-due-date').value = '';
}

function searchLoans(event) {
    // If the event was triggered by the button click, prevent form submission
    if (event.type === 'click') {
        event.preventDefault();
    }

    const searchTerm = document.getElementById('loan-search').value.toLowerCase();
    const filteredLoans = loans.filter(loan => 
        loan.member.toLowerCase().includes(searchTerm) || 
        loan.book.toLowerCase().includes(searchTerm)
    );

    displayFilteredLoans(filteredLoans);
}

function displayFilteredLoans(filteredLoans) {
    const loanList = document.getElementById('loan-list');
    const searchTerm = document.getElementById('loan-search').value;
    
    if (filteredLoans.length === 0) {
        loanList.innerHTML = `<p>No loans found matching your search: "${searchTerm}"</p>`;
    } else {
        loanList.innerHTML = `
            <p>Showing results for: "${searchTerm}"</p>
            ${filteredLoans.map(loan => `
                <div class="loan-item">
                    <div class="loan-info">
                        <h4>${highlightMatch(loan.book, searchTerm)}</h4>
                        <p><strong>Member:</strong> ${highlightMatch(loan.member, searchTerm)}</p>
                        <p><strong>Date Borrowed:</strong> ${loan.dateBorrowed}</p>
                        <p><strong>Due Date:</strong> ${loan.dueDate}</p>
                    </div>
                    <div class="loan-actions">
                        <button onclick="editLoan(${loan.id})">Edit</button>
                        <button onclick="deleteLoan(${loan.id})">Delete</button>
                    </div>
                </div>
            `).join('')}
        `;
    }
}


