const v = {
    a: 12345,
    b: 'kala',
};

it('snapshot', () => {
    expect(v).toMatchSnapshot();
});