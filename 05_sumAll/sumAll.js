const sumAll = function (par1, par2) {
    if (!par1 || !par2) {
        console.log(`Input empty!`);
    }
    else if (Number.isInteger(par1) && Number.isInteger(par2)) {
        console.log('Integer');
        if (par1 == par2) {
            return par1;
        }
        else if (par1 > 0 && par2 > 0) {
            console.log('Larger than 0');
            let sum = 0;
            if (par1 > par2) {
                const minInt = par2;
                const maxInt = par1;

                for (let int = minInt; int <= maxInt; int++) {
                    sum += int;
                }
            }
            if (par2 > par1) {
                const minInt = par1;
                const maxInt = par2;

                for (let int = minInt; int <= maxInt; int++) {
                    sum += int;
                }
            }
            return sum;
        }
    }
    return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
