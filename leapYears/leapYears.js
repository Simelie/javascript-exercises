const leapYears = function(number) {
    if (number % 4 === 0){
        if (number % 100 !== 0)
            return true;
        else if (number % 400 === 0) return true;
    }
    return false;
}

module.exports = leapYears
