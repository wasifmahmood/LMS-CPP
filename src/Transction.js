import User from "./User.js";
import Book from "./Book.js";
import Librarian from "./Librarian.js";

class Transaction {
    constructor(transactionBook, transactionUser, transactionLibrarian) {
        this.borrowedBook = null; 
        this.returnedBook = null; 
        this.fine = 0.0;
        this.book = transactionBook;
        this.user = transactionUser;
        this.librarian = transactionLibrarian;
    }
}

export default Transaction;
