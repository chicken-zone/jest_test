## spyOnを使用した関数のmock化

- 対象ファイル　mock_spy.test.ts

- オリジナルの関数を呼び出しつつ、その呼び出しを検証したいとき
- そのような場合には、jestのspyOn関数を使用して関数の呼び出しをスパイすることができます。
- スパイとは、ある関数の呼び出しを観察するためのツール
- SPYは、関数が何回、どの引数でどのような結果を返したかなどを追跡する

```
it("sumメソッドが呼び出される", () =>{
    // calculator classをインスタンス化
    const calculator = new Calculator();
    // jest.spyOnで第一引数にspyを作成したいメソッドを指定、第二引数にはspyを生成したいメソッドであるsumを指定
    const sumSpy = jest.spyOn(calculator, "sum");
    // オリジナルの関数を呼び出す
    const result = calculator.sum(1,2);
    // 結果
    expect(result).toBe(3);
    // スパイを設定したメソッドが一回だけ実行されたことを確認
    expect(sumSpy).toHaveBeenCalledTimes(1);
    // スパイを設定したメソッドが引数1と2で実行されたことが確認
    expect(sumSpy).toHaveBeenCalledWith(1,2);

    // 設定したスパイが他のテストに影響を与えないよう、テスト終了後はスパイを解除することが推奨さ
    sumSpy.mockRestore();
    
})
```
