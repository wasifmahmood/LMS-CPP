
import readline from 'readline';

//add a input 
const rl = readline.createInterface({
    input: process.stdin,    //input
    output: process.stdout   //output
});

class Library {
    constructor(address) {
        this.libraryAddress = address;
        this.registeredStudents = [];
        this.registeredLibrarians = [];
        this.books = [];
        this.shelves = {};
        this.issuedBooks = {};
    }



    registerStudent() {

        const newStudent = {};

        rl.question('Enter student Detail: ', (studentDetail) => {
            newStudent.studentDetail = studentDetail;


            rl.question('Enter student name: ', (studentName) => {
                newStudent.studentName = studentName;

                rl.question('Enter student ID: ', (studentID) => {
                    newStudent.studentID = studentID;

                    rl.question('Enter student email: ', (studentEmail) => {
                        newStudent.studentEmail = studentEmail;

                        this.registeredStudents.push(newStudent);
                        console.log(`Student ${newStudent.studentName} with ID ${newStudent.studentID} and email ${newStudent.studentEmail} has been registered.`);
                        this.displayRegisteredStudents();
                        // rl.close();
                    });
                });
            });
        });
    }


    removeStudent(studentID) {
        const index = this.registeredStudents.findIndex(student => student.studentID === studentID);
        if (index !== -1) {
            const removedStudent = this.registeredStudents.splice(index, 1)[0];
            console.log(`Student ${removedStudent.studentName} with ID ${removedStudent.studentID} has been removed.`);
        } else {
            console.log(`Student with ID ${studentID} not found in the library.`);
        }
        this.displayRegisteredStudents();

    }

    registerLibrarian() {

        const newLibrarian = {};

        rl.question('Enter librarian details: ', (librariandetail) => {
            newLibrarian.librariandetail = librariandetail;

            rl.question('Enter librarian name: ', (librarianName) => {
                newLibrarian.librarianName = librarianName;

                rl.question('Enter Librarian ID: ', (librarianID) => {
                    newLibrarian.lirarianID = librarianID;


                    this.registeredLibrarians.push(newLibrarian);
                    console.log(`Librarian ${newLibrarian.librarianName} with ID ${newLibrarian.librarianID} has been registered.`);
                    this.displayRegisteredLibrarians();
                    rl.close();
                });
            })
        });
    }


    removeLibrarian(librarianID) {
        const index = this.registeredLibrarians.findIndex(librarian => librarian.librarianID === librarianID);
        if (index !== -1) {
            const removeLibrarian = this.registeredLibrarians.splice(index, 1)[0];
            return `Librarian ${removeLibrarian.librarianName} with ID ${removeLibrarian.librarianID} has been removed.`;
        } else {
            return `Librarian with ID ${librarianID} not found in the library.`;
        }
    }





    displayRegisteredStudents() {
        console.log('Updated list of registered students:', this.registeredStudents);
    }

    displayRegisteredLibrarians() {
        console.log('Updated list of registered Librarians:', this.registeredLibrarians);
    }

    displayBooks() {
        console.log('Updated list of books in the library:', this.books);
    }

    displayShelves() {
        console.log('Books on shelves:', this.shelves);
    }

    displayIssuedBooks() {
        console.log('Issued books:', this.issuedBooks);
    }



}
export default Library;
