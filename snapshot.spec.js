const v = {
    a: 12345,
    b: 'kala',
    x: 'ertyuiop',
};

const y = {
    a: 'dfjfdjsdjsdfj'
};


it('snapshot', () => {
    expect(v).toMatchSnapshot();
    expect('aaa').toMatchSnapshot();
    expect(y).toMatchSnapshot();
});