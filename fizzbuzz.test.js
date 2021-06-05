// Testing Fizzbuzz

const fizzbuzz = require("./fizzbuzz");

describe("Testing on fizzbuzz", () => {
  test("should return 1", () => {
    expect(fizzbuzz(1)).toBe(1);
  });

  test("should return fizz when the number is multiple of 3", () => {
    expect(fizzbuzz(6)).toBe("fizz");
  });

  test("should return buzz when the number is multiple of 5", () => {
    expect(fizzbuzz(10)).toBe("buzz");
  });

  test("should return fizzbuzz when number is multiple of 3 and 5", () => {
    expect(fizzbuzz(15)).toBe("fizzbuzz");
  });

  test("should return 0", () => {
    expect(fizzbuzz(0)).toBe(0);
  });

  test("should return Error: the argument is not a number", () => {
    expect(fizzbuzz("12")).toBe("Error: the argument is not a number");
  });

  
});
