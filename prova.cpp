#include <iostream>

struct vector{
    float y;
    float punt_x;
};


int main() {
    vector vector1;
    vector1.punt_x = 1;
    vector1.y = 3;
    std::cout << vector1.punt_x << "\n" ;
    std::cout << vector1.y << "\n";
    return 0;
}
