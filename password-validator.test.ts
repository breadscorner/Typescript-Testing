import { expect, test, describe } from "bun:test";
import { passwordValidator } from "./password-validator";

// Try to be consistent with your test descriptions
// Things that work versus things that don't work

describe("passwordValidator", () => {
  test("given an empty string returns false", () => {
    const result = passwordValidator("");
    const expected = false;

    expect(result).toBe(expected);
  });
  test("given a string less than 8 characters, return false", () => {
    const result = passwordValidator("1234");
    const expected = false;

    expect(result).toBe(expected);
  });
  test("returns false when pass does not contain a number", () => {
    const result = passwordValidator("abcdefgh!");
    const expected = false;

    expect(result).toBe(expected);
  });
  test("returns when pass does not contain a special character", () => {
    const result = passwordValidator("abcdefgh34");
    const expected = false;

    expect(result).toBe(expected);
  });
  test("pass with a number, more than 8 characters, and a special character, and a number returns true", () => {
    const expected = true;

    expect(passwordValidator("abcdefgh38!")).toBe(expected);
    expect(passwordValidator("p@ssw0rds")).toBe(expected);
    expect(passwordValidator("abc123#df")).toBe(expected);
  });
  test("given a valid password with a space in it, returns true", () => {
    expect(passwordValidator("abc 123#df")).toBe(true);
  });
});
