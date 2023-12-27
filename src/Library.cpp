#include <iostream>
#include <string>
#include <vector>
using namespace std;

class Library
{
private:
    string libraryAddress;

public:
      Library(string address)
    {
        libraryAddress = address;
    }

    void addBook()
    {
        cout << "Book added to the library." << endl;
    }
    void removeBook()
    {
        cout << "Book removed to the library." << endl;
    }
    void registerStudent()
    {
        cout << "Student registered in the library." << endl;
    }
    void removeStudent()
    {
        cout << "Student removed in the library." << endl;
    }
    void registerLibrarian()
    {
        cout << "Librarian registered in the library." << endl;
    }
    void removeLibrarian()
    {
        cout << "Librarian removed in the library." << endl;
    }
};
