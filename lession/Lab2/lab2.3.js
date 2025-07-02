const readline = require('readline-sync');

let height = readline.question('Input height(m):');
let weight = readline.question('Input weight(kg):');
if (height <= 0 || weight <= 0) {
    console.log("Height and weight must be greater than 0");
}
else {
    let BMI = (Number(weight) / Number((height * height))).toFixed(1);
    let idealMinWeightBMI = 18.5 * Number((height * height));
    let idealMaxWeightBMI = 24.9 * Number((height * height));

    if (BMI < 18.5) {
        console.log('Underweight');
        console.log(`You should increase ${idealMinWeightBMI - weight}`);
    }
    else if (BMI <= 24.9) {
        console.log('Normal weight');
    }
    else if (BMI <= 29.9) {
        console.log('Overweight');
        console.log(`You should decrease ${weight - idealMaxWeightBMI}`);
    }
    else {
        console.log("Obesty");
        console.log(`You should decrease ${weight - idealMaxWeightBMI}`);
    }
}

