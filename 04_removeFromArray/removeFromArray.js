const removeFromArray = function (array, ...deletionNum) {    
    for(let number of deletionNum) {
        let checkIndex = 0;
        while (checkIndex < array.length) {
            if (array[checkIndex] === number) {
                array.splice(checkIndex, 1); // 2nd parameter means remove one item only
            }
            else {
                checkIndex++;
            }
        }
    }    
    return array;
}

// Do not edit below this line
module.exports = removeFromArray;
