/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import fs from "fs";
import { expect, test, vi } from "vitest";
import { extractBuildOutputs } from "../extractBuildOutputs.js";

vi.mock("fs");

const EXAMPLE_HTML = `
<!DOCTYPE html>
<html>
<head>
    <script src="/script1.js" type="text/javascript"></script>
    <script type="module" src="/script2.js"></script>
    <link rel="stylesheet" href="/styles.css">
    <link rel="stylesheet" href="/more-styles.css">
</head>
<body>
    <script src="/script3.js" type="text/javascript"></script>
</body>
</html>
`;

test("extractBuildOutputs with scripts and stylesheets", () => {
  vi.mocked(fs.readFileSync).mockReturnValue(EXAMPLE_HTML);
  const result = extractBuildOutputs("dummy/path.html");
  expect(result).toEqual({
    scripts: [
      { type: "script", scriptType: "text/javascript", src: "/script1.js" },
      { type: "script", scriptType: "module", src: "/script2.js" },
      { type: "script", scriptType: "text/javascript", src: "/script3.js" },
    ],
    stylesheets: ["/styles.css", "/more-styles.css"],
  });
});

test("extractBuildOutputs with no scripts or stylesheets", () => {
  vi.mocked(fs.readFileSync).mockReturnValue("<html><body></body></html>");
  const result = extractBuildOutputs("dummy/path.html");
  expect(result).toEqual({
    scripts: [],
    stylesheets: [],
  });
});

test("extractBuildOutputs throws error for inline scripts", () => {
  vi.mocked(fs.readFileSync).mockReturnValue(`
    <html>
      <body>
        <script>console.log("inline");</script>
      </body>
    </html>
  `);
  expect(() => extractBuildOutputs("dummy/path.html")).toThrow(
    "Unexpected inline content found in Vite HTML output",
  );
});

test("extractBuildOutputs throws error for invalid script type", () => {
  vi.mocked(fs.readFileSync).mockReturnValue(`
    <html>
      <head>
        <script src="/script.js" type="text/unknown"></script>
      </head>
    </html>
  `);
  expect(() => extractBuildOutputs("dummy/path.html")).toThrow(
    "Invalid script type attribute found in Vite HTML output: text/unknown",
  );
});

test("extractBuildOutputs throws error for unexpected attributes", () => {
  vi.mocked(fs.readFileSync).mockReturnValue(`
    <html>
      <head>
        <script src="/script.js" type="module" async></script>
      </head>
    </html>
  `);
  expect(() => extractBuildOutputs("dummy/path.html")).toThrow(
    "Unexpected async attribute found in Vite HTML output",
  );
});

test("extractBuildOutputs throws error for stylesheet without href", () => {
  vi.mocked(fs.readFileSync).mockReturnValue(`
    <html>
      <head>
        <link rel="stylesheet">
      </head>
    </html>
  `);
  expect(() => extractBuildOutputs("dummy/path.html")).toThrow(
    "Missing href attribute in Vite HTML output",
  );
});

test("extractBuildOutputs ignores non-stylesheet links", () => {
  vi.mocked(fs.readFileSync).mockReturnValue(`
    <html>
      <head>
        <link rel="icon" href="/favicon.ico">
        <link rel="stylesheet" href="/styles.css">
      </head>
    </html>
  `);
  const result = extractBuildOutputs("dummy/path.html");
  expect(result).toEqual({
    scripts: [],
    stylesheets: ["/styles.css"],
  });
});
