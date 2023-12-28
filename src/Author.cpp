#include <iostream>
#include <string>
#include "./User.cpp"

using namespace std;


class Author : public User {
    public:
        Author(string authorName) : User(authorName) {}

        void addBook()
        {
            cout << "Add Book successfully" << endl;
        }
        void removeBook()
        {
            cout << "Remove Book successfully" << endl;
        }
};

