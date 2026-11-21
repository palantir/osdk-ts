/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import ts from "typescript";
import { expect, it } from "vitest";

import { locateSource } from "./mapping.js";

const text = `const config = <unknown>({
\tnested: { label: "😀", value: -5 },
  applied: width,
  shorthand,
  called: getWidth(),
  duplicate: 0, duplicate: 7,
  spreadAfter: { value: 1, ...other },
  spreadBefore: { ...other, value: 8 },
  computedAfter: { value: 1, [key]: false },
  computedBefore: { [key]: false, value: 9 },
  array: [1, , 3],
  beforeSpread: [4, ...items],
  afterSpread: [...items, 5],
  "quoted-key": { 0: "zero" },
} as const) satisfies unknown;`.replaceAll("\n", "\r\n");
const file = ts.createSourceFile(
  "authoring.ts",
  text,
  ts.ScriptTarget.Latest,
  true,
);
const statement = file.statements[0] as ts.VariableStatement;
const expression = statement.declarationList.declarations[0].initializer!;

it.each([
  { path: ["nested", "value"], highlight: "-5", precision: "exact" },
  { path: ["applied"], highlight: "width", precision: "enclosing" },
  {
    path: ["shorthand", "maximum"],
    highlight: "shorthand",
    precision: "enclosing",
  },
  {
    path: ["called", "maximum"],
    highlight: "getWidth()",
    precision: "enclosing",
  },
  { path: ["duplicate"], highlight: "7", precision: "exact" },
  {
    path: ["spreadAfter", "value"],
    highlight: "{ value: 1, ...other }",
    precision: "enclosing",
  },
  { path: ["spreadBefore", "value"], highlight: "8", precision: "exact" },
  {
    path: ["computedAfter", "value"],
    highlight: "{ value: 1, [key]: false }",
    precision: "enclosing",
  },
  { path: ["computedBefore", "value"], highlight: "9", precision: "exact" },
  { path: ["array", 1], highlight: "[1, , 3]", precision: "enclosing" },
  { path: ["beforeSpread", 0], highlight: "4", precision: "exact" },
  {
    path: ["afterSpread", 1],
    highlight: "[...items, 5]",
    precision: "enclosing",
  },
  {
    path: ["nested", "missing"],
    highlight: '{ label: "😀", value: -5 }',
    precision: "enclosing",
  },
  { path: ["quoted-key", "0"], highlight: '"zero"', precision: "exact" },
])(
  "locates $path as $precision at $highlight",
  ({ path, highlight, precision }) => {
    const source = locateSource(file, expression, path);
    expect(text.slice(source.start.offset, source.end.offset)).toBe(highlight);
    expect(source).toMatchObject({ fileName: "authoring.ts", precision });
  },
);

it("preserves UTF-16 offsets and one-based positions through wrappers, CRLF, and tabs", () => {
  const source = locateSource(file, expression, ["nested", "value"]);
  const offset = text.indexOf("-5");
  expect(source.start).toEqual({ offset, line: 2, column: 32 });
  expect(source.end).toEqual({ offset: offset + 2, line: 2, column: 34 });
});
