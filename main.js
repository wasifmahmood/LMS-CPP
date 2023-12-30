import Author from "./src/Author.js";
import Book from "./src/Book.js";
// Assuming similar imports for other classes if they are used

function main() {
    // Create author
    let author = new Author("sumair");
    let auther2 = new Author("Wasif")

    // Function calling
    author.addBook();
    author.removeBook();

    // Create books
    let harryPotter = new Book("Harry Potter and the Sorcerer's Stone", "978", "Fantasy");
    let LifeShafak = new Book("The Lord of the Rings", "979", "Romantic");
    let Thinkpad = new Book("The Hobbit", "07122", "Computer");
    // Assuming setAuthor is a method of Book
    Thinkpad.setAuthor(author);
    harryPotter.setAuthor(auther2);
    // Function calling
    harryPotter.borrowBook();
    harryPotter.returnBook();
    harryPotter.calculateFine();
    console.log(Thinkpad);
    console.log(harryPotter);
    // Similar instances and method calls for Student, Librarian, and Library can be added
    // based on the previously converted classes

    return 0;
}

main(); // Call the main function to execute
