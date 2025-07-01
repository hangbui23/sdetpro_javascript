const readline = require('readline-sync');

let number = readline.question('Input number ');

if(number%2==0){
    console.log (`${number} is even numer`);
}
else
{
    console.log (`${number} is odd numer`);
}