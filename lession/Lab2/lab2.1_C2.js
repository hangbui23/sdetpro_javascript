const readline = require('readline-sync');

let height = readline.question('Input height(m) ');
let weight = readline.question('Input weight(kg) ');
let BMI = Number(weight) / Number((height **2));
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
