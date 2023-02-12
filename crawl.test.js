const { normalizeURL } = require("./crawl.js");
const { test, expect } = require("@jest/globals");

test("normalizeURL strip protocol", () => {
  const input = "https://blog.utku.dev/path/";
  const actual = normalizeURL(input);
  const expected = "blog.utku.dev/path";
  expect(actual).toEqual(expected);
});

test("normalizeURL strip trailing slash", () => {
  const input = "https://blog.utku.dev/path/";
  const actual = normalizeURL(input);
  const expected = "blog.utku.dev/path";
  expect(actual).toEqual(expected);
});

test("normalizeURL capitals", () => {
  const input = "https://BLOG.utku.dev/path/";
  const actual = normalizeURL(input);
  const expected = "blog.utku.dev/path";
  expect(actual).toEqual(expected);
});

test("normalizeURL capitals", () => {
  const input = "http://blog.utku.dev/path/";
  const actual = normalizeURL(input);
  const expected = "blog.utku.dev/path";
  expect(actual).toEqual(expected);
});
