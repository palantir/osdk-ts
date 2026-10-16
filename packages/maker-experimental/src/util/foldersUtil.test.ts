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

import * as fs from "node:fs/promises";
import * as os from "node:os";
import * as nodePath from "node:path";

import type { Folder } from "@osdk/maker";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

import type { BlockDataAddOn } from "../cli/marketplaceSerialization/BlockGeneratorResult.js";
import { toBlockShapeId } from "../cli/marketplaceSerialization/CodeBlockSpec.js";
import {
  buildFolderTree,
  generateFolderBlockResults,
  validateAndNormalizeFolderPath,
} from "./foldersUtil.js";
import { ReadableIdGenerator } from "./generateRid.js";

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
        validateAndNormalizeFolderPath(
          { id: "people", location: "/people" },
          permission,
          apiName,
        ),
      ).toThrow(
        'folder placement requires permission to be explicitly set to "publicProject"',
      );
    },
  );

  it.each([
    ["a/b/", "/a/b"],
    ["/a//b///", "/a/b"],
    ["a", "/a"],
    [" .hidden /.../R&D\\Archive", "/ .hidden /.../R&D\\Archive"],
    ["日本語/é/🚀", "/日本語/é/🚀"],
  ])("canonicalizes %j to %j", (input, expected) => {
    const normalized = validateAndNormalizeFolderPath(
      { id: "folder", location: input },
      "publicProject",
      apiName,
    );
    expect(normalized).toBe(expected);
    expect(
      validateAndNormalizeFolderPath(
        { id: "folder", location: normalized! },
        "publicProject",
        apiName,
      ),
    ).toBe(expected);
  });

  it.each([".", "..", "./a", "a/..", "a/./b", "a//../b"])(
    "rejects traversal in %j",
    (folder) => {
      expect(() =>
        validateAndNormalizeFolderPath(
          { id: "folder", location: folder },
          "publicProject",
          apiName,
        ),
      ).toThrow(
        'Ontology entity "' +
          apiName +
          '": folder must not contain "." or ".." path segments',
      );
    },
  );

  it.each([null, 42, "", "/", "/people"])(
    "rejects invalid folder %j",
    (folder) => {
      expect(() =>
        validateAndNormalizeFolderPath(
          folder as unknown as Folder,
          "publicProject",
          apiName,
        ),
      ).toThrow(
        'Ontology entity "' +
          apiName +
          '": folder must be an object with id and location',
      );
    },
  );

  it("normalizes the location without modifying an explicit identity or the caller's definition", () => {
    const folder = Object.freeze({ id: "fish", location: "Aquarium//Fish/" });
    expect(
      validateAndNormalizeFolderPath(folder, "publicProject", apiName),
    ).toBe("/Aquarium/Fish");
    expect(folder).toEqual({ id: "fish", location: "Aquarium//Fish/" });
  });

  it.each([
    {
      folder: { id: "", location: "/a" },
      error: "folder id must be a non-empty string",
    },
    {
      folder: { id: " ", location: "/a" },
      error: "folder id must be a non-empty string",
    },
    {
      folder: { location: "/a" },
      error: "folder id must be a non-empty string",
    },
    {
      folder: { id: "\uD800", location: "/a" },
      error: "folder id must contain valid Unicode",
    },
    { folder: { id: "fish" }, error: "folder location must be a string" },
    {
      folder: { id: "fish", location: "/a/../b" },
      error: 'folder must not contain "." or ".." path segments',
    },
    {
      folder: { id: "root", location: "/" },
      error: "the installation root cannot be assigned a folder id",
    },
    {
      folder: { id: "root", location: "" },
      error: "the installation root cannot be assigned a folder id",
    },
  ])("rejects invalid explicit folder $folder", ({ folder, error }) => {
    expect(() =>
      validateAndNormalizeFolderPath(
        folder as Folder,
        "publicProject",
        apiName,
      ),
    ).toThrow(error);
  });

  it("requires publicProject permission for explicit folder identities", () => {
    expect(() =>
      validateAndNormalizeFolderPath(
        { id: "fish", location: "/Aquarium/Fish" },
        undefined,
        apiName,
      ),
    ).toThrow(
      'folder placement requires permission to be explicitly set to "publicProject"',
    );
  });

  it.each(["a".repeat(700), "é".repeat(350), "🚀".repeat(175)])(
    "accepts a folder name at the UTF-8 byte limit",
    (name) => {
      // The limit applies to each name, not the complete path.
      expect(
        validateAndNormalizeFolderPath(
          { id: "folder", location: name + "/" + name },
          "publicProject",
          apiName,
        ),
      ).toBe("/" + name + "/" + name);
      expect(() =>
        validateAndNormalizeFolderPath(
          { id: "folder", location: name + "a" },
          "publicProject",
          apiName,
        ),
      ).toThrow("folder name must be at most 700 UTF-8 bytes (got 701)");
    },
  );

  it.each(["\uD800", "\uDC00", "a\uD800b", "a\uDC00b"])(
    "rejects malformed Unicode in %j",
    (folder) => {
      expect(() =>
        validateAndNormalizeFolderPath(
          { id: "folder", location: folder },
          "publicProject",
          apiName,
        ),
      ).toThrow("folder names must contain valid Unicode");
    },
  );
});

