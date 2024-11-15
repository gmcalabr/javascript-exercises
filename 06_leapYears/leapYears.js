const leapYears = function(year) {
    const isDivByFour = !Boolean(year % 4);
    const isCentury = !Boolean(year % 100);
    const isQuadriCentennial = !Boolean(year % 400);

    if ( isDivByFour && 
        (!isCentury || isQuadriCentennial)) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
