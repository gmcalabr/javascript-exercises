const fibonacci = function(input) {
    if (input == 0) return 0;
    if (input < 0) return "OOPS";

    let fibSeq = [1, 1];
    for (let i = 0; i < input - 2; i++) {
        fibSeq.push((fibSeq[i])+fibSeq[i+1]);
    }
    return fibSeq[input-1];
};

// Do not edit below this line
module.exports = fibonacci;
