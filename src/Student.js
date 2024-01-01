import User from "./User.js";

class Student extends User {
    constructor(studentName, ID,email) {
        super(studentName);
        this.email = email;    //variable
        this.ID = ID;
        this.borrowedBooks = [
            // {title:"Harry Potter and the Sorcerer's Stone",
            // ISBN: "978", 
            // genre:"Fantasy"}
        ];
    }


    borrowBook(book, librarian, daysToReturn) {
        if (librarian) {
            const dueDate = this.calculateDueDate(daysToReturn);
            if (librarian.issueBook(this.studentID, book.isbn, dueDate)) {
                // Remove the semicolon after the if statement
                this.borrowedBooks.push({ book, dueDate });
                console.log(`Student ${this.studentName} has borrowed the book: "${book.title}" with ISBN ${book.isbn}.`);
                console.log(`Due date for return: ${dueDate}`);
            } else {
                console.log(`Book with ISBN ${book.isbn} is not available for borrowing.`);
            }
        } else {
            console.log(`Librarian instance not provided. Cannot borrow the book.`);
        }
    }
       

    returnBook(book, librarian, returnDate) {
        if (librarian) {
            const borrowedBook = this.borrowedBooks.find(b => b.book.isbn === book.isbn);

            if (borrowedBook) {
                const fine = this.calculateFine(borrowedBook.dueDate, returnDate);
                
                if (fine > 0) {
                    console.log(`Student ${this.studentName} returned the book after the due date. Fine: ${fine} rupees.`);
                } else {
                    console.log(`Student ${this.studentName} returned the book on time. No fine.`);   
                }

                librarian.receiveBook(this.studentID, book.isbn);
                const index = this.borrowedBooks.findIndex(b => b.book.isbn === book.isbn);
                this.borrowedBooks.splice(index, 1);
            } else {
                console.log(`Student ${this.studentName} did not borrow the book: "${book.title}" with ISBN ${book.isbn}.`);
            }
        } else {
            console.log(`Librarian instance not provided. Cannot return the book.`);
        }
    }

    // calculateDueDate(daysToReturn) {
    //     const dueDate = new Date();
    //     dueDate.setDate(dueDate.getDate() + daysToReturn);
    //     return dueDate.toLocaleDateString();
    // }

    // calculateFine(dueDate, returnDate) {
    //     const dueDateTime = new Date(dueDate).getTime();
    //     const returnDateTime = new Date(returnDate).getTime();
    //     const daysLate = Math.max(0, (returnDateTime - dueDateTime) / (1000 * 60 * 60 * 24));
    //     const fine = Math.ceil(daysLate) * 100; // Assuming 100 rupees fine per day
    //     return fine;
    // }


}
export default Student;
