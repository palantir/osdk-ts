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

import { afterEach, beforeEach, describe, expect, it } from "vitest";

import type { BlockDataAddOn } from "../cli/marketplaceSerialization/BlockGeneratorResult.js";
import { buildFolderTree, generateFolderBlockResults } from "./foldersUtil.js";
import { ReadableIdGenerator } from "./generateRid.js";

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

  it("preserves folder outputs and parent references when explicitly identified folders move and rename", async () => {
    const generate = (parentLocation: string, childLocation: string) =>
      generateFolderBlockResults(
        [
          { id: "/Old/Aquarium", location: parentLocation },
          { id: "/Old/Aquarium/Fish", location: childLocation },
        ],
        buildDir,
        randomnessKey,
      );
    const before = await generate("/Old/Aquarium", "/Old/Aquarium/Fish");
    const after = await generate("/New/Habitats", "/New/Habitats/Animals");
    for (const [id, name, location] of [
      ["/Old/Aquarium", "Habitats", "/New/Habitats"],
      ["/Old/Aquarium/Fish", "Animals", "/New/Habitats/Animals"],
    ]) {
      const outputId = ReadableIdGenerator.getForCompassFolderOutput(id);
      const previous = before.find((block) => block.outputs[outputId])!;
      const next = after.find((block) => block.outputs[outputId])!;
      expect(next.block_identifier).toBe(previous.block_identifier);
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
      const parentId = id === "/Old/Aquarium/Fish" ? "/Old/Aquarium" : "/New";
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
  });

  it("rejects an explicit ID that collides with an implicit ancestor", () => {
    expect(() => buildFolderTree([{ id: "/a", location: "/a/b" }])).toThrow(
      'Folder id "/a" is used for both',
    );
  });
});
