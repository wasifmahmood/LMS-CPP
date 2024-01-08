import Library from "./src/Library.js";
import readline from 'readline';
import fs from "fs";


function saveLibrary(library) {
    fs.writeFileSync("libraryData.json", JSON.stringify(library), 'utf-8');
}

function loadLibraryData() {
    try {
        const data = fs.readFileSync('libraryData.json', 'utf-8');
        return JSON.parse(data);
    } catch (err) {
        console.log("No existing library found. Creating new one.");
        const library = new Library('DHA Phase 1');
        saveLibrary(library);
        return library;
    }
}

const library = loadLibraryData();
const borrowedBooks = [];

function getUserInput() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    console.log("1. Register Librarian\n2. Remove Librarian\n3. Register Student\n4. Remove Student\n5. Add Book\n6. Remove Book\n7. Borrow Book\n8. Return Book\n0. Exit\n");


    rl.question("Enter your choice:", (choice) => {
        choice = parseInt(choice);

        switch (choice) {
            //Add Librarian
            case 1: {
                const newLibrarian = {};

                rl.question('Enter Librarian Name: ', (librarianName) => {
                    newLibrarian.name = librarianName;

                    rl.question('Enter Librarian ID: ', (librarianID) => {
                        const isLibrarianID = !library.registeredLibrarians || !library.registeredLibrarians.some(librarian => librarian.librarianID === librarianID);

                        if (isLibrarianID) {
                            newLibrarian.librarianID = librarianID;

                            if (!library.registeredLibrarians) {
                                library.registeredLibrarians = [];
                            }

                            library.registeredLibrarians.push(newLibrarian);
                            console.log(`Librarian ${newLibrarian.name} with ID ${newLibrarian.librarianID} has been registered.`);
                            saveLibrary(library);
                        } else {
                            console.log(`Librarian ID ${librarianID} already exists.`);
                        }

                        getUserInput();
                    });
                });
                break;
            }
            //Remove Librarian
            case 2: {
                rl.question('Enter Librarian ID to remove: ', (librarianID) => {
                    const removedLibrarian = library.registeredLibrarians.find(librarian => librarian.librarianID === librarianID);
                    if (removedLibrarian) {
                        library.registeredLibrarians = library.registeredLibrarians.filter(librarian => librarian.librarianID !== librarianID);
                        console.log(`Librarian ID ${removedLibrarian.librarianID} has been removed.`);
                    } else {
                        console.log(`Librarian ID ${librarianID} not found.`);
                    }
                    saveLibrary(library)
                    getUserInput();
                });
                break;
            }
            //Add Student
            case 3: {
                const newStudent = {};

                rl.question('Enter Student Name: ', (studentName) => {
                    newStudent.name = studentName;

                    rl.question('Enter Student ID: ', (studentID) => {
                        const isStudentID = !library.registeredStudents || !library.registeredStudents.some(student => student.studentID === studentID);

                        if (isStudentID) {
                            newStudent.studentID = studentID;

                            if (!library.registeredStudents) {
                                library.registeredStudents = [];
                            }

                            library.registeredStudents.push(newStudent);
                            console.log(`Student ${newStudent.name} with ID ${newStudent.studentID} has been registered.`);
                            saveLibrary(library);
                        } else {
                            console.log(`Student ID ${studentID} already exists.`);
                        }

                        getUserInput();
                    });
                });
                break;
            }
            //Remove Student
            case 4: {
                rl.question('Enter Student ID to remove: ', (studentID) => {
                    const removedStudent = library.registeredStudents.find(student => student.studentID === studentID);
                    if (removedStudent) {
                        library.registeredStudents = library.registeredStudents.filter(student => student.studentID !== studentID);
                        console.log(`Student ID ${removedStudent.studentID} has been removed.`);
                    } else {
                        console.log(`Student ID ${studentID} not found.`);
                    }
                    saveLibrary(library)
                    getUserInput();
                });
                break;
            }
            //Add Book
            case 5: {
                const newBook = {};

                rl.question('Enter Book title: ', (bookTitle) => {
                    newBook.bookTitle = bookTitle;

                    rl.question('Enter Book ISBN: ', (bookISBN) => {
                        newBook.bookISBN = bookISBN;

                        rl.question('Enter Book genre: ', (bookGenre) => {
                            newBook.bookGenre = bookGenre;

                            rl.question('Enter Book to the Shelve: ', (bookShelve) => {
                                newBook.bookShelve = bookShelve;

                                library.books.push(newBook);
                                console.log(`Book ${newBook.bookTitle} with ISBN ${newBook.bookISBN} genre ${newBook.bookGenre} and Shelve ${newBook.bookShelve} has been registered.`);
                                saveLibrary(library)
                                getUserInput();
                            });
                        });
                    });
                });
                break;
            }
            //Remove Book
            case 6: {
                rl.question('Enter Book ID to remove: ', (bookISBN) => {
                    const removedBook = library.books.find(book => book.bookISBN === bookISBN);
                    if (removedBook) {
                        library.books = library.registeredStudents.filter(book => book.bookISBN !== bookISBN);
                        console.log(`Book ${removedBook.bookTitle} with ID ${removedBook.bookISBN} has been removed.`);
                    } else {
                        console.log(`Book with ID ${bookISBN} not found.`);
                    }
                    saveLibrary(library)
                    getUserInput();
                });
                break;
            }
            //Borrowed Book
            case 7: {
                const borrowBook = {};

                rl.question('Enter Book Title: ', (bookTitle) => {
                    borrowBook.bookTitle = bookTitle;

                    rl.question('Enter Student ID: ', (studentID) => {
                        const students = library.registeredStudents.filter(student => student.studentID === studentID);

                        if (students.length > 0) {
                            borrowBook.studentID = studentID;

                            rl.question('Enter Librarian ID: ', (librarianID) => {
                                const librarians = library.registeredLibrarians.filter(librarian => librarian.librarianID === librarianID);

                                if (librarians.length > 0) {
                                    borrowBook.librarianID = librarianID;

                                    rl.question('Enter Borrowed Date (MM-DD-YYYY): ', (borrowedDate) => {
                                        borrowBook.borrowedDate = borrowedDate;

                                        const bookToBorrow = library.books.find(book => book.bookTitle === bookTitle);

                                        if (bookToBorrow) {
                                            library.books = library.books.filter(book => book.bookTitle !== bookTitle);
                                            borrowedBooks.push(borrowBook);
                                            console.log(`Student Borrowed Book Successfully with Book ${borrowBook.bookTitle} Student ID ${borrowBook.studentID} Librarian ID ${borrowBook.librarianID} Borrowed Date ${borrowBook.borrowedDate}`);
                                        } else {
                                            console.log(`Book ISBN ${bookTitle} is not added in the library.`);
                                        }
                                        saveLibrary(library);
                                        getUserInput();
                                    });
                                } else {
                                    console.log(`Librarian ID ${librarianID} not found in the library.`);
                                    getUserInput();
                                }
                            });
                        } else {
                            console.log(`Student ID ${studentID} not found in the library.`);
                            getUserInput();
                        }
                    });
                });
                break;
            }
            //Return Book
            case 8: {   
                rl.question('Enter Book Title to return: ', (bookTitle) => {
                    rl.question('Enter Borrowed Date (MM-DD-YYYY): ', (BorrowedDate) => {
                        rl.question('Enter Returned Date (MM-DD-YYYY): ', (ReturnedDate) => {

                            const returnBook = borrowedBooks.find(book => book.bookTitle === bookTitle);

                            if (returnBook) {
                                const borrowedDate = new Date(BorrowedDate);
                                const returnedDate = new Date(ReturnedDate);

                                const daysDifference = Math.ceil((returnedDate - borrowedDate) / (1000 * 60 * 60 * 24));

                                if (daysDifference <= 5) {
                                    console.log(`No fine. Book returned within 5 days.`);
                                } else {
                                    const finePerDay = 100;
                                    const additionalDays = daysDifference - 5;
                                    const fine = additionalDays * finePerDay;

                                    console.log(`Fine: ${fine} rupees for returning after ${daysDifference} days.`);
                                }

                                library.books.push(returnBook);

                                console.log(`Student Returned Book Successfully with BookISBN ${returnBook.bookTitle} borrowed date ${BorrowedDate} Returned Date ${returnedDate}`);
                            } else {
                                console.log(`Book ISBN ${bookTitle} not borrowed.`);
                            }
                            saveLibrary(library)
                            getUserInput();
                        });
                    });
                });
                break;
            }
            
            //Program Exit
            case 0:
                console.log("Exiting program.");[]
                return;
            default:
                console.log("Invalid choice. Try again.");
                saveLibrary(library)
                getUserInput();
        }
    });
}





function main() {



    getUserInput();

    return 0;
}
main();
