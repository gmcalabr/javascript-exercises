const sumAll = function(low, high) {

    let answer = 0;
    let numArray = [];

    if (!Number.isInteger(low) || !Number.isInteger(high)) return "ERROR";
    if (low < 0 || high < 0) return "ERROR";

    if (low > high) for (let i = high; i <= low; i++) numArray.push(i);
    if (low <= high) for (let i = low; i <= high; i++) numArray.push(i);

    numArray.forEach((item) => answer += item);

    return answer;
};

// Do not edit below this line
module.exports = sumAll;
