const { normalizeURL, getURLsFromHTML } = require("./crawl.js");
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

test("getURLsFromHTML absolute", () => {
  const inputHTMLBody = `
    <html>
      <body>
        <a href="https://blog.utku.dev/path">
          Utku.dev Blog
        </a>
      </body>
    </html>
  `;
  const inputBaseURL = "https://blog.utku.dev/path";
  const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL);
  const expected = ["https://blog.utku.dev/path"];
  expect(actual).toEqual(expected);
});

test("getURLsFromHTML relative", () => {
  const inputHTMLBody = `
    <html>
      <body>
        <a href="/path/">
          Utku.dev Blog
        </a>
      </body>
    </html>
  `;
  const inputBaseURL = "https://blog.utku.dev";
  const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL);
  const expected = ["https://blog.utku.dev/path/"];
  expect(actual).toEqual(expected);
});

test("getURLsFromHTML both", () => {
  const inputHTMLBody = `
    <html>
      <body>
        <a href="https://blog.utku.dev/path1/">
          Utku.dev Blog Path One
        </a>
        <a href="/path2/">
          Utku.dev Blog Path Two
        </a>
      </body>
    </html>
  `;
  const inputBaseURL = "https://blog.utku.dev";
  const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL);
  const expected = [
    "https://blog.utku.dev/path1/",
    "https://blog.utku.dev/path2/",
  ];
  expect(actual).toEqual(expected);
});

test("getURLsFromHTML relative", () => {
  const inputHTMLBody = `
    <html>
      <body>
        <a href="invalid">
          Invalid URL
        </a>
      </body>
    </html>
  `;
  const inputBaseURL = "https://blog.utku.dev";
  const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL);
  const expected = [];
  expect(actual).toEqual(expected);
});
