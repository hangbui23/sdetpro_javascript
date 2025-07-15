const readline = require('readline-sync');

let input1 = readline.question('Input array 1:');
let array_int1 = input1.split(',').map(Number);
let input2 = readline.question('Input array 2:');
let array_int2 = input2.split(',').map(Number);

console.log("Sort Arrays 1: " + array_int1.sort((a, b) => a-b));
console.log("Sort Arrays 2: " + array_int2.sort((a, b) => a-b));

let array_int3 = array_int1.concat(array_int2);
console.log("Sort Arrays 3: " + array_int3.sort((a, b) => a-b));