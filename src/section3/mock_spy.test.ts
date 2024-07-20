import { Calculator } from "./mock_spy";

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