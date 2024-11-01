const leapYears = function(years) {
    if(Number.isInteger(years) == false) return false;
    if(years % 400 == 0) return true;
    if(years % 100 == 0) return false;
    if(years % 4 == 0) return true;
    return false;
};

// Do not edit below this line
module.exports = leapYears;
