#include <iostream>
#include <string>
#include "./Author.cpp"

using namespace std;

class Book
{
private:
    string title;      // book name
    string ISBN;       // book number
    string genre;      // genre type
    bool availability; // bookavaiable
    // Author* author;    // auther defin

public:
    Book(string t, string i, string g, author nullptr)
    {
        title = t;
        ISBN = i;
        genre = g;
        // author = author;
        availability = true;
    };

    void borrowBook()
    {
        if (availability)
        {
            cout << "Book borrowed successfully by " << endl;
            availability = false;
        }
        else
        {
            cout << "Book is not available for borrowing." << endl;
        }
    }

    void returnBook()
    {
        availability = true;
        cout << "Book returned successfully." << endl;
    }

    void calculateFine()
    {
        cout << "Fine calculation ." << endl;
    }

    void setAuthor(Author* author) {
        this->author = author;
    }
};
