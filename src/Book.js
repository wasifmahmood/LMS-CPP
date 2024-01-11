import Author from "./Author.js";

class Book {
    constructor(title, ISBN, genre, author = null) {
        this.title = title;
        this.ISBN = ISBN;
        this.genre = genre;
        this.author = author;
        this.availability = true;
    }

    setAuthor(author) {
        this.author = author;
    }
}

export default Book;
