import { isValidEmail } from "../utils/validation";
import { invalidEmailList, validEmailList } from "./patterns";

describe("isValidEmail関数のテスト", () => {
  validEmailList.forEach((email) => {
    it(`${email}を入力するとtrueになる`, () => {
      expect(isValidEmail(email)).toBe(true);
    });
  });

  invalidEmailList.forEach((email) => {
    it(`${email}を入力するとfalseになる`, () => {
      expect(isValidEmail(email)).toBe(false);
    });
  });
});
