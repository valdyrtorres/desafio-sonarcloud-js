function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function times(a, b) {
    return a * b;
}

function divide(a, b) {
    return a/b;
}

function pow(a, b) {
    return Math.pow(a, b)
}

function sqrt(a) {
    return Math.sqrt(a);
}

function log10(a) {
    return Math.log10(a);
}

module.exports = { add, sub, times, divide, pow, sqrt, log10 }