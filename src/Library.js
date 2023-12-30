class Library {
    constructor(address) {
        this.libraryAddress = address;
    }

    addBook() {
        console.log("Book added to the library.");
    }

    removeBook() {
        console.log("Book removed from the library.");
    }

    registerStudent() {
        console.log("Student registered in the library.");
    }

    removeStudent() {
        console.log("Student removed from the library.");
    }

    registerLibrarian() {
        console.log("Librarian registered in the library.");
    }

    removeLibrarian() {
        console.log("Librarian removed from the library.");
    }
}

export default Library;
