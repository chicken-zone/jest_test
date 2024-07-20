import axios from "axios";
import Users from "./practice";

// axiosmoduleのmock化
jest.mock("axios");
// axiosのgetメソッドの戻り値を設定
const mockAxios = jest.mocked(axios);

describe("Users", () => {
    // 各テストが実行される前にmock化したaxiosのgetメソッドの初期化
    // 戻り値を変更した場合でも他のテストが実行される前に初期状態に戻す
    beforeEach(() =>{
        mockAxios.get.mockClear();
    });



    it("ユーザーを取得できる", async () =>{
        // ユーザーデータを作成
        const users = [{ name:"Taro"},{name:"Hanako"}];
        // mock関数から返されるレスポンスを用意
        const resp = {data:users};
        mockAxios.get.mockResolvedValue(resp);

        
        const result = await Users.all();
        expect(result).toEqual(users);
        expect(mockAxios.get).toHaveBeenCalledWith("/users.json");
    })
})