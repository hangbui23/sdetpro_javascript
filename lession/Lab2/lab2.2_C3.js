const readline = require('readline-sync');

let number = readline.question('Input number ');

let message = (number%2==0) ? `${number} is even numer` : `${number} is odd numer`;
console.log(message);
