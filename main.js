import Author from "./src/Author.js";
import Book from "./src/Book.js";
import Librarian from "./src/Librarian.js";
import Library from "./src/Library.js";
import Student from "./src/Student.js";
import readline from 'readline';

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
 });
 
function main() {

    // Create author
    let author  = new Author("sumair");
    let auther2 = new Author("Wasif")
    let auther3 = new Author("Zahid")


   //  // Create books
    let book1 = new Book("Harry Potter and the Sorcerer's Stone", "978", "Fantasy");
    let book2 = new Book("The Lord of the Rings", "979", "Romantic");
    let book3 = new Book("The Hobbit", "07122", "Computer");

   //  // setAuthor is a Book
    book1.setAuthor(author);
    book2.setAuthor(auther3)
    book3.setAuthor(auther2);

   //  // Function calling
    book1.borrowBook();
    book1.returnBook();
    book1.calculateFine();

    console.log(book1);
    

//     // Create Student
   //  let studentName = new Student("Hamza","219596","Hamza@gmail.com");

   //  studentName.borrowBook();
   //  studentName.returnBook();

   //  console.log(studentName);

//  // Create Librarian
    let librarianName   = new Librarian("Hameed");

   //  librarianName.addBook();
   //  librarianName.removeBook();
   //  librarianName.shelveBook();
   //  librarianName.issueBook();
   //  librarianName.receiveBook();

   //  console.log(librarianName);


 // Create Library
    let address   = new Library("DHA Phase 1");

    address.registerStudent();
    address.removeStudent();
    address.registerLibrarian();
    address.removeLibrarian();


    console.log(address);

    //input


   



while (true) {
  console.log("1. Register Librarian\n2. Remove Librarian\n3. Register Student\n4. Remove Student\n5. Add Book\n6. Remove Book\n7. Borrow Book\n8. Return Book\n9. Exit\n");

  rl.question("Enter your choice:", (choice) => {
    choice = parseInt(choice);

    switch (choice) {
      case 1: {
        let librarianName = prompt("Enter Librarian Name:");
        let newLibrarian = new Librarian(librarianName);
        Library.registerLibrarian(newLibrarian);
        break;
      }
      case 2: {
        let librarianName = prompt("Enter Librarian Name to Remove:");
        Library.removeLibrarian(librarianName);
        break;
      }
      case 3: {
        let studentName = prompt("Enter Student Name:");
        let studentEmail = prompt("Enter Student Email:");
        let newStudent = new Student(studentName, studentEmail);
        Library.registerStudent(newStudent);
        break;
      }
      case 4: {
        let studentEmail = prompt("Enter Student Email to Remove:");
        Library.removeStudent(studentEmail);
        break;
      }
      case 5: {
        let bookTitle = prompt("Enter Book Title:");
        let bookISBN = prompt("Enter Book ISBN:");
        let bookGenre = prompt("Enter Book Genre:");
        let authorName = prompt("Enter Author Name:");
        let author = new Author(authorName);
        let newBook = new Book(bookTitle, bookISBN, bookGenre, author);
        Librarian.addBook(newBook);
        break;
      }
      case 6: {
        let bookTitle = prompt("Enter Book Title to Remove:");
        Librarian.removeBook(bookTitle);
        break;
      }
      case 7: {
        let bookTitle = prompt("Enter Book Title to Borrow:");
        if (Student.borrowBook(bookTitle)) {
          console.log("Book borrowed successfully.");
        } else {
          console.log("Book not found or not available for borrowing.");
        }
        break;
      }
      case 8: {
        let bookTitle = prompt("Enter Book Title to Return:");
        if (Student.returnBook(bookTitle)) {
          console.log("Book returned successfully.");
        } else {
          console.log("Book not found or already available.");
        }
        break;
      }
      case 9:
        console.log("Exiting program.");
        rl.close();
        return;
      default:
        console.log("Invalid choice. Try again.");
    }
  });
}







    return 0;
}

main();
