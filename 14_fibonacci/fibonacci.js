const fibonacci = function(index) {
    if (typeof index !== "number") {
        index = Number(index);
    }

    if (index < 0) {
        return "OOPS";
    }

    if (index === 0) {
        return 0;
    }

    let first = 0;
    let second = 1;
    for (let i = 1; i < index; i++) {
        output = first + second;
        first = second;
        second = output;
    }
    return second;
};

// Do not edit below this line
module.exports = fibonacci;
