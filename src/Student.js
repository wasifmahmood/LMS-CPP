import User from "./User.js";

class Student extends User {
    constructor(studentName, ID,email) {
        super(studentName);
        this.email = email;    //variable
        this.ID = ID;
        this.borrowedBooks = [];
        this.returnedBooks = [];
    }




}
export default Student;
