
#include <iostream>
#include <string>
using namespace std;

class User
{
protected:
    string userName;

public:
    // Parent class of Auther-Student and Librarian
    User(const string userName): userName(userName) {}
};