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
// const borrowedBooks = [];

function getUserInput() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    console.log("1. Register Librarian\n2. Remove Librarian\n3. Register Student\n4. Remove Student\n5. Add Book\n6. Remove Book\n7. Borrow Book\n8. Return Book\n9. Sort Book\n0. Exit\n");


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
                    const bookToBorrow = library.books.find(book => book.bookTitle === bookTitle);

                    if (bookToBorrow) {
                        borrowBook.bookTitle = bookTitle;

                        rl.question('Enter Student ID: ', (studentID) => {
                            const student = library.registeredStudents.find(s => s.studentID === studentID);

                            if (student) {
                                borrowBook.studentID = studentID;

                                rl.question('Enter Librarian ID: ', (librarianID) => {
                                    const librarian = library.registeredLibrarians.find(l => l.librarianID === librarianID);

                                    if (librarian) {
                                        borrowBook.librarianID = librarianID;

                                        borrowBook.borrowedDate = new Date();
                                        library.books = library.books.filter(book => book.bookTitle !== bookTitle);

                                        student.borrowedBooks = student.borrowedBooks || [];

                                        student.borrowedBooks.push(borrowBook);
                                        saveLibrary(library);

                                        console.log(`Student "${student.name}" Book Title "${borrowBook.bookTitle}" Student are Book successfully Borrowed.Student ID "${borrowBook.studentID}" Librarian ID "${borrowBook.librarianID}" Borrowed Date "${borrowBook.borrowedDate.toLocaleDateString()}}"`);
                                        getUserInput();

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
                    } else {
                        console.log(`Book Title "${bookTitle}" is not available in the library.`);
                        getUserInput();
                    }
                });
                break;
            }
            //Return Book
            case 8: {
                rl.question('Enter Book Title to return: ', (bookTitle) => {
                    //find the bookTitle with student borrowed book
                    const student = library.registeredStudents.find(student => {
                        return student.borrowedBooks.some(book => book.bookTitle === bookTitle);
                    });


                    if (student) {
                        //match the return and borrowed book title
                        const returnBook = student.borrowedBooks.find(book => book.bookTitle === bookTitle);

                        if (returnBook) {
                            const currentDate = new Date();
                            const returnDate = new Date(currentDate);
                            returnDate.setDate(currentDate.getDate() + 5);

                            const daysDifference = Math.ceil((currentDate - new Date(returnBook.borrowedDate)) / (1000 * 60 * 60 * 24));

                            if (daysDifference <= 5) {
                                console.log(`No fine. Book returned within 5 days.`);
                            } else {
                                const finePerDay = 100;
                                const additionalDays = daysDifference - 5;
                                const fine = additionalDays * finePerDay;

                                console.log(`Fine: ${fine} rupees for returning after ${daysDifference} days.`);
                            }
                            //update the book list
                            student.borrowedBooks = student.borrowedBooks.filter(book => book.bookTitle !== bookTitle);

                            console.log(`Student Returned Book Successfully BookTITLE "${returnBook.bookTitle}" `);

                            returnBook.returnDate = returnDate;
                            library.books = library.books || [];
                            library.books.push(returnBook);

                            saveLibrary(library)
                        } else {
                            console.log(`Book TITLE "${bookTitle}" not found in borrowed books.`);
                        }
                    } else {
                        console.log(`Book TITLE "${bookTitle}" not borrowed.`);
                    }
                    getUserInput();
                });
                break;
            }
            //Sort Book
            case 9: {
                library.books.sort((a, b) => a.bookTitle.localeCompare(b.bookTitle));

                console.log("All books sorted alphabetically:");
                library.books.forEach(book => {
                    console.log(`-Book Title "${book.bookTitle}"  ${book.studentID}`);
                });

                getUserInput();
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
