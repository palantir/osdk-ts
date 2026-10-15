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

import { describe, expect, it } from "vitest";

import { validateAndNormalizeFolderPath } from "./validateAndNormalizeFolderPath.js";

describe("validateAndNormalizeFolderPath", () => {
  const apiName = "com.palantir.Person";

  it.each([
    ["", "/"],
    ["/", "/"],
    ["///", "/"],
    ["a/b/", "/a/b"],
    ["/a//b///", "/a/b"],
    ["a", "/a"],
    [" .hidden /.../R&D\\Archive", "/ .hidden /.../R&D\\Archive"],
    ["日本語/é/🚀", "/日本語/é/🚀"],
  ])("canonicalizes %j to %j", (input, expected) => {
    const normalized = validateAndNormalizeFolderPath(
      input,
      "publicProject",
      apiName,
    );
    expect(normalized).toBe(expected);
    expect(
      validateAndNormalizeFolderPath(normalized, "publicProject", apiName),
    ).toBe(expected);
  });

  it.each([".", "..", "./a", "a/..", "a/./b", "a//../b"])(
    "rejects traversal in %j",
    (folder) => {
      expect(() =>
        validateAndNormalizeFolderPath(folder, "publicProject", apiName),
      ).toThrow(
        'Ontology entity "' +
          apiName +
          '": folder must not contain "." or ".." path segments',
      );
    },
  );

  it.each([null, 42])("rejects invalid folder %j", (folder) => {
    expect(() =>
      validateAndNormalizeFolderPath(
        folder as unknown as string,
        "publicProject",
        apiName,
      ),
    ).toThrow('Ontology entity "' + apiName + '": folder must be a string');
  });

  it.each(["a".repeat(700), "é".repeat(350), "🚀".repeat(175)])(
    "accepts a folder name at the UTF-8 byte limit",
    (name) => {
      // The limit applies to each name, not the complete path.
      expect(
        validateAndNormalizeFolderPath(
          name + "/" + name,
          "publicProject",
          apiName,
        ),
      ).toBe("/" + name + "/" + name);
      expect(() =>
        validateAndNormalizeFolderPath(name + "a", "publicProject", apiName),
      ).toThrow("folder name must be at most 700 UTF-8 bytes (got 701)");
    },
  );

  it.each(["\uD800", "\uDC00", "a\uD800b", "a\uDC00b"])(
    "rejects malformed Unicode in %j",
    (folder) => {
      expect(() =>
        validateAndNormalizeFolderPath(folder, "publicProject", apiName),
      ).toThrow("folder names must contain valid Unicode");
    },
  );
});
