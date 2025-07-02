const readline = require('readline-sync');

let height = readline.question('Input height(m):');
let weight = readline.question('Input weight(kg):');
if (height <= 0 | weight <= 0) {
    console.log("Height , weight must be greater than 0");
}
else {
    let BMI = Number(weight) / Math.pow(height,2);
    if (BMI < 18.5) {
        console.log('Underweight');
    }
    else if (BMI <= 24.9) {
        console.log('Normal weight');
    }
    else if (BMI <= 29.9) {
        console.log('Overweight');
    }
    else {
        console.log("Obesty")
    }
}
