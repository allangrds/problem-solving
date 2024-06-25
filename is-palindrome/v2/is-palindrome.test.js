const isPalindrome = require("./index");

describe("isPalindrome v1", () => {
  test("should return false if value is null", () => {
    const res = isPalindrome(null);

    expect(res).toEqual(false);
  });

  test("should return false if value is undefined", () => {
    const res = isPalindrome(null);

    expect(res).toEqual(false);
  });

  test("should return false if value is 'asd'", () => {
    const res = isPalindrome('asd');

    expect(res).toEqual(false);
  });

  test("should return true if value is 'asa'", () => {
    const res = isPalindrome('asa');

    expect(res).toEqual(true);
  });

  test("should return true if value is 'ASA'", () => {
    const res = isPalindrome('ASA');

    expect(res).toEqual(true);
  });

  test("should return true if value is '@ASA_ASA@'", () => {
    const res = isPalindrome('@ASA_ASA@');

    expect(res).toEqual(true);
  });
});
