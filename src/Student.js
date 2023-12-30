import User from "./User.js";

class Student extends User {
    constructor(studentName, email) {
        super(studentName);
        this.email = email;
    }

    borrowBook() {
        console.log("Book borrowed successfully");
    }

    returnBook() {
        console.log("Book returned successfully.");
    }
}

export default Student;
