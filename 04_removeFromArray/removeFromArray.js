const removeFromArray = function (array, ...deletionVal) {    
    for(let value of deletionVal) {
        let checkIndex = 0;
        while (checkIndex < array.length) {
            if (array[checkIndex] === value) {
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
