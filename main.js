import Author from "./src/Author.js";
import Book from "./src/Book.js";
import Librarian from "./src/Librarian.js";
import Library from "./src/Library.js";
import Student from "./src/Student.js";
import readline from 'readline';


const library = new Library();
const borrowedBooks = [];

// function getUserInput(address) {
//     console.log("1. Register Librarian\n2. Remove Librarian\n3. Register Student\n4. Remove Student\n5. Add Book\n6. Remove Book\n7. Borrow Book\n8. Return Book\n9. Exit\n");

//     rl.question("Enter your choice:", (choice) => {
//         choice = parseInt(choice);


//         switch (choice) {
//             case 1: {
//                 const newLibrarian = {};
//                 rl.question('Enter librarian name: ', (librarianName) => {
//                     newLibrarian.librarianName = librarianName;

//                     rl.question('Enter Librarian ID: ', (librarianID) => {
//                         newLibrarian.lirarianID = librarianID;

//                         this.registeredLibrarians.push(newLibrarian);
//                         console.log(`Librarian ${newLibrarian.librarianName} with ID ${newLibrarian.librarianID} has been registered.`);
//                         this.displayRegisteredLibrarians();
//                         rl.close();
//                     });
//                 })
//                 break;
//             }
//             case 2: {
//                 rl.question('Enter Librarian ID to remove: ', (librarianID) => {
//                     const index = this.registeredLibrarians.findIndex(librarian => librarian.librarianID === librarianID);
//                     if (index !== -1) {
//                         const removeLibrarian = this.registeredLibrarians.splice(index, 1)[0];
//                         return `Librarian ${removeLibrarian.librarianName} with ID ${removeLibrarian.librarianID} has been removed.`;
//                     }
//                 });
//                 break;
//             }
//             //   case 3: {
//             //     let studentName = prompt("Enter Student Name:");
//             //     let studentEmail = prompt("Enter Student Email:");
//             //     let newStudent = new Student(studentName, studentEmail);
//             //     Library.registerStudent(newStudent);
//             //     break;
//             //   }
//             //   case 4: {
//             //     let studentEmail = prompt("Enter Student Email to Remove:");
//             //     Library.removeStudent(studentEmail);
//             //     break;
//             //   }
//             //   case 5: {
//             //     let bookTitle = prompt("Enter Book Title:");
//             //     let bookISBN = prompt("Enter Book ISBN:");
//             //     let bookGenre = prompt("Enter Book Genre:");
//             //     let authorName = prompt("Enter Author Name:");
//             //     let author = new Author(authorName);
//             //     let newBook = new Book(bookTitle, bookISBN, bookGenre, author);
//             //     Librarian.addBook(newBook);
//             //     break;
//             //   }
//             //   case 6: {
//             //     let bookISBN = prompt("Enter Book ISBN to Remove:");
//             //     Librarian.removeBook(bookISBN);
//             //     break;
//             //   }
//             //   case 7: {
//             //     let bookTitle = prompt("Enter Book Title to Borrow:");
//             //     if (Student.borrowBook(bookTitle)) {
//             //       console.log("Book borrowed successfully.");
//             //     } else {
//             //       console.log("Book not found or not available for borrowing.");
//             //     }
//             //     break;
//             //   }
//             //   case 8: {
//             //     let bookTitle = prompt("Enter Book Title to Return:");
//             //     if (Student.returnBook(bookTitle)) {
//             //       console.log("Book returned successfully.");
//             //     } else {
//             //       console.log("Book not found or already available.");
//             //     }
//             //     break;
//             //   }
//             case 9:
//                 console.log("Exiting program.");
//                 rl.close();
//                 return;
//             default:
//                 console.log("Invalid choice. Try again.");
//         }
//         process.nextTick(getUserInput);

//     });

// }

