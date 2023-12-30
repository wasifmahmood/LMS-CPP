import User from "./User.js";

class Librarian extends User {
    constructor(librarianName) {
        super(librarianName);
    }

    shelveBook() {
        console.log("Book Added by shelve");
    }

    issueBook() {
        console.log("Book issued");
    }

    receiveBook() {
        console.log("Book received");
    }
}

export default Librarian;
