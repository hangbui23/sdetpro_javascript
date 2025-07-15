const readline = require('readline-sync');

let input = readline.question('Input array:');
let array_int = input.split(',').map(Number);

//console.log("Sort Arrays " + array_int.sort((a, b) => a-b));

function sortArray(array){
for(let i = 0; i < array.length; i++) {
    for(let j=i+1;j<array.length;j++){
        if(array[i]<array[j]){
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
}
return array;
}

console.log("Sort Arrays " + sortArray(array_int));
