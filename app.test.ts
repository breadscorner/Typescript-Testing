import { expect, test, describe } from "bun:test";
import { addNumbers } from "./app";

// const result = addNumbers(1, 2); // 3

// if (result === 3) {
//     console.log('Test passed');
// } else {
//   throw Error('Test failed');
// }

describe("addNumbers", () => {
  test("add numbers return 3, given 1, 2", () => {
    const result = addNumbers(1, 2);
    const expected = 3;

    expect(result).toBe(expected);
  });
  test("add numbers return 5, given 2, 3", () => {
    const result = addNumbers(2, 3);
    const expected = 5;

    expect(result).toBe(expected);
  });
  test("add numbers return 0, given 0, 0", () => {
    const result = addNumbers(0, 0);
    const expected = 0;

    expect(result).toBe(expected);
  });

  test("add numbers return -1, given -2, 1", () => {
    const result = addNumbers(-2, 1);
    const expected = -1;

    expect(result).toBe(expected);
  });

  test("add numbers return 10, given 5, 5", () => {
    const result = addNumbers(5, 5);
    const expected = 10;

    expect(result).toBe(expected);
  });

  test("add numbers return 100, given 50, 50", () => {
    const result = addNumbers(50, 50);
    const expected = 100;

    expect(result).toBe(expected);
  });
});
