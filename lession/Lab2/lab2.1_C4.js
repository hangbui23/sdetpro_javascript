const readline = require('readline-sync');

let height = readline.question('Input height(m):');
let weight = readline.question('Input weight(kg):');
if (height <= 0 | weight <= 0) {
    console.log("Height , weight must be greater than 0");
}
else {
    let BMI = Number(weight) / Math.pow(height, 2);
    switch (true) {
        case (BMI < 18.5):
            console.log('Underweight');
            break;
        case (BMI <= 24.9):
            console.log('Normal weight');
            break;
        case (BMI <= 29.9):
            console.log('Overweight');
            break;
        default:
            console.log("Obesty");
            break;
    }
}