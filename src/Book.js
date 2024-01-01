import Author from "./Author.js";

class Book {
    constructor(title, ISBN, genre, author = null) {
        this.title = title;
        this.ISBN = ISBN;
        this.genre = genre;
        this.author = author;
        this.availability = true;
    }

    borrowBook() {
        if (this.availability) {
            console.log("Book borrowed successfully");
            this.availability = false;
        } else {
            console.log("Book is not available for borrowing.");
        }
    }

    returnBook() {
        this.availability = true;
        console.log("Book returned successfully.");
    }

    calculateFine() {
        console.log("Fine calculation.");
    }

    setAuthor(author) {
        this.author = author;
    }
}

export default Book;
