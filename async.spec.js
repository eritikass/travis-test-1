
it('async', async () => {
    console.log('a');
    await new Promise(r => {
        setTimeout(() => {
            console.log('p1');
            expect(2).toBe(2);
            r();
        }, 1);
    });

    console.log('b');
    await new Promise(r => {
        setTimeout(() => {
            console.log('p2');
            expect(2).toBe(2);
            r();
        }, 1);
    });

    console.log('c');
    expect(1).toBe(1);

    await new Promise(r => {
        setTimeout(() => {
            console.log('p3');
            expect(2).toBe(2);
            r();
        }, 1);
    });

    console.log('d');
});