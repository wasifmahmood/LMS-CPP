#include <iostream>
#include <string>
#include "./User.cpp"
#include "./Book.cpp"
#include "./Librarian.cpp"

using namespace std;

class Transaction
{
private:
    Book *borrowedBook;
    Book *returnedBook;
    double fine;
    Book *book;
    User *user;
    Librarian *librarian;

public:
    Transaction(Book *transactionBook, User *transactionUser, Librarian *transactionLibrarian);

    Transaction::Transaction(
        Book *transactionBook,
        User *transactionUser,
        Librarian *transactionLibrarian)
        : //   borrowedDate(time(0)),
          //   returnedDate(0),
          fine(0.0),
          book(transactionBook),
          user(transactionUser),
          librarian(transactionLibrarian)
    {
    }
};