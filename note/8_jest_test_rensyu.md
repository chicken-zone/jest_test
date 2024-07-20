## jest 演習
- 対象ファイル　practice.ts practice.test.ts
　
- ショッピングリストCLASSで商品を追加するメソッドと商品を削除するメソッドを持っている

- 演習
    - 3つのテストケースを作成
    - なお、必要に応じてテストをグループに分ける


## 回答

- describe("ShoppingList",()=>{}で全体のグループを作成
- let shoppingList: ShoppingList;でshoppinglistの変数を用意
- 各テストケースの前にshoppinglistクラスの新しいインスタンスを生成
```
    beforeEach(()=>{
        shoppingList = new ShoppingList();
    });
```
- 上記で準備が完了しテストケースを記述に移り

- 課題1の検証
- リストにアイテムが正しく追加されているかを確認
```
    describe("addItem",()=>{
        it("アイテムをリストに追加する", ()=>{
            shoppingList.addItem("apple");
            expect(shoppingList.list).toEqual(["apple"]);
        })       
    })
```

- 課題2と3のremoveItemメソッドの検証
- toContainは配列に引数の要素が存在するかを確認するmatcher関数となる
```
    describe("removeItem", () => {
        it("アイテムをリストから削除する", () => {
            shoppingList.addItem("apple");
            shoppingList.removeItem("apple");
            expect(shoppingList.list).not.toContain("apple");
    });

    it("リストにアイテムが存在しない場合はエラー",()=>{
        expect(() => shoppingList.removeItem("banana")).toThrow("アイテム: banana は存在しません")
    })

```
