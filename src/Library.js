// library.js
import readline from 'readline';
// import { saveLibrary, loadLibraryData } from '../fileSave.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Library {
    constructor(address) {
        this.libraryAddress = address;
        this.registeredStudents = [];
        this.registeredLibrarians = [];
        this.books = [];
    }

    registerLibrarian(getUserInput,librarian) {
        const newLibrarian = {};

        rl.question('Enter Librarian Name: ', (librarianName) => {
            newLibrarian.name = librarianName;

            rl.question('Enter Librarian ID: ', (librarianID) => {
                const isLibrarianID = !this.registeredLibrarians || !this.registeredLibrarians.some(librarian => librarian.librarianID === librarianID);

                if (isLibrarianID) {
                    newLibrarian.librarianID = librarianID;

                    if (!this.registeredLibrarians) {
                        this.registeredLibrarians = [];
                    }

                    this.registeredLibrarians.push(newLibrarian);
                    console.log(`Librarian "${newLibrarian.name}" with ID "${newLibrarian.librarianID}" has been registered.`);
                    getUserInput(this,librarian)
                    // saveLibrary(this);
                } else {
                    console.log(`Librarian ID "${librarianID}" already exists.`);
                    getUserInput(this,librarian);
                }
            });
        });
    }

    removeLibrarian(getUserInput,librarian) {
        rl.question('Enter Librarian ID to remove: ', (librarianID) => {
            const removedLibrarian = this.registeredLibrarians.find(librarian => librarian.librarianID === librarianID);
            if (removedLibrarian) {
                this.registeredLibrarians = this.registeredLibrarians.filter(librarian => librarian.librarianID !== librarianID);
                console.log(`Librarian ID "${removedLibrarian.librarianID}" has been removed.`);
                getUserInput(this,librarian);

            } else {
                console.log(`Librarian ID "${librarianID}" not found.`);
                getUserInput(this,librarian);

            }
            // saveLibrary(this);
        });
    }

    registerStudent(getUserInput,librarian) {
        const newStudent = {};

        rl.question('Enter Student Name: ', (studentName) => {
            newStudent.name = studentName;

            rl.question('Enter Student ID: ', (studentID) => {
                const isStudentID = !this.registeredStudents || !this.registeredStudents.some(student => student.studentID === studentID);

                if (isStudentID) {
                    newStudent.studentID = studentID;

                    if (!this.registeredStudents) {
                        this.registeredStudents = [];
                    }

                    this.registeredStudents.push(newStudent);
                    console.log(`Student "${newStudent.name}" with ID "${newStudent.studentID}" has been registered.`);
                    // saveLibrary(this);
                    getUserInput(this,librarian);

                } else {
                    console.log(`Student ID "${studentID}" already exists.`);
                    getUserInput(this,librarian);

                }
            });
        });
    }

    removeStudent(getUserInput,librarian) {
        rl.question('Enter Student ID to remove: ', (studentID) => {
            const removedStudent = this.registeredStudents.find(student => student.studentID === studentID);
            if (removedStudent) {
                this.registeredStudents = this.registeredStudents.filter(student => student.studentID !== studentID);
                console.log(`Student ID "${removedStudent.studentID}" has been removed.`);
                getUserInput(this,librarian);
            } else {
                console.log(`Student ID "${studentID}" not found.`);
                getUserInput(this,librarian);
            }
            // saveLibrary(this);
        });
    }
}

export default Library;
