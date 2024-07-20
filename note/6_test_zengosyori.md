## テストの前後処理
- 対象ファイル setup_teardown.test.ts

- セットアップやクリーンアップとは

- 例として、データベースを用いたテスト
    - データベースを用いたテストを実施するには、テスト実行前にデータベースとの接続やテストに必要なデータの準備が必要
    - また、テスト終了後には、他のテストに影響を与えないよう、データを元の状態に戻したり、データベースとの接続を切断するなどの処理が求められる
    - これらの処理は多くのテストで共通する部分で、すべてのテストで同様の処理を何度も書くのは効率が悪いだけではなく、メンテナンス性も低下
    - そこでjestではbeforeall、beforeeach、aftereach、afterallという4つの関数を用いてこれらの問題を解決する

- outer testは単なるコンソール出力を行うテストが定義されている

- テスト結果
    - まず外側のdescribeが全テストの前に実行される為、outer beforeAllが出力される
    - 外側のdescribeに記述されたテストケース2つに対してそれぞれ実行前後にbeforeEachとafterEachが実行されている
    - 外側のdescribe直下のテストケースは終了しているがdescribeが入れ子となっている為、afterAllは実行されず、内側のdescribeのinner beforeAllが実行される
    - describeが入れ子となっている為、内側のdescribeのテスト前後にも外側のbeforeEachとafterEachが適用される
    - 全てのテストが実行された後にouter afterAllが実行される

```
(base) PS C:\Users\81901\projects\udemy\flontend\shinozaki\testing\jest-lesson> yarn test src/section2/setup_teardown.test.ts
yarn run v1.22.19
$ jest src/section2/setup_teardown.test.ts
  console.log
    outer beforeAll

      at Object.<anonymous> (src/section2/setup_teardown.test.ts:16:13)

  console.log
    outer beforeEach

      at Object.<anonymous> (src/section2/setup_teardown.test.ts:8:13)

  console.log
    outer test 1

      at Object.<anonymous> (src/section2/setup_teardown.test.ts:24:13)

  console.log
    outer afterEach

      at Object.<anonymous> (src/section2/setup_teardown.test.ts:12:13)

  console.log
    outer beforeEach

      at Object.<anonymous> (src/section2/setup_teardown.test.ts:8:13)

  console.log
    outer test 2

      at Object.<anonymous> (src/section2/setup_teardown.test.ts:28:13)

  console.log
    outer afterEach

      at Object.<anonymous> (src/section2/setup_teardown.test.ts:12:13)

  console.log
    inner beforeAll

      at Object.<anonymous> (src/section2/setup_teardown.test.ts:41:15)

  console.log
    outer beforeEach

      at Object.<anonymous> (src/section2/setup_teardown.test.ts:8:13)

  console.log
    inner beforeEach

      at Object.<anonymous> (src/section2/setup_teardown.test.ts:33:15)

  console.log
    inner test 1

      at Object.<anonymous> (src/section2/setup_teardown.test.ts:49:15)

  console.log
    inner afterEach

      at Object.<anonymous> (src/section2/setup_teardown.test.ts:37:15)

  console.log
    outer afterEach

      at Object.<anonymous> (src/section2/setup_teardown.test.ts:12:13)

  console.log
    outer beforeEach

      at Object.<anonymous> (src/section2/setup_teardown.test.ts:8:13)

  console.log
    inner beforeEach

      at Object.<anonymous> (src/section2/setup_teardown.test.ts:33:15)

  console.log
    inner test 2

      at Object.<anonymous> (src/section2/setup_teardown.test.ts:53:15)

  console.log
    inner afterEach

      at Object.<anonymous> (src/section2/setup_teardown.test.ts:37:15)

  console.log
    outer afterEach

      at Object.<anonymous> (src/section2/setup_teardown.test.ts:12:13)

  console.log
    inner afterAll

      at Object.<anonymous> (src/section2/setup_teardown.test.ts:45:15)

  console.log
    outer afterAll

      at Object.<anonymous> (src/section2/setup_teardown.test.ts:20:13)

 PASS  src/section2/setup_teardown.test.ts
  outer describe block
    √ outer test 1 (12 ms)
    √ outer test 2 (13 ms)
    inner describe block
      √ inner test 1 (12 ms)
      √ inner test 2 (11 ms)

Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        1.785 s
Ran all test suites matching /src\\section2\\setup_teardown.test.ts/i.
Done in 2.61s.
```