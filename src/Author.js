// Assuming User.js has been similarly converted and is available
import User from "./User.js";

class Author extends User {
    constructor(authorName) {
        super(authorName);
    }

    addBook() {
        console.log("Add Book successfully");
    }

    removeBook() {
        console.log("Remove Book successfully");
    }
}

export default Author;
