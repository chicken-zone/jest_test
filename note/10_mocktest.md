## mockテスト
- 対象ファイル　mock_func.test.ts

- jest.fn()は何も処理を行わない新しいモック関数を生成する
- mockFunc関数に何らかの処理を行わせたい場合、jest.fcの引数にコールバック関数を渡す事で引数に渡した関数がmock関数の動作として設定される
- はじめてのmockではmockfuncを呼び出すとHello mockが返される挙動になっている

- mock関数の動作を定義する別の方法として、mockImplementation関数を使用することもできる
- mockImplementationに渡した関数がmock関数の実装として使用される
- mockImplementationの挙動としては、jest.fn()の引数に関数を渡すのと同じだがmockImplementationを使うことで、はじめは空のモック関数として定義しておき後から実装を変更することも可能
