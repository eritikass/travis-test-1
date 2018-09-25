const v = {
    a: 12345,
    b: 'kala',
    x: 'ertyuiop',
};

it('snapshot', () => {
    expect(v).toMatchSnapshot();
});