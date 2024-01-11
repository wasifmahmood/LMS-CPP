import { get } from "https";
import Author from "./src/Author.js";
import Book from "./src/Book.js";
import Librarian from "./src/Librarian.js";
import Library from "./src/Library.js";
import Student from "./src/Student.js";
import readline from 'readline';
// import { saveLibrary, loadLibraryData } from "./fileSave.js";
// import fs from "fs";


// function saveLibrary(library) {
//     fs.writeFileSync("libraryData.json", JSON.stringify(library), 'utf-8');
// }

// function loadLibraryData() {
//     try {
//         const data = fs.readFileSync('libraryData.json', 'utf-8');
//         return JSON.parse(data);
//     } catch (err) {
//         console.log("No existing library found. Creating new one.");
//         const library = new Library('DHA Phase 1');
//         saveLibrary(library);
//         return library;
//     }
// }

// const library = loadLibraryData();


function getUserInput(library, librarian,student) {
    console.log("Library :: ", library)
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    console.log("1. Register Librarian\n2. Remove Librarian\n3. Register Student\n4. Remove Student\n5. Add Book\n6. Remove Book\n7. Borrow Book\n8. Return Book\n9. Sort Book\n0. Exit\n");


    rl.question("Enter your choice:", (choice) => {
        choice = parseInt(choice);

        switch (choice) {
            //Add Librarian
            case 1: {
                // const newLibrary = new Library('Library Name');
                // newLibrary.registerLibrarian(() => {
                //     saveLibrary(newLibrary,getUserInput);
                //     getUserInput(library);
                // });
                library.registerLibrarian(getUserInput, librarian);
                // getUserInput();1
                break;
            }
            //Remove Librarian
            case 2: {
                library.removeLibrarian(getUserInput, librarian);
                // getUserInput();
                break;
            }
            //Add Student
            case 3: {
                // const newLibrary = new Library('Add Student Name');
                // newLibrary.registerStudent(() => {
                //     saveLibrary(newLibrary, getUserInput);
                //     getUserInput(library);
                // });
                library.registerStudent(getUserInput,librarian);

                break;
            }
            //Remove Student
            case 4: {
                library.removeStudent(getUserInput, librarian);
                // library.removeStudent();
                // getUserInput();
                break;
            }
            //Add Book
            case 5: {
                librarian.addBook(getUserInput, library);
                // getUserInput();
                break;
            }
            //Remove Book
            case 6: {
                librarian.removeBook(getUserInput, library);
                // getUserInput();
                break;
            }
            //Borrowed Book
            case 7: {
                student.borrowBooks(getUserInput, library);
                // getUserInput();
                break;
            }
            //Return Book
            case 8: {
                student.returnBooks(getUserInput, library);
                // getUserInput();
                break;
            }
            //Sort Book
            case 9: {
                librarian.sortBook(getUserInput, library);
                // getUserInput();
                break;
            }

            //Program Exit
            case 0:
                console.log("Exiting program.");[]
                return;
            default:
                console.log("Invalid choice. Try again.");
                // saveLibrary(library)
                getUserInput();
        }
    });
}





function main() {

    // // Create author
    // let author = new Author("sumair");

    // // Create books
    // let book = new Book("The Hobbit", "07122", "Computer");

    // // setAuthor is a Book
    // book.setAuthor(author);

    // console.log(book);

    // // Create Student
    const student = new Student("Hamza", "219596", "Hamza@gmail.com");

    // console.log(student);

    // // student.borrowedBooks();
    // // student.returnedBooks();


    // // Create Librarian
    const librarian = new Librarian("Hameed", "218023", "Hameed@gmail.com");

    // console.log(librarian);

    // // librarian.addBook();
    // // librarian.removedBook();
    // // librarian.sortBook();

    // // Create Library
    const library = new Library("DHA Phase 1");


    getUserInput(library, librarian);
    return 0;
}
main();
