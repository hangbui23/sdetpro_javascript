const readline = require('readline-sync');

// let inputData = readline.question('Input number ');
// let number = Number(inputData);

// if(Number.isNaN(number)){
//     console.log(`Input value ${inputData} is not a number`);

// } else if (number === 0) {
//     console.log(`${number} is zero and is not even or odd`);
// }
// else {
//     if (number % 2 === 0) {
//         console.log(`${number} is even numer`);
//     }
//     else {
//         console.log(`${number} is odd numer`);
//     }
// } 

let attempt = 1;
let number;

while (attempt <= 10) {
    let inputData = readline.question('Input number ');
    number = Number(inputData);
    if (!Number.isNaN(number)) {
        if (number === 0) {
            console.log(`${number} is zero and is not even or odd`);
        } else if (number % 2 == 0) {
            console.log(`${number} is even numer`);
        }
        else {
            console.log(`${number} is odd numer`);
        }
        break;
    } else {
        console.log(`Input value ${inputData} is not a number`);
        attempt++;
    }
}

if(attempt===10){
    console.log("You have reach maximum number input data. Please try in 10 minutes later");
}