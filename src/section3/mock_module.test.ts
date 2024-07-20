import fs from "fs";
import { readFile } from "./mock_module";

// jest.mockはdescribeやit等の関数の中ではなくトップレベルで記述する必要がある
// モジュールのパスを引数に取り、モジュール全体を自動的にmock化する
jest.mock("fs");
const mockFs =jest.mocked(fs);
mockFs.readFileSync.mockReturnValue("dummy data");

it("readFileがデータを返却する", () =>{
    const result = readFile("path/dummy");
    expect(result).toBe("dummy data")
    expect(fs.readFileSync).toHaveBeenCalledTimes(1)
})