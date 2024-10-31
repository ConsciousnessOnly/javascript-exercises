const removeFromArray = function (array, deletionNum) {
    console.log(`Array: [${array}], Remove Number: ${deletionNum} `);

    let checkIndex = 0;

    while (checkIndex < array.length) {
        console.log(`Check array[${checkIndex}], Array length: ${array.length}`);

        if (array[checkIndex] === deletionNum) {
            console.log(`Remove array[${checkIndex}] value: ${array[checkIndex]}`);
            array.splice(checkIndex, 1); // 2nd parameter means remove one item only
        }
        else {
            console.log(`No need to remove; check next.`);
            checkIndex++;
        }
    }
    console.log(`Finished, return [${array}].`);
    return array;
}

// Do not edit below this line
module.exports = removeFromArray;
