import User from "./User.js";
import Library from "./Library.js";
import readline from 'readline';

const rl1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
class Librarian extends User {
    constructor(librarianName, ID) {
        super(librarianName);
        this.ID = ID;   
        this.books = [];
        // this.issuedBooks = [];
        

    }


}

export default Librarian;