function getUserInput() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    console.log("1. Register Librarian\n2. Remove Librarian\n3. Register Student\n4. Remove Student\n5. Add Book\n6. Remove Book\n7. Borrow Book\n8. Return Book\n9. Exit\n");

    rl.question("Enter your choice:", (choice) => {
        choice = parseInt(choice);

        switch (choice) {
            case 1: {
                const newLibrarian = {};
                rl.question('Enter librarian name: ', (librarianName) => {
                    newLibrarian.librarianName = librarianName;

                    rl.question('Enter Librarian ID: ', (librarianID) => {
                        newLibrarian.librarianID = librarianID;

                        library.registeredLibrarians.push(newLibrarian);
                        console.log(`Librarian ${newLibrarian.librarianName} with ID ${newLibrarian.librarianID} has been registered.`);
                        getUserInput();
                    });
                });
                break;
            }
            case 2: {
                rl.question('Enter Librarian ID to remove: ', (librarianID) => {
                    const removedLibrarian = library.registeredLibrarians.find(librarian => librarian.librarianID === librarianID);
                    if (removedLibrarian) {
                        library.registeredLibrarians = library.registeredLibrarians.filter(librarian => librarian.librarianID !== librarianID);
                        console.log(`Librarian ${removedLibrarian.librarianName} with ID ${removedLibrarian.librarianID} has been removed.`);
                    } else {
                        console.log(`Librarian with ID ${librarianID} not found.`);
                    }
                    getUserInput();
                });
                break;
            }
            case 3: {
                const newStudent = {};
                rl.question('Enter Student name: ', (studentName) => {
                    newStudent.studentName = studentName;

                    rl.question('Enter Student ID: ', (studentID) => {
                        newStudent.studentID = studentID;

                        library.registeredStudents.push(newStudent);
                        console.log(`Student ${newStudent.studentName} with ID ${newStudent.studentID} has been registered.`);
                        getUserInput();
                    });
                });
                break;
            }
            case 4: {
                rl.question('Enter Student ID to remove: ', (studentID) => {
                    const removedStudent = library.registeredStudents.find(student => student.studentID === studentID);
                    if (removedStudent) {
                        library.registeredStudents = library.registeredStudents.filter(student => student.studentID !== studentID);
                        console.log(`Student ${removedStudent.studentName} with ID ${removedStudent.studentID} has been removed.`);
                    } else {
                        console.log(`Student with ID ${studentID} not found.`);
                    }
                    getUserInput();
                });
                break;
            }
            case 5: {
                const newBook = {};

                rl.question('Enter Book title: ', (bookTitle) => {
                    newBook.bookTitle = bookTitle;

                    rl.question('Enter Book ISBN: ', (bookISBN) => {
                        newBook.bookISBN = bookISBN;

                        rl.question('Enter Book genre: ', (bookGenre) => {
                            newBook.bookGenre = bookGenre;

                            library.books.push(newBook);
                            console.log(`Book ${newBook.bookTitle} with ISBN ${newBook.bookISBN} and genre ${newBook.bookGenre} has been registered.`);
                            getUserInput();
                        });
                    });
                });
                break;
            }
            case 6: {
                rl.question('Enter Book ID to remove: ', (bookISBN) => {
                    const removedBook = library.books.find(book => book.bookISBN === bookISBN);
                    if (removedBook) {
                        library.books = library.registeredStudents.filter(book => book.bookISBN !== bookISBN);
                        console.log(`Book ${removedBook.bookTitle} with ID ${removedBook.bookISBN} has been removed.`);
                    } else {
                        console.log(`Book with ID ${bookISBN} not found.`);
                    }
                    getUserInput();
                });
                break;
            }
            case 7: {
                const borrowBook = {};

                rl.question('Enter Book ISBN: ', (bookISBN) => {
                    borrowBook.bookISBN = bookISBN;

                    rl.question('Enter Student ID: ', (studentID) => {
                        borrowBook.studentID = studentID;

                        rl.question('Enter Librarian ID: ', (LibrarianID) => {
                            borrowBook.LibrarianID = LibrarianID;

                        const bookToBorrow = library.books.find(book => book.bookISBN === bookISBN);

                        if (bookToBorrow) {

                            library.books = library.books.filter(book => book.bookISBN !== bookISBN);
                            borrowedBooks.push(borrowBook);
                            console.log(`Student Borrowed Book Successfully with BookISBN ${borrowBook.bookISBN} Student ID ${borrowBook.studentID} and Librarian ID ${borrowBook.LibrarianID}  `);

                        } else {
                            console.log(`Book ISBN ${bookISBN} is not Add in library.`);
                        }
                        getUserInput();
                    });
                });
                });
                break;
            }
            case 8: {
                rl.question('Enter Book ISBN to return: ', (bookISBN) => {
                    const returnBook = borrowedBooks.find(book => book.bookISBN === bookISBN);
            
                    if (returnBook) {
        
                        library.books = library.books.filter(book => book.bookISBN !== bookISBN);
            
                        library.books.push(returnBook);
            
                        console.log(`Student Returned Book Successfully with BookISBN ${returnBook.bookISBN}`);
                    } else {
                        console.log(`Book  ISBN ${bookISBN} not borrowed.`);
                    }
                    getUserInput();
                });
                break;
            }
            // case 9: {
            //     rl.question('Enter Book ISBN to Shelving: ', (bookISBN) => {
            //         const shelveBook = borrowedBooks.find(book => book.bookISBN === bookISBN);
            
            //         if (shelveBook) {
        
            //             borrowedBooks = borrowedBooks.filter(book => book.bookISBN !== bookISBN);
            
            //             library.books.push(shelveBook);
            
            //             console.log(`Student Returned Book Successfully with BookISBN ${shelveBook.bookISBN}`);
            //         } else {
            //             console.log(`Book ISBN ${bookISBN} not avaiable in Library.`);
            //         }
            //         getUserInput();
            //     });
            //     break;
            // }
            case 0:
                console.log("Exiting program.");
                // rl.close();
                return;
            default:
                console.log("Invalid choice. Try again.");
                getUserInput();
        }
    });
}





function main() {

    // Create author
    let author = new Author("sumair");
    let auther2 = new Author("Wasif")
    let auther3 = new Author("Zahid")


    //  // Create books
    let book1 = new Book("Harry Potter and the Sorcerer's Stone", "978", "Fantasy");
    let book2 = new Book("The Lord of the Rings", "979", "Romantic");
    let book3 = new Book("The Hobbit", "07122", "Computer");

    //  // setAuthor is a Book
    book1.setAuthor(author);
    book2.setAuthor(auther3)
    book3.setAuthor(auther2);

    //  // Function calling
    book1.borrowBook();
    book1.returnBook();
    book1.calculateFine();

    console.log(book1);


    //     // Create Student
    let studentName = new Student("Hamza", "219596", "Hamza@gmail.com");

    //  studentName.borrowBook();
    //  studentName.returnBook();

    console.log(studentName);

    //  // Create Librarian
    let librarianName = new Librarian("Hameed", "2050");

    //  librarianName.addBook();
    //  librarianName.removeBook();
    //  librarianName.shelveBook();
    //  librarianName.issueBook();
    //  librarianName.receiveBook();

    console.log(librarianName);


    // Create Library
    var address = new Library("DHA Phase 1");

    // address.registerStudent();
    // address.removeStudent();
    // address.registerLibrarian();
    // address.removeLibrarian();

    console.log(address);

    getUserInput();



    return 0;
}
main();
