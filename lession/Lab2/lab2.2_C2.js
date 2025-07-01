const readline = require('readline-sync');

let number = readline.question('Input number ');

switch (true) {
    case (number%2==0):
        console.log (`${number} is even numer`);
        break;
    default:
        console.log (`${number} is odd numer`);
        break;
}
