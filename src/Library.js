
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
        this.returnedbook = [];
    }




}
export default Library;
