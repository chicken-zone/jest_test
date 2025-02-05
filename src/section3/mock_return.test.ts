it("モック関数に戻り値を設置する",()=>{
    const mockFunc = jest.fn();
    mockFunc.mockReturnValue("Mock return value");
    expect(mockFunc()).toBe("Mock return value");
    expect(mockFunc()).toBe("Mock return value");
    expect(mockFunc()).toBe("Mock return value");
});


it("モック関数に一度だけ返される戻り値を設置する",()=>{
    const mockFunc = jest.fn();
    mockFunc.mockReturnValueOnce("Mock return value");
    expect(mockFunc()).toBe("Mock return value");
    expect(mockFunc()).toBe(undefined);
});

it("モック関数に非同期な戻り値を設定する", async () => {
    const mockFunc = jest.fn();
    mockFunc.mockResolvedValue("Resolved value");
    const result = await mockFunc();
    expect(result).toBe("Resolved value");
});