describe("generateFolderBlockResults", () => {
  let buildDir: string;
  const randomnessKey = "123e4567-e89b-12d3-a456-426614174000";

  beforeEach(async () => {
    buildDir = await fs.mkdtemp(
      nodePath.join(os.tmpdir(), "maker-compass-folders-"),
    );
  });

  afterEach(async () => {
    await fs.rm(buildDir, { recursive: true, force: true });
  });

  it("writes Compass v1 blocks with parent mappings and installation-root fallback", async () => {
    const outputFolders = {
      [ReadableIdGenerator.getForObjectType("First")]: {
        id: "/a/b/c",
        location: "/a/b/c",
      },
      [ReadableIdGenerator.getForObjectType("Second")]: {
        id: "/a/d",
        location: "/a/d",
      },
      [ReadableIdGenerator.getForObjectType("Third")]: {
        id: "/a/b/c",
        location: "/a/b/c",
      },
      [ReadableIdGenerator.getForObjectType("Root")]: {
        id: "/",
        location: "/",
      },
    };
    const folders = buildFolderTree(
      Object.values(outputFolders),
      randomnessKey,
    );
    const results = await generateFolderBlockResults(
      outputFolders,
      buildDir,
      randomnessKey,
    );
    expect(results).toHaveLength(4);

    for (const [index, folder] of folders.entries()) {
      const result = results[index];
      expect(result.block_identifier).toBe(folder.blockIdentifier);
      expect(result.block_type).toBe("COMPASS");
      expect(nodePath.isAbsolute(result.block_data_directory)).toBe(true);
      expect(await fs.readdir(result.block_data_directory)).toEqual([
        "VERSION",
      ]);
      expect(
        await fs.readFile(
          nodePath.join(result.block_data_directory, "VERSION"),
          "utf-8",
        ),
      ).toBe('"v1"');
      expect(result.outputs).toEqual({
        [folder.outputReadableId]: {
          type: "compassResource",
          compassResource: {
            about: {
              fallbackTitle: folder.name,
              fallbackDescription: folder.location,
              localizedTitle: {},
              localizedDescription: {},
            },
            type: { type: "compassFolderType", compassFolderType: {} },
          },
        },
      });
      const addOn = result.add_on_override as BlockDataAddOn;
      expect(addOn.idToBlockShapeId["compass-folder"]).toBe(
        folder.outputShapeId,
      );
      expect(addOn.idToInputGroupId).toEqual({});

      if (folder.parentLocation === "/") {
        expect(result.inputs).toEqual({});
        expect(result.input_mapping_entries).toEqual([]);
        expect(result.input_shape_metadata).toEqual({});
        expect(addOn.outputToLocationInput).toEqual({});
      } else {
        const parent = folders.find(
          (candidate) => candidate.location === folder.parentLocation,
        )!;
        const inputId = ReadableIdGenerator.getForCompassFolder(
          folder.parentLocation,
        );
        expect(result.inputs[inputId]).toMatchObject({
          type: "compassResource",
          compassResource: {
            allowedTypes: [
              { type: "compassFolderType", compassFolderType: {} },
            ],
            typeConstraints: [
              {
                type: "compassFolderTypeConstraints",
                compassFolderTypeConstraints: {
                  constraints: ["INSTALL_LOCATION"],
                },
              },
            ],
          },
        });
        expect(result.input_shape_metadata[inputId]).toEqual({
          isOptional: false,
          isAccessedInReconcile: true,
          reconcileAccessRequirements: "RESOURCE_EXISTENCE_REQUIRED",
        });
        expect(result.input_mapping_entries).toEqual([
          {
            input: inputId,
            output: parent.outputReadableId,
          },
        ]);
        expect(addOn.outputToLocationInput).toEqual({
          [folder.outputShapeId]: inputId,
        });
        expect(addOn.idToBlockShapeId[inputId]).toBe(
          toBlockShapeId(inputId, randomnessKey),
        );
      }
    }

    expect(results[1].inputs).toEqual(results[3].inputs);
    expect(results[1].input_mapping_entries).toEqual(
      results[3].input_mapping_entries,
    );
    expect(
      await generateFolderBlockResults(outputFolders, buildDir, randomnessKey),
    ).toEqual(results);
  });

  it("does not emit blocks or files for root-only placement", async () => {
    expect(
      await generateFolderBlockResults(
        {
          [ReadableIdGenerator.getForObjectType("Root")]: {
            id: "/",
            location: "/",
          },
        },
        buildDir,
      ),
    ).toEqual([]);
    expect(await fs.readdir(buildDir)).toEqual([]);
  });

  it("preserves folder outputs and parent references when explicitly identified folders move and rename", async () => {
    const generate = (parentLocation: string, childLocation: string) =>
      generateFolderBlockResults(
        {
          [ReadableIdGenerator.getForInterface("Aquarium")]: {
            id: "aquarium",
            location: parentLocation,
          },
          [ReadableIdGenerator.getForObjectType("Fish")]: {
            id: "fish",
            location: childLocation,
          },
        },
        buildDir,
        randomnessKey,
      );
    const before = await generate("/Old/Aquarium", "/Old/Aquarium/Fish");
    const after = await generate("/New/Habitats", "/New/Habitats/Animals");
    for (const [id, name, location] of [
      ["aquarium", "Habitats", "/New/Habitats"],
      ["fish", "Animals", "/New/Habitats/Animals"],
    ]) {
      const outputId = ReadableIdGenerator.getForCompassFolderOutput(id);
      const previous = before.find((block) => block.outputs[outputId])!;
      const next = after.find((block) => block.outputs[outputId])!;
      expect(next.block_identifier).toBe(previous.block_identifier);
      expect(next.block_data_directory).toBe(previous.block_data_directory);
      expect(
        (next.add_on_override as BlockDataAddOn).idToBlockShapeId[
          "compass-folder"
        ],
      ).toBe(
        (previous.add_on_override as BlockDataAddOn).idToBlockShapeId[
          "compass-folder"
        ],
      );
      expect(next.outputs[outputId]).toMatchObject({
        compassResource: {
          about: { fallbackTitle: name, fallbackDescription: location },
        },
      });
      const parentId = id === "fish" ? "aquarium" : "/New";
      expect(next.input_mapping_entries).toEqual([
        {
          input: ReadableIdGenerator.getForCompassFolder(parentId),
          output: ReadableIdGenerator.getForCompassFolderOutput(parentId),
        },
      ]);
    }
  });
});

