
// mock関数が呼び出されたかどうかを検証するテスト
it("モック関数が呼び出される", () => {
    const mockFunc = jest.fn();
    mockFunc();
    expect(mockFunc).toHaveBeenCalled();
});

// mock関数が何回呼び出されたかどうかを検証するテスト
it("モック関数が2回呼び出される", () => {
    const mockFunc = jest.fn();
    mockFunc();
    mockFunc();
    expect(mockFunc).toHaveBeenCalledTimes(2);
});

// mock関数が特定の引数で実行されたかどうかを検証するテスト
it("モック関数に引数hogeが渡される", () => {
    const mockFunc = jest.fn();
    mockFunc("hoge");
    expect(mockFunc).toHaveBeenCalledWith("hoge");
});