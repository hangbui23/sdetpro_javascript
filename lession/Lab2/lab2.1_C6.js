const readline = require('readline-sync');

let height = readline.question('Input height(m):');
let weight = readline.question('Input weight(kg):');

(height <= 0 | weight <= 0) ? console.log("Height , weight must be greater than 0") : calculateBMI(height, weight);

function calculateBMI(height, weight) {
let BMI = Number(weight) / Number((height * height));
    let message = (BMI < 18.5) ? 'Underweight' :
        (BMI <= 24.9) ? 'Normal weight' :
            (BMI <= 29.9) ? 'Overweight' : 'Obesty';
    console.log(message);
}