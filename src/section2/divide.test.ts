// toThrow
import { divide,ZeroDivisorError } from "./divide";

it("0で割るとエラーが発生する",()=>{
    expect(()=> divide(10,0)).toThrow();
    // このエラーメッセージ以外がthrowされた場合はテスト失敗
    expect(()=> divide(10,0)).toThrow("0で割ることはできません");
    // ZeroDivisorErrorが発生することを期待しその他のエラーがthrowされた場合はテスト失敗
    expect(()=> divide(10,0)).toThrow(ZeroDivisorError);
});