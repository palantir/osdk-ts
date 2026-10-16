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

import {
  buildFolderTree,
  validateAndNormalizeFolderPath,
} from "./foldersUtil.js";

describe("validateAndNormalizeFolderPath", () => {
  const apiName = "com.palantir.Person";

  it("preserves an omitted folder without requiring project permissions", () => {
    expect(
      validateAndNormalizeFolderPath(undefined, undefined, apiName),
    ).toBeUndefined();
    expect(
      validateAndNormalizeFolderPath(undefined, "roles", apiName),
    ).toBeUndefined();
  });

  it.each([
    undefined,
    "roles",
    { type: "ontologyPackage", ontologyPackageRid: "ri.ontology..package" },
  ] as const)(
    "requires explicit publicProject permission instead of %j",
    (permission) => {
      expect(() =>
        validateAndNormalizeFolderPath("", permission, apiName),
      ).toThrow(
        'folder placement requires permission to be explicitly set to "publicProject"',
      );
    },
  );

  it("validates value type paths without an ontology permission setting", () => {
    expect(
      validateAndNormalizeFolderPath("a//b/", undefined, apiName, false),
    ).toBe("/a/b");
    expect(() =>
      validateAndNormalizeFolderPath("a/../b", undefined, apiName, false),
    ).toThrow('folder must not contain "." or ".." path segments');
  });

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

describe("buildFolderTree", () => {
  const randomnessKey = "123e4567-e89b-12d3-a456-426614174000";

  it("creates shared ancestors once and records parents before children", () => {
    const folders = buildFolderTree(
      ["/a/b", "/a/c", "/a/b", "/a", "/d/b", "/"],
      randomnessKey,
    );

    expect(
      folders.map(({ path, name, parentPath }) => ({
        path,
        name,
        parentPath,
      })),
    ).toEqual([
      { path: "/a", name: "a", parentPath: "/" },
      { path: "/a/b", name: "b", parentPath: "/a" },
      { path: "/a/c", name: "c", parentPath: "/a" },
      { path: "/d", name: "d", parentPath: "/" },
      { path: "/d/b", name: "b", parentPath: "/d" },
    ]);
    expect(new Set(folders.map((folder) => folder.outputShapeId)).size).toBe(
      folders.length,
    );
    expect(new Set(folders.map((folder) => folder.blockIdentifier)).size).toBe(
      folders.length,
    );
  });

  it("uses the existing installation root without generating a folder", () => {
    expect(buildFolderTree([])).toEqual([]);
    expect(buildFolderTree(["/", "/"])).toEqual([]);
  });

  it("keeps IDs stable when placements are reordered, repeated, or extended", () => {
    const original = buildFolderTree(["/a/b", "/c"], randomnessKey);
    expect(buildFolderTree(["/c", "/a/b", "/a/b"], randomnessKey)).toEqual(
      original,
    );

    const extended = buildFolderTree(["/a/b", "/a/d", "/c"], randomnessKey);
    for (const folder of original) {
      expect(
        extended.find((candidate) => candidate.path === folder.path),
      ).toEqual(folder);
    }
  });

  it("scopes block and shape IDs using the bundle randomness key", () => {
    const first = buildFolderTree(["/a/b"], randomnessKey);
    const second = buildFolderTree(
      ["/a/b"],
      "123e4567-e89b-12d3-a456-426614174001",
    );
    for (const [index, folder] of first.entries()) {
      expect(second[index].outputReadableId).toBe(folder.outputReadableId);
      expect(second[index].outputShapeId).not.toBe(folder.outputShapeId);
      expect(second[index].blockIdentifier).not.toBe(folder.blockIdentifier);
    }
    expect(buildFolderTree(["/a/b"])).toEqual(buildFolderTree(["/a/b"]));
  });

  it("uses full paths for identity and preserves folder names", () => {
    const folders = buildFolderTree([
      "/a-b",
      "/a/b",
      "/ Sales /日本語\\Archive",
    ]);
    expect(
      folders.find((folder) => folder.path === "/ Sales /日本語\\Archive"),
    ).toMatchObject({ name: "日本語\\Archive", parentPath: "/ Sales " });
    expect(
      folders.find((folder) => folder.path === "/a-b")?.outputShapeId,
    ).not.toBe(folders.find((folder) => folder.path === "/a/b")?.outputShapeId);
    for (const folder of folders) {
      expect(folder.blockIdentifier).toMatch(/^folder-[a-f0-9-]+$/u);
    }
  });
});
