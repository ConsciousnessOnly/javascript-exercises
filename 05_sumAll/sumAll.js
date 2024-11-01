const sumAll = function (par1, par2) {
    if (Number.isInteger(par1) && Number.isInteger(par2)) {
        if (par1 == par2) return par1;
        else if (par1 > 0 && par2 > 0) {
            return (par1 > par2) ? getSum(par2, par1) : getSum(par1, par2);
        }
    }
    return "ERROR";
};

function getSum(minInt, maxInt) {
    let sum = 0;
    for (let int = minInt; int <= maxInt; int++) {
        sum += int;
    }
    return sum;
}

// Do not edit below this line
module.exports = sumAll;
