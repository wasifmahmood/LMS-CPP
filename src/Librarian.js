import User from "./User.js";
import Library from "./Library.js";
import readline from 'readline';

const rl1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
class Librarian extends User {
    constructor(librarianName, ID) {
        super(librarianName);
        this.ID = ID;      //variable
        // this.library = library;
        this.books = [];
        this.shelves = {};
        this.issuedBooks = {};
        

    }

    // addBook() {
    //     const newBook = {};

    //     rl1.question('Enter book title: ', (title) => {
    //         newBook.title = title;

    //         rl1.question('Enter author: ', (author) => {
    //             newBook.author = author;

    //             rl1.question('Enter ISBN: ', (isbn) => {
    //                 newBook.isbn = isbn;

    //                 this.books.push(newBook);
    //                 console.log(`Book "${newBook.title}" by ${newBook.author} with ISBN ${newBook.isbn} has been added to the library.`);
    //                 this.displayBooks();
    //                 rl.close();
    //             });
    //         });
    //     });
    // }

    // removeBook(isbn) {
    //     const index = this.books.findIndex(book => book.isbn === isbn);

    //     if (index !== -1) {
    //         const removedBook = this.books.splice(index, 1)[0];
    //         console.log(`Book "${removedBook.title}" by ${removedBook.author} with ISBN ${removedBook.isbn} has been removed from the library.`);
    //     } else {
    //         console.log(`Book with ISBN ${isbn} not found in the library.`);
    //     }

    //     this.displayBooks();
    // }

    // shelveBook(isbn, shelfName) {
    //     const bookIndex = this.books.findIndex(book => book.isbn === isbn);

    //     if (bookIndex !== -1) {
    //         const selectedBook = this.books[bookIndex];

    //         if (!this.shelves[shelfName]) {
    //             this.shelves[shelfName] = [selectedBook];
    //         } else {
    //             this.shelves[shelfName].push(selectedBook);
    //         }

    //         console.log(`Book "${selectedBook.title}" with ISBN ${selectedBook.isbn} has been shelved on shelf "${shelfName}".`);
    //         this.displayShelves();
    //     } else {
    //         console.log(`Book with ISBN ${isbn} not found in the library.`);
    //     }
    // }


    // issueBook(studentID, isbn) {
    //     const studentIndex = this.registeredStudents.findIndex(student => student.studentID === studentID);
    //     const bookIndex = this.books.findIndex(book => book.isbn === isbn);

    //     if (studentIndex !== -1 && bookIndex !== -1) {
    //         const student = this.registeredStudents[studentIndex];
    //         const book = this.books[bookIndex];

    //         if (!this.issuedBooks[studentID]) {
    //             this.issuedBooks[studentID] = [book];
    //         } else {
    //             this.issuedBooks[studentID].push(book);
    //         }

    //         console.log(`Book "${book.title}" with ISBN ${book.isbn} has been issued to student ${student.studentName} with ID ${student.studentID}.`);
    //         this.displayIssuedBooks();
    //     } else {
    //         console.log(`Student with ID ${studentID} or Book with ISBN ${isbn} not found in the library.`);
    //     }
    // }
    

    // receiveBook(studentID, isbn) {
    //     const studentIndex = this.library.registeredStudents.findIndex(student => student.studentID === studentID);

    //     if (studentIndex !== -1 && this.library.issuedBooks[studentID]) {
    //         const bookIndex = this.library.issuedBooks[studentID].findIndex(book => book.isbn === isbn);

    //         if (bookIndex !== -1) {
    //             const receivedBook = this.library.issuedBooks[studentID].splice(bookIndex, 1)[0];
    //             this.library.books.push(receivedBook);

    //             console.log(`Book "${receivedBook.title}" with ISBN ${receivedBook.isbn} has been received from student ${studentID}.`);
    //             this.library.displayBooks();
    //             this.library.displayIssuedBooks();
    //         } else {
    //             console.log(`Book with ISBN ${isbn} not found in the list of books issued to student ${studentID}.`);
    //         }
    //     } else {
    //         console.log(`Student with ID ${studentID} not found or no books issued to this student.`);
    //     }
    // }

    // getUserInput() {
    //     const rl = readline.createInterface({
    //         input: process.stdin,
    //         output: process.stdout
    //     });

    // console.log("n5. Add Book\n6. Remove Book\n7. Borrow Book\n8. Return Book\n");


    //     rl.question("Enter your choice:", (choice) => {
    //         choice = parseInt(choice);

    //         switch (choice) {
    //             case 5: {
    //                 // Logic for adding a book
    //                 rl.question('Enter book title: ', (title) => {
    //                     rl.question('Enter book ISBN: ', (isbn) => {
    //                         this.addBook({ title, isbn });
    //                         rl.close();
    //                         process.nextTick(() => this.getUserInput());
    //                     });
    //                 });
    //                 break;
    //             }
    //             case 6: {
    //                 // Logic for removing a book
    //                 rl.question('Enter book ISBN to remove: ', (isbn) => {
    //                     this.removeBook(isbn);
    //                     rl.close();
    //                     process.nextTick(() => this.getUserInput());
    //                 });
    //                 break;
    //             }
    //             case 7: {
    //                 // Logic for borrowing a book
    //                 rl.question('Enter book ISBN to borrow: ', (isbn) => {
    //                     rl.question('Enter borrower name: ', (borrowerName) => {
    //                         this.borrowBook(isbn, borrowerName);
    //                         rl.close();
    //                         process.nextTick(() => this.getUserInput());
    //                     });
    //                 });
    //                 break;
    //             }
    //             case 8: {
    //                 // Logic for returning a book
    //                 rl.question('Enter book ISBN to return: ', (isbn) => {
    //                     this.returnBook(isbn);
    //                     rl.close();
    //                     process.nextTick(() => this.getUserInput());
    //                 });
    //                 break;
    //             }
    //             default:
    //                 console.log("Invalid choice. Try again.");
    //                 rl.close();
    //                 process.nextTick(() => this.getUserInput());
    //                 break;
    //         }
    //     });
    // }



}

export default Librarian;
