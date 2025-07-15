const readline = require('readline-sync');

let input = readline.question('Input array:');
let array_int = input.split(',').map(Number);
console.log(array_int);
let countEven = 0;
let countOdd = 0;
let array_Even = [];
let array_Odd = [];
if (array_int.length==1 && array_int[0] == 0) {
    console.log("Array is empty");
}
else {
    for (let i = 0; i < array_int.length; i++) {
        if (array_int[i] % 2 == 0) {
            countEven++;
            array_Even.push(array_int[i]);
        }
        else {
            countOdd++
            array_Odd.push(array_int[i]);

        }
    }
    console.log("Even number arrays [" + array_Even + "]");
    console.log("Total Even numbers is " + countEven);
    console.log("Odd number arrays [" + array_Odd + "]");
    console.log("Total Number Odd is " + countOdd);
}
