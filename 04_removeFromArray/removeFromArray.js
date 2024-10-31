const removeFromArray = function (array, deletionNum) {
    let returnArray = [];
    for (let checkPoint = 0; checkPoint < array.length; checkPoint++) {
        if (array[checkPoint] !== deletionNum) {
            const additionValue = array[checkPoint];
            returnArray.push(additionValue);
        }
    }
    return returnArray;
};

// Do not edit below this line
module.exports = removeFromArray;