describe("buildFolderTree", () => {
  const randomnessKey = "123e4567-e89b-12d3-a456-426614174000";

  it("creates shared ancestors once and records parents before children", () => {
    const folders = buildFolderTree(
      ["/a/b", "/a/c", "/a/b", "/a", "/d/b", "/"].map((location) => ({
        id: location,
        location,
      })),
      randomnessKey,
    );

    expect(
      folders.map(({ location, name, parentLocation }) => ({
        location,
        name,
        parentLocation,
      })),
    ).toEqual([
      { location: "/a", name: "a", parentLocation: "/" },
      { location: "/a/b", name: "b", parentLocation: "/a" },
      { location: "/a/c", name: "c", parentLocation: "/a" },
      { location: "/d", name: "d", parentLocation: "/" },
      { location: "/d/b", name: "b", parentLocation: "/d" },
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
    expect(
      buildFolderTree(
        ["/", "/"].map((location) => ({ id: location, location })),
      ),
    ).toEqual([]);
  });

  it("keeps IDs stable when placements are reordered, repeated, or extended", () => {
    const original = buildFolderTree(
      ["/a/b", "/c"].map((location) => ({ id: location, location })),
      randomnessKey,
    );
    expect(
      buildFolderTree(
        ["/c", "/a/b", "/a/b"].map((location) => ({ id: location, location })),
        randomnessKey,
      ),
    ).toEqual(original);

    const extended = buildFolderTree(
      ["/a/b", "/a/d", "/c"].map((location) => ({ id: location, location })),
      randomnessKey,
    );
    for (const folder of original) {
      expect(
        extended.find((candidate) => candidate.location === folder.location),
      ).toEqual(folder);
    }
  });

  it("scopes block and shape IDs using the bundle randomness key", () => {
    const first = buildFolderTree(
      [{ id: "/a/b", location: "/a/b" }],
      randomnessKey,
    );
    const second = buildFolderTree(
      [{ id: "/a/b", location: "/a/b" }],
      "123e4567-e89b-12d3-a456-426614174001",
    );
    for (const [index, folder] of first.entries()) {
      expect(second[index].outputReadableId).toBe(folder.outputReadableId);
      expect(second[index].outputShapeId).not.toBe(folder.outputShapeId);
      expect(second[index].blockIdentifier).not.toBe(folder.blockIdentifier);
    }
    expect(buildFolderTree([{ id: "/a/b", location: "/a/b" }])).toEqual(
      buildFolderTree([{ id: "/a/b", location: "/a/b" }]),
    );
  });

  it("supports location-shaped identities and preserves folder names", () => {
    const folders = buildFolderTree(
      ["/a-b", "/a/b", "/ Sales /日本語\\Archive"].map((location) => ({
        id: location,
        location,
      })),
    );
    expect(
      folders.find((folder) => folder.location === "/ Sales /日本語\\Archive"),
    ).toMatchObject({ name: "日本語\\Archive", parentLocation: "/ Sales " });
    expect(
      folders.find((folder) => folder.location === "/a-b")?.outputShapeId,
    ).not.toBe(
      folders.find((folder) => folder.location === "/a/b")?.outputShapeId,
    );
    for (const folder of folders) {
      expect(folder.blockIdentifier).toMatch(/^folder-[a-f0-9-]+$/u);
    }
  });

  it("shares explicit identities with implicit ancestors regardless of declaration order", () => {
    const placements: Folder[] = [
      { id: "grandchild", location: "/a/b/c" },
      { id: "child", location: "/a/b" },
      { id: "parent", location: "/a" },
      { id: "child", location: "/a/b" },
    ];
    const folders = buildFolderTree(placements, randomnessKey);
    expect(buildFolderTree([...placements].reverse(), randomnessKey)).toEqual(
      folders,
    );
    expect(folders.map(({ id, location }) => ({ id, location }))).toEqual([
      { id: "parent", location: "/a" },
      { id: "child", location: "/a/b" },
      { id: "grandchild", location: "/a/b/c" },
    ]);
  });

  it("uses explicit identities independently of paths and scopes them to the bundle", () => {
    const before = buildFolderTree(
      [{ id: "fish", location: "/Animals/Fish" }],
      randomnessKey,
    ).find((folder) => folder.id === "fish")!;
    const after = buildFolderTree(
      [{ id: "fish", location: "/Aquarium/Livestock" }],
      randomnessKey,
    ).find((folder) => folder.id === "fish")!;
    expect(after).toMatchObject({
      outputReadableId: before.outputReadableId,
      outputShapeId: before.outputShapeId,
      blockIdentifier: before.blockIdentifier,
      name: "Livestock",
      parentLocation: "/Aquarium",
    });
    const otherBundle = buildFolderTree(
      [{ id: "fish", location: "/Aquarium/Livestock" }],
      "other-bundle",
    ).find((folder) => folder.id === "fish")!;
    expect(otherBundle.outputShapeId).not.toBe(after.outputShapeId);
  });

  it("derives all folder locations and names from location even when the id resembles a different location", () => {
    const folders = buildFolderTree(
      [{ id: "/Old/Name", location: "/Aquarium/Animals/Fish" }],
      randomnessKey,
    );
    expect(folders.map(({ location }) => location)).toEqual([
      "/Aquarium",
      "/Aquarium/Animals",
      "/Aquarium/Animals/Fish",
    ]);
    expect(folders[2]).toMatchObject({
      id: "/Old/Name",
      location: "/Aquarium/Animals/Fish",
      name: "Fish",
      parentLocation: "/Aquarium/Animals",
      outputShapeId: toBlockShapeId(
        ReadableIdGenerator.getForCompassFolderOutput("/Old/Name"),
        randomnessKey,
      ),
    });
  });

  it.each([
    {
      placements: [
        { id: "same", location: "/a" },
        { id: "same", location: "/b" },
      ],
      error: 'Folder id "same" is used for both',
    },
    {
      placements: [
        { id: "first", location: "/a" },
        { id: "second", location: "/a" },
      ],
      error: 'Folder location "/a" has conflicting ids',
    },
    {
      placements: [{ id: "/a", location: "/a/b" }],
      error: 'Folder id "/a" is used for both',
    },
  ])(
    "rejects ambiguous folder identities $placements",
    ({ placements, error }) => {
      expect(() => buildFolderTree(placements)).toThrow(error);
    },
  );
});
