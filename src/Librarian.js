import User from "./User.js";
import Library from "./Library.js";
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
class Librarian extends User {
    constructor(librarianName, ID, email) {
        super(librarianName);
        this.ID = ID;
        this.email = email;    //variable
        this.addedBooks = [];
        this.removedBook = [];
        this.sortedBooks = [];
    }

    addBook(getUserInput, library, student) {
        const newBook = {};

        rl.question('Enter Book title: ', (bookTitle) => {
            newBook.bookTitle = bookTitle;

            rl.question('Enter Book ISBN: ', (bookISBN) => {
                newBook.bookISBN = bookISBN;

                rl.question('Enter Book genre: ', (bookGenre) => {
                    newBook.bookGenre = bookGenre;

                    rl.question('Enter Book to the Shelve: ', (bookShelve) => {
                        newBook.bookShelve = bookShelve;

                        newBook.status = "Avaiable";

                        library.books.push(newBook);
                        console.log(`Book "${newBook.bookTitle}" with ISBN "${newBook.bookISBN}" Genre "${newBook.bookGenre}" and Shelve "${newBook.bookShelve}" has been registered.`);
                        getUserInput(library, this, student);
                    });
                });
            });
        });
    }
    removeBook(getUserInput, library, student) {
        rl.question('Enter Book ISBN to remove: ', (bookISBN) => {
            const removeBooks = library.books.find(book => book.bookISBN === bookISBN);
            if (removeBooks) {
                library.books = library.books.filter(book => book.bookISBN !== bookISBN);

                // removeBook.status = "Bookremoveinlibrary";

                console.log(`Book "${removeBooks.bookTitle}" has been removed.`);
                getUserInput(library, this);

            } else {
                console.log(`Book with ID ${bookISBN} not found.`);
                getUserInput(library, this, student);
            }
        });
    }
    sortBook(getUserInput, library, student) {
        library.books.sort((a, b) => a.bookTitle.localeCompare(b.bookTitle));

        console.log("All books sorted alphabetically:");
        library.books.forEach(book => {
            console.log(`-Book Title "${book.bookTitle}" `);
            getUserInput(library, this, student);
        });
    }
}

export default Librarian;
