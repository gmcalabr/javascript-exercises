const repeatString = function(inputString, reps) {
    let outputString = "";
    while (reps) {
        if (reps < 1) return 'ERROR';
        outputString += inputString;
        reps--
    }
    return outputString;
};

// Do not edit below this line
module.exports = repeatString;
