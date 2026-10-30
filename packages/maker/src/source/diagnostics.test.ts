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

import { expect, it } from "vitest";

import { MakerValidationError } from "../validation.js";
import {
  formatSourceDiagnostic,
  type SourceDiagnostic,
  SourceValidationError,
} from "./diagnostics.js";

it("renders exact ranges with CRLF context, tab alignment, and a corrective suggestion", () => {
  const text = "before\r\n\tvalue: 5,\r\nafter";
  const diagnostic: SourceDiagnostic = {
    code: "invalid",
    message: "Invalid value",
    path: ["items", 0],
    suggestion: "Choose another value.",
    source: {
      fileName: "authoring.ts",
      start: { offset: text.indexOf("5"), line: 2, column: 9 },
      end: { offset: text.indexOf("5") + 1, line: 2, column: 10 },
      precision: "exact",
    },
  };

  expect(formatSourceDiagnostic(diagnostic, text)).toBe(
    [
      "authoring.ts:2:9 [invalid] Invalid value",
      '  at $["items"][0]',
      "1 | before",
      "2 | \tvalue: 5,",
      "  | \t       ^",
      "3 | after",
      "Choose another value.",
    ].join("\n"),
  );
});

it("marks the first line of a multiline enclosing range and aligns a two-digit gutter", () => {
  const text =
    Array.from({ length: 8 }, (_, index) => `line${index + 1}`).join("\n") +
    "\n  value: {\n    nested: 5\n  }";
  const diagnostic: SourceDiagnostic = {
    code: "invalid",
    message: "Invalid configuration",
    path: ["value"],
    source: {
      fileName: "authoring.ts",
      start: { offset: text.indexOf("value"), line: 9, column: 3 },
      end: { offset: text.length, line: 11, column: 4 },
      precision: "enclosing",
    },
  };
  expect(formatSourceDiagnostic(diagnostic, text)).toBe(
    [
      "authoring.ts:9:3 [invalid] Invalid configuration",
      '  at $["value"]',
      " 8 | line8",
      " 9 |   value: {",
      "   |   ^^^^^^^^",
      "10 |     nested: 5",
    ].join("\n"),
  );
});

it("preserves the validation cause and issues while rendering ordered frames at file boundaries", () => {
  const cause = new MakerValidationError([
    { code: "invalid", message: "Invalid value", path: [] },
    { code: "unsupported", message: "Unsupported value", path: [] },
  ]);
  const diagnostics: SourceDiagnostic[] = cause.issues.map((issue) => ({
    ...issue,
    source: {
      fileName: "authoring.ts",
      start: { offset: 0, line: 1, column: 1 },
      end: { offset: 1, line: 1, column: 2 },
      precision: "exact",
    },
  }));
  const error = new SourceValidationError(diagnostics, "5", cause);
  expect(error).toBeInstanceOf(MakerValidationError);
  expect(error.name).toBe("SourceValidationError");
  expect(error.cause).toBe(cause);
  expect(error.issues).toEqual(cause.issues);
  expect(error.message).toBe(
    [
      "authoring.ts:1:1 [invalid] Invalid value",
      "1 | 5",
      "  | ^",
      "",
      "authoring.ts:1:1 [unsupported] Unsupported value",
      "1 | 5",
      "  | ^",
    ].join("\n"),
  );
});
