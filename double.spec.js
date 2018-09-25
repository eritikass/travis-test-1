const double = require("./double");

it('double of 1 is 2', () => {
    expect(double(1)).toBe(2);
});

it('double of 3 is 6', () => {
    expect(double(3)).toBe(6);
});