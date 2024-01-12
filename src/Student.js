import User from "./User.js";
import readline from 'readline';


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Student extends User {
    constructor(studentName, ID, email) {
        super(studentName);
        this.email = email;    //variable
        this.ID = ID;
        this.borrowedBooks = [];
        this.returnedBooks = [];
    }


    borrowBooks(getUserInput, library, librarian) {
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

                                borrowBook.status = "Bookisborrowed";

                                borrowBook.borrowedDate = new Date();
                                library.books = "borrowed";

                                student.borrowedBooks = student.borrowedBooks || [];

                                student.borrowedBooks.push(borrowBook);

                                console.log("student.borrowedBooks :: ", student.borrowedBooks)
                                console.log(`Student "${student.name}" Book Title "${borrowBook.bookTitle}"  are Book successfully Borrowed.Student ID "${borrowBook.studentID}" Librarian ID "${borrowBook.librarianID}" Borrowed Date "${borrowBook.borrowedDate.toLocaleDateString()}"`);

                                getUserInput(library, librarian, this);

                            } else {
                                console.log(`Librarian ID "${librarianID}" not found in the library.`);
                                getUserInput(library, librarian, this);
                            }
                        });
                    } else {
                        console.log(`Student ID "${studentID}" not found in the library.`);
                        getUserInput(library, librarian, this);
                    }
                });
            } else {
                console.log(`Book Title "${bookTitle}" is not available in the library.`);
                getUserInput(library, librarian, this);
            }
        });
    }
    returnBooks(getUserInput, library, librarian) {
        rl.question('Enter Book Title to return: ', (bookTitle) => {
            const student = library.registeredStudents.find(student => {
                return student.borrowedBooks.some(book => book.bookTitle === bookTitle);
            });
            if (student) {
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
                    // console.log("student :: ", student)

                    student.borrowedBooks = student.borrowedBooks.filter(book => book.bookTitle !== bookTitle);

                    console.log(`Student Returned Book Successfully BookTITLE "${returnBook.bookTitle}" `);

                    returnBook.status = "AvaiableisBook";

                    returnBook.returnDate = returnDate;
                    library.books = "avaiable";

                    student.returnedBooks = student.returnedBooks || [];

                    student.returnedBooks.push(returnBook);

                    getUserInput(library, librarian, this)
                } else {
                    console.log(`Book TITLE "${bookTitle}" not found in borrowed books.`);
                    getUserInput(library, librarian, this);
                }
            } else {
                console.log(`Book TITLE "${bookTitle}" not borrowed.`);
                getUserInput(library, librarian, this);
            }
        });
    }
}
export default Student;
