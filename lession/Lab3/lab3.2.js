const readline = require('readline-sync');

let input = readline.question('Input array:');
let array_int = input.split(',').map(Number);
let min;
let max;
if (array_int.length == 1 && array_int[0] == 0) {
    console.log("Array is empty");
}
else {
    min = array_int[0];
    max = array_int[0];
    for (let i = 0; i < array_int.length; i++) {
        if (array_int[i] < min) {
            min = array_int[i];
        }
        if (array_int[i] > max) {
            max = array_int[i];
        }
    }
    console.log("Min number is " + min);
    console.log("Max number is " + max);
}

