#include <iostream>
#include "src/Author.cpp"
#include "src/Book.cpp"
#include "src/Librarian.cpp"
#include "src/Library.cpp"
#include "src/Student.cpp"
#include "src/./User.cpp"


int main()
{

    // Create authors
    Author author("sumair");

    // funciton calling
    author.addBook();
    author.removeBook();

    // Create books
    Book harryPotter("Harry Potter and the Sorcerer's Stone", "978", "Fantasy", &author);
    Book LifeShafak("The Lord of the Rings", "979", "Romantic", &author);
    Book Thinkpad("The Hobbit", "07122", "Computer", &author);

    // funciton calling
    harryPotter.borrowBook();
    harryPotter.returnBook();
    harryPotter.calculateFine();

    // Create a Student
    Student studentName("saoud", "saoud@gmail.com");

    // funciton calling
    studentName.borrowBook();
    studentName.returnBook();

    // Create a librarian
    Librarian librarianName("Huzaifa");

    // funciton calling
    librarianName.shelveBook();
    librarianName.issueBook();
    librarianName.receiveBook();

    // Create Library
    Library address("DHAPhase1");

    // funciton calling
    address.addBook();
    address.removeBook();
    address.registerStudent();
    address.removeStudent();
    address.registerLibrarian();
    address.removeLibrarian();


    return 0;
};