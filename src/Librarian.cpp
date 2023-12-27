#include <iostream>
#include <string>
#include "./User.cpp"

using namespace std;

class Librarian : public User
{

public:
    Librarian(string librarianName) : User(librarianName) {}

    void shelveBook()
    {
        cout << "Book Added by shelve" << endl;
    }
    void issueBook()
    {
        cout << "Book issed " << endl;
    }
    void receiveBook()
    {
        cout << "Book Added by " << endl;
    }
};
