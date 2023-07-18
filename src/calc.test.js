const { add, sub, times, divide, pow, sqrt, log10 } = require("./calc")

test("add 1 + 2 to be equal 3", ()=> {
    expect(add(1,2)).toBe(3);
});

test("sub 7 - 2 to be equal 5", ()=> {
    expect(sub(7,2)).toBe(5);
});

test("times 7 * 3 to be equal 21", ()=> {
    expect(times(7,3)).toBe(21);
});

test("divide 8 / 2 to be equal 4", ()=> {
    expect(divide(8,2)).toBe(4);
});

test("5 to the 2nd power to be equal 25", ()=> {
    expect(pow(5,2)).toBe(25);
});

test("root square from 9 to be equal 3", ()=> {
    expect(sqrt(9)).toBe(3);
});

test("log10 for 100 to be equal 2", ()=> {
    expect(log10(100)).toBe(2);
});
