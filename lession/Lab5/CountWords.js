const readLine = require('readline-sync');
let givenString = readLine.question("Input your sentence: ");
let newString = givenString.replace(/[.,!?]/gi, '').trim();
let wordsArray = newString.split(" ");
CountWords(wordsArray);


function CountWords(wordsArray) {
    if (wordsArray == '' || wordsArray.length === 0) {
        console.log("No words found in the input.");
        return;
    }
    else {
        const countWord = {}
        for (let word of wordsArray) {
            if (countWord[word]) {
                countWord[word]++;
            } else {
                countWord[word] = 1;
            }
            console.log(`Sau khi xử lý "${word}":`, countWord);
        }



        for (let key in countWord) {
            if (countWord.hasOwnProperty(key)) {
                console.log(`* ${key}: ${countWord[key]}`);
            }
        }
    }
}
