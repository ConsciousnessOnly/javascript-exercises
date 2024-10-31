const reverseString = function(word) {
    const wordLength = word.length;
    let reversedWord = "";
    // Reverse word from last char to fist char
    for (let charOrder = wordLength-1; charOrder >= 0; charOrder--)
        {
        reversedWord += word[charOrder];
        }
    return reversedWord;
};

// Do not edit below this line
module.exports = reverseString;
