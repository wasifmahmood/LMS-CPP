#include <iostream>
#include <string>
#include "./User.cpp"

using namespace std;

class Student : public User
{
private:
    string email; // student email

public:
    
    Student(string studentName, string email) : User(studentName) 
    {
        email = email;
    };

    void borrowBook()
    {

        cout << "Book borrowed successfully by " << endl;
    }
    void returnBook()
    {
        cout << "Book returned successfully." << endl;
    }
};