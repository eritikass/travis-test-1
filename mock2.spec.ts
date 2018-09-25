it('test mock return values', () => {
    const myMock = jest.fn();

    expect(myMock()).toBeUndefined();
    
    myMock
      .mockReturnValueOnce(10)
      .mockReturnValueOnce('x')
      .mockReturnValue(true);
    
    expect(myMock()).toBe(10);
    expect(myMock()).toBe('x');
    expect(myMock()).toBe(true);
    expect(myMock()).toBe(true);

    expect(myMock.mock.calls.length).toBe(5);
});