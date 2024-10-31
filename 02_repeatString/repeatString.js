const repeatString = function(string, times) {
    let finalString = "";
    for(i=1; i<=times; i++){
        finalString += string;
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
