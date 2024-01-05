
import readline from 'readline';

//add a input 
const rl = readline.createInterface({
    input: process.stdin,    //input
    output: process.stdout   //output
});

class Library {
    constructor(address) {
        this.libraryAddress = address;
        this.registeredStudents = [];
        this.registeredLibrarians = [];
        this.books = [];
        this.issuedBooks = [];
        this.borrowedNooks = [];
    }



    // registerStudent() {

    //     const newStudent = {};

    //     rl.question('Enter student name: ', (studentName) => {
    //             newStudent.studentName = studentName;

    //             rl.question('Enter student ID: ', (studentID) => {
    //                 newStudent.studentID = studentID;

    //                 rl.question('Enter student email: ', (studentEmail) => {
    //                     newStudent.studentEmail = studentEmail;

    //                     this.registeredStudents.push(newStudent);
    //                     console.log(`Student ${newStudent.studentName} with ID ${newStudent.studentID} and email ${newStudent.studentEmail} has been registered.`);
    //                     this.displayRegisteredStudents();
    //                     // rl.close();
    //                 });
    //             });
    //         });
    // }

    // removeStudent(studentID) {
    //     const index = this.registeredStudents.findIndex(student => student.studentID === studentID);
    //     if (index !== -1) {
    //         const removedStudent = this.registeredStudents.splice(index, 1)[0];
    //         console.log(`Student ${removedStudent.studentName} with ID ${removedStudent.studentID} has been removed.`);
    //     } else {
    //         console.log(`Student with ID ${studentID} not found in the library.`);
    //     }
    //     this.displayRegisteredStudents();

    // }

    // registerLibrarian() {

    //     const newLibrarian = {};

    //     rl.question('Enter librarian name: ', (librarianName) => {
    //             newLibrarian.librarianName = librarianName;

    //             rl.question('Enter Librarian ID: ', (librarianID) => {
    //                 newLibrarian.lirarianID = librarianID;

    //                 this.registeredLibrarians.push(newLibrarian);
    //                 console.log(`Librarian ${newLibrarian.librarianName} with ID ${newLibrarian.librarianID} has been registered.`);
    //                 this.displayRegisteredLibrarians();
    //                 rl.close();
    //             });
    //         })
    // }

    // removeLibrarian(librarianID) {
    //     const index = this.registeredLibrarians.findIndex(librarian => librarian.librarianID === librarianID);
    //     if (index !== -1) {
    //         const removeLibrarian = this.registeredLibrarians.splice(index, 1)[0];
    //         return `Librarian ${removeLibrarian.librarianName} with ID ${removeLibrarian.librarianID} has been removed.`;
    //     } else {
    //         return `Librarian with ID ${librarianID} not found in the library.`;
    //     }
    // }
//     getUserInput() {
//         const rl = readline.createInterface({
//             input: process.stdin,
//             output: process.stdout
//         });

//         console.log("1. Register Librarian\n2. Remove Librarian\n3. Register Student\n4. Remove Student\n5. Add Book\n6. Remove Book\n7. Borrow Book\n8. Return Book\n9. Exit\n");

//         rl.question("Enter your choice:", (choice) => {
//             choice = parseInt(choice);

//             switch (choice) {
//                 case 1: {
//                     const newLibrarian = {};
//                     rl.question('Enter librarian name: ', (librarianName) => {
//                         newLibrarian.librarianName = librarianName;

//                         rl.question('Enter Librarian ID: ', (librarianID) => {
//                             newLibrarian.librarianID = librarianID;

//                             this.registeredLibrarians.push(newLibrarian);
//                             console.log(`Librarian ${newLibrarian.librarianName} with ID ${newLibrarian.librarianID} has been registered.`);
//                         });
//                     });
//                     break;
//                 }
//                 case 2: {
//                     rl.question('Enter Librarian ID to remove: ', (librarianID) => {
//                         this.registeredLibrarians = this.registeredLibrarians.filter(librarian => librarian.librarianID !== librarianID);
//                         console.log(`Librarian with ID ${librarianID} has been removed.`)
//                     });
//                     break;
//                 }
//                 case 3: {
//                     const newStudent = {};
//                     rl.question('Enter Student name: ', (studentName) => {
//                         newStudent.studentName = studentName;

//                         rl.question('Enter Student ID: ', (studentID) => {
//                             newStudent.studentID = studentID;

//                             this.registeredStudents.push(newStudent);
//                             console.log(`Student ${newStudent.studentName} with ID ${newStudent.studentID} has been registered.`);
//                         });
//                     });
//                     break;
//                 }
//                 case 4: {
//                     rl.question('Enter Student ID to remove: ', (studentID) => {
//                         this.registeredStudents = this.registeredStudents.filter(student => student.studentID !== studentID);
//                         console.log(`Student with ID ${studentID} has been removed.`);
//                     });
//                     break;
//                 }
//                 case 5: {
//                     const newBook = {};

//                     rl.question('Enter Book title: ', (bookTitle) => {
//                         newBook.bookTitle = bookTitle;

//                         rl.question('Enter Book ISBN: ', (bookISBN) => {
//                             newBook.bookISBN = bookISBN;

//                             rl.question('Enter Book genre: ', (bookGenre) => {
//                                 newBook.bookGenre = bookGenre;

//                                 this.books.push(newBook);
//                                 console.log(`Book ${newBook.bookTitle} with ISBN ${newBook.bookISBN} and genre ${newBook.bookGenre} has been registered.`);
//                             });
//                         });
//                     });
//                     break;
//                 }
//                 case 6: {
//                     rl.question('Enter Book ISBN to remove: ', (bookISBN) => {
//                         this.books = this.books.filter(book => book.bookISBN !== bookISBN);
//                         console.log(`Book with ISBN ${bookISBN} has been removed.`);
//                         // this.displayRegisteredStudents();
//                     });
//                     break;
//                 }
//                 case 7: {
//                     const borrowBook = {};

//                     rl.question('Enter Book ISBN: ', (bookISBN) => {
//                         borrowBook.bookISBN = bookISBN;

//                         rl.question('Enter Student Name: ', (studentName) => {
//                             borrowBook.studentName = studentName;

//                             this.books.push(borrowBook);
//                             console.log(`BookISBN ${borrowBook.bookISBN} and studentName ${borrowBook.studentName} has been borrowedbook.`);
//                         });
//                     });
//                     break;
//                 }
//                 case 8: {
//                     const returnBook = {};

//                     rl.question('Enter book ISBN to return: ', (bookISBN) => {
//                         returnBook.bookISBN = bookISBN;

//                             this.books.push(returnBook);
//                             console.log(`BookISBN ${returnBook.bookISBN}  has been returnBook.`);
//                         });
//                     break;
//                 }
//                 case 9:
//                     console.log("Exiting program.");
//                     // rl.close();
//                     return;
//                 default:
//                     console.log("Invalid choice. Try again.");
//             }
//             process.nextTick(() => this.getUserInput());
//         });
//     }
}


// const library = new Library();
// library.getUserInput();


// displayRegisteredStudents() {
//     console.log('Updated list of registered students:', this.registeredStudents);
// }

// displayRegisteredLibrarians() {
//     console.log('Updated list of registered Librarians:', this.registeredLibrarians);
// }

// displayBooks() {
//     console.log('Updated list of books in the library:', this.books);
// }

// displayShelves() {
//     console.log('Books on shelves:', this.shelves);
// }

// displayIssuedBooks() {
//     console.log('Issued books:', this.issuedBooks);
// }



// }
export default Library;
