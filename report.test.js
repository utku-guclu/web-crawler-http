const { sortPages } = require("./report.js");
const { test, expect } = require("@jest/globals");

test("sortPages 2 pages", () => {
  const input = {
    "https://pisokrates.dev/path": 1,
    "https://pisokrates.dev": 3,
  };
  const actual = sortPages(input);
  const expected = [
    ["https://pisokrates.dev", 3],
    ["https://pisokrates.dev/path", 1],
  ];
  expect(actual).toEqual(expected);
});

test("sortPages 5 pages", () => {
  const input = {
    "https://pisokrates.dev/path": 1,
    "https://pisokrates.dev": 3,
    "https://pisokrates.dev/path2": 9,
    "https://pisokrates.dev/path3": 2,
    "https://pisokrates.dev/path4": 7,
  };
  const actual = sortPages(input);
  const expected = [
    ["https://pisokrates.dev/path2", 9],
    ["https://pisokrates.dev/path4", 7],
    ["https://pisokrates.dev", 3],
    ["https://pisokrates.dev/path3", 2],
    ["https://pisokrates.dev/path", 1],
  ];
  expect(actual).toEqual(expected);
});